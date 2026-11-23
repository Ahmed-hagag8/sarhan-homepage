"""
Extract the new SARHAN logo from its pure-white background.

Strategy (flood-fill based, preserves internal gold highlights):
  The background is uniform pure white (#FFFFFF) with a soft warm shadow
  beneath the logo. The logo itself contains near-white metallic highlights
  INSIDE the gold elements (specular sheen) that must NOT be punched out.

  1. Build a "near-white" mask (luminance > threshold) — captures both the
     pure white bg and the warm shadow.
  2. Label connected regions of that mask.
  3. Keep only the regions that touch an image border = the BACKGROUND.
     Internal highlights are enclosed by gold/black, so they form their own
     labelled regions that never touch the border → they stay opaque.
  4. Feather the cut edge by 1-2px using luminance-based alpha so the logo
     has smooth anti-aliased edges against any new background.
"""

import numpy as np
from PIL import Image
from scipy.ndimage import label, binary_dilation

SRC = "/home/z/my-project/upload/pasted_image_1795444690668.png"
DST = "/home/z/my-project/public/sarhan-logo.png"

# --- Load ------------------------------------------------------------------
img = Image.open(SRC).convert("RGB")
arr = np.array(img).astype(np.float32)
H, W, _ = arr.shape
R, G, B = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]

print(f"Source image: {W} x {H}")

# --- Luminance -------------------------------------------------------------
lum = 0.299 * R + 0.587 * G + 0.114 * B

# --- Background mask (pure white + full warm shadow, but never gold) -------
# The background is uniform white; the soft shadow beneath the logo is warm
# gray (lum ~180-230, R-B ~20-40). Gold pixels — including bright internal
# highlights (lum ~180-220) — have a STRONG warm signal (R-B > 55).
#
# So: a pixel is "background-like" when it is bright AND not strongly gold.
# This lets the flood-fill remove the full shadow gradient without ever
# leaking into the gold logo (which stops the fill dead).
WHITE_THRESHOLD = 170           # luminance above this = bright
warmth = R - B
GOLD_WARMTH = 55                # R-B above this = definitely gold (protected)
near_white = (lum > WHITE_THRESHOLD) & (warmth < GOLD_WARMTH)

# --- Label connected regions of near-white --------------------------------
structure = np.ones((3, 3), dtype=int)  # 8-connectivity
labeled, num = label(near_white, structure=structure)
print(f"Near-white regions found: {num}")

# --- Determine which regions touch the border = true background -----------
border_labels = set()
border_labels.update(labeled[0, :].tolist())        # top row
border_labels.update(labeled[-1, :].tolist())       # bottom row
border_labels.update(labeled[:, 0].tolist())        # left col
border_labels.update(labeled[:, -1].tolist())       # right col
border_labels.discard(0)  # 0 = not near-white (logo pixels)
print(f"Border-touching background regions: {len(border_labels)}")

background = np.isin(labeled, list(border_labels))

# --- Build alpha -----------------------------------------------------------
# Start: opaque everywhere
alpha = np.full((H, W), 255.0, dtype=np.float32)
# Background → fully transparent
alpha[background] = 0.0

# --- Edge feathering -------------------------------------------------------
# Dilate the background mask by 3px to create a wider transition zone just
# inside the logo edge. In that zone, blend alpha by luminance so anti-aliased
# edge pixels (part-white blends) get partial transparency, while solid
# logo pixels stay opaque. Internal highlights are deep inside the logo and
# are never reached by a 3px dilation from the background, so they stay
# fully opaque.
edge_zone = binary_dilation(background, structure=structure, iterations=3) & ~background

# In the edge zone: the whiter the pixel, the more transparent.
# lum >= WHITE_THRESHOLD → alpha 0 ; lum <= (WHITE_THRESHOLD - 80) → alpha 255
edge_lo = WHITE_THRESHOLD - 80
edge_alpha = np.clip((WHITE_THRESHOLD - lum) / (WHITE_THRESHOLD - edge_lo) * 255.0, 0, 255)
alpha[edge_zone] = edge_alpha[edge_zone]

# --- Decontaminate edge RGB (push residual white tint toward the logo color)
# For edge-zone pixels, reduce the blue/green so the fringe reads as
# gold/dark rather than as a light halo over dark backgrounds.
edge_mask = edge_zone.astype(bool)
if edge_mask.any():
    # Slightly warm the edge pixels: reduce B, keep R.
    decon_strength = (1.0 - alpha / 255.0)  # 1 where transparent, 0 where opaque
    arr[:, :, 1] = np.where(edge_mask, arr[:, :, 1] * (1 - decon_strength * 0.4), arr[:, :, 1])
    arr[:, :, 2] = np.where(edge_mask, arr[:, :, 2] * (1 - decon_strength * 0.6), arr[:, :, 2])

arr_u8 = np.clip(arr, 0, 255).astype(np.uint8)
alpha_u8 = np.clip(alpha, 0, 255).astype(np.uint8)

rgba = np.dstack([arr_u8, alpha_u8[:, :, None]])
result = Image.fromarray(rgba, "RGBA")

# --- Trim to content bbox --------------------------------------------------
bbox = result.getbbox()
print(f"Content bbox: {bbox}")
result_cropped = result.crop(bbox)

# --- Save ------------------------------------------------------------------
result_cropped.save(DST)
print(f"Saved: {DST}  ({result_cropped.width} x {result_cropped.height})")

# Sanity stats
opaque = np.count_nonzero(alpha_u8 > 16)
print(f"Opaque-ish pixels: {opaque} ({100*opaque/(H*W):.1f}% of source)")
