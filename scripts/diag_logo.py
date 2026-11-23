"""Diagnostic: composite the extracted logo on a checkerboard to verify
transparency, and sample pixel values from the shadow region of the SOURCE
image to understand why the shadow isn't being removed."""

import numpy as np
from PIL import Image

SRC = "/home/z/my-project/upload/pasted_image_1795444690668.png"
LOGO = "/home/z/my-project/public/sarhan-logo.png"

# --- Checkerboard composite ------------------------------------------------
logo = Image.open(LOGO).convert("RGBA")
lw, lh = logo.size
scale = 500 / lw
logo_small = logo.resize((500, int(lh * scale)), Image.LANCZOS)
lw, lh = logo_small.size
PAD = 60
canvas = Image.new("RGBA", (lw + 2 * PAD, lh + 2 * PAD), (255, 255, 255, 255))

# Draw checkerboard
cb = Image.new("RGBA", (lw + 2 * PAD, lh + 2 * PAD), (255, 255, 255, 255))
cba = np.array(cb)
for y in range(cb.height):
    for x in range(cb.width):
        if (x // 32 + y // 32) % 2 == 0:
            cba[y, x] = (230, 230, 235, 255)
        else:
            cba[y, x] = (200, 200, 210, 255)
cb = Image.fromarray(cba, "RGBA")
cb.paste(logo_small, (PAD, PAD), logo_small)
cb.convert("RGB").save("/tmp/render/sarhan-logo-checker.png")
print("Saved checkerboard composite")

# --- Sample source shadow region -------------------------------------------
src = Image.open(SRC).convert("RGB")
sarr = np.array(src).astype(np.float32)
H, W, _ = sarr.shape
print(f"\nSource: {W} x {H}")

# Sample a grid of pixels in the lower-center region (where the shadow is)
print("\nSampling lower-center region (shadow area), rows 580-680, cols 250-480:")
for y in range(580, 690, 15):
    row = []
    for x in range(250, 490, 40):
        r, g, b = sarr[y, x]
        lum = 0.299 * r + 0.587 * g + 0.114 * b
        row.append(f"({r:.0f},{g:.0f},{b:.0f},L={lum:.0f})")
    print(f"  y={y}: " + " ".join(row))

# Also sample the very bottom white area
print("\nBottom white area (rows 700-730):")
for y in range(700, 732, 10):
    r, g, b = sarr[y, 366]
    lum = 0.299 * r + 0.587 * g + 0.114 * b
    print(f"  y={y}: ({r:.0f},{g:.0f},{b:.0f},L={lum:.0f})")
