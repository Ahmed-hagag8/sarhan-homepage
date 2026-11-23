"""
Extract the gold SARHAN logo from its navy background and save it with a
transparent background.

Strategy:
  The gold logo is WARM (R > B). The navy background and its drop shadow are
  COOL (B >= R). We exploit this to build an alpha mask:

    alpha = clamp((R - B) / SOFT, 0, 1)

  This makes every cool pixel (navy bg + its darkened shadow) fully
  transparent, and every warm gold pixel fully opaque, with a soft
  anti-aliased transition at the edges.

  We also decontaminate the edge pixels' RGB so the residual navy tint in
  semi-transparent blends does not show as a dark fringe over white or
  charcoal backgrounds.
"""

import numpy as np
from PIL import Image

SRC = "/home/z/my-project/upload/pasted_image_1795441240743.png"
DST = "/home/z/my-project/public/sarhan-logo.png"

# --- Load ------------------------------------------------------------------
img = Image.open(SRC).convert("RGB")
arr = np.array(img).astype(np.float32)
H, W, _ = arr.shape
R, G, B = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]

print(f"Source image: {W} x {H}")
# Sample corners to confirm the navy background color
corners = {
    "TL": arr[5, 5],
    "TR": arr[5, W - 6],
    "BL": arr[H - 6, 5],
    "BR": arr[H - 6, W - 6],
}
for name, px in corners.items():
    r, g, b = px
    print(f"  {name}: RGB=({r:.0f},{g:.0f},{b:.0f})  R-B={r-b:+.0f}")

# --- Alpha mask ------------------------------------------------------------
# Gold is warm (R > B); navy + its shadow are cool (B >= R).
SOFT = 25.0  # width of the soft transition band (in R-B units)
warmness = R - B
alpha = np.clip(warmness / SOFT, 0.0, 1.0)

# Force any remaining cool-ish pixel fully transparent (kills residual navy
# glow / shadow halo that sits just at the R==B boundary).
cool = (B > R + 2)
alpha[cool] = 0.0

# --- RGB decontamination ---------------------------------------------------
# For semi-transparent edge pixels, the raw RGB is a muddy gold+navy blend.
# Push their blue/green down so they read as gold once composited.
edge = (1.0 - alpha)[:, :, None]          # 1 where transparent, 0 where opaque
# Reduce blue aggressively on edge pixels, green mildly.
B_clean = B * (1.0 - edge[:, :, 0] * 0.65)
G_clean = G * (1.0 - edge[:, :, 0] * 0.25)
# Keep red (it's already the warm signal).

arr_out = np.stack([R, G_clean, B_clean], axis=2)
arr_out = np.clip(arr_out, 0, 255).astype(np.uint8)
alpha_u8 = np.clip(alpha * 255.0, 0, 255).astype(np.uint8)

rgba = np.dstack([arr_out, alpha_u8[:, :, None]])
result = Image.fromarray(rgba, "RGBA")

# --- Trim to content -------------------------------------------------------
bbox = result.getbbox()
print(f"Content bbox: {bbox}")
result_cropped = result.crop(bbox)

# --- Save ------------------------------------------------------------------
result_cropped.save(DST)
print(f"Saved: {DST}  ({result_cropped.width} x {result_cropped.height})")

# Quick stats for a sanity check
nonzero_alpha = np.count_nonzero(alpha_u8 > 16)
print(f"Opaque-ish pixels: {nonzero_alpha} ({100*nonzero_alpha/(H*W):.1f}% of source)")
