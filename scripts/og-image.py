#!/usr/bin/env python3
"""Gera public/og-image.png (1200x630), a prévia do link em LinkedIn, WhatsApp, Slack etc.

Uso: pip install pillow && python3 scripts/og-image.py
Mesma identidade visual do banner do LinkedIn (azul-marinho, fonte Lato).
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
W, H = 1200, 630
FONTS = Path("/usr/share/fonts/truetype/lato")


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONTS / name), size)


img = Image.new("RGB", (W, H))
px = img.load()
for y in range(H):  # gradiente diagonal: #0a1120 -> #173a8a
    for x in range(W):
        t = (x / W) * 0.65 + (y / H) * 0.35
        px[x, y] = (int(10 + (23 - 10) * t), int(17 + (58 - 17) * t), int(32 + (138 - 32) * t))
d = ImageDraw.Draw(img)

# foto circular
photo = Image.open(ROOT / "src/assets/tom.png").convert("RGB").resize((300, 300), Image.LANCZOS)
mask = Image.new("L", (300, 300), 0)
ImageDraw.Draw(mask).ellipse((0, 0, 299, 299), fill=255)
ring = Image.new("RGB", (316, 316), (141, 176, 255))
ring_mask = Image.new("L", (316, 316), 0)
ImageDraw.Draw(ring_mask).ellipse((0, 0, 315, 315), fill=255)
img.paste(ring, (812, 157), ring_mask)
img.paste(photo, (820, 165), mask)

d.rounded_rectangle((80, 120, 152, 126), radius=3, fill=(141, 176, 255))
d.text((80, 150), "Tom Sales", font=font("Lato-Black.ttf", 84), fill=(255, 255, 255))
d.text((80, 250), "Soares de Camargo", font=font("Lato-Bold.ttf", 46), fill=(214, 225, 245))
d.text((80, 335), "Desenvolvedor Backend Java", font=font("Lato-Bold.ttf", 40), fill=(141, 176, 255))
d.text((80, 395), "Spring Boot · Microsserviços · Kafka · AWS", font=font("Lato-Regular.ttf", 32), fill=(200, 212, 235))
d.text((80, 520), "tomsalescamargo.github.io", font=ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf", 28), fill=(160, 178, 210))

out = ROOT / "public/og-image.png"
img.save(out, optimize=True)
print(out)
