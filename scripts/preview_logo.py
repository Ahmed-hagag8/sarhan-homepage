"""Composite the extracted SARHAN logo onto white and charcoal backgrounds
so we can visually verify the transparent extraction quality in both themes.
"""

from PIL import Image

LOGO = Image.open("/home/z/my-project/public/sarhan-logo.png").convert("RGBA")

# Scale the logo to a reasonable preview size
preview_w = 600
scale = preview_w / LOGO.width
preview_h = int(LOGO.height * scale)
logo_small = LOGO.resize((preview_w, preview_h), Image.LANCZOS)

# Canvas with generous padding
PAD = 80
canvas_w = preview_w + 2 * PAD
canvas_h = preview_h + 2 * PAD

for bg_name, bg_color in [("white", (255, 255, 255)), ("charcoal", (20, 20, 22))]:
    canvas = Image.new("RGBA", (canvas_w, canvas_h), bg_color + (255,))
    canvas.paste(logo_small, (PAD, PAD), logo_small)
    out_path = f"/tmp/render/sarhan-logo-on-{bg_name}.png"
    canvas.convert("RGB").save(out_path)
    print(f"Saved: {out_path}")
