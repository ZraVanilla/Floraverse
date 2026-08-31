from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1]
asset_dir = root / 'assets'
icons_dir = asset_dir / 'icons'
icons_dir.mkdir(parents=True, exist_ok=True)

icons = {
    'plant': ('🌱', '#8BCB8A'),
    'leaf': ('🌿', '#52B36B'),
    'water': ('💧', '#6FA8FF'),
    'sun': ('☀️', '#FFD45C'),
    'flower': ('🌼', '#FF718D'),
    'chat': ('💬', '#6FA8FF'),
    'shop': ('🛒', '#FF9B70'),
    'community': ('🤝', '#8BCB8A'),
    'fire': ('🔥', '#FF9B70'),
    'book': ('📚', '#6FA8FF'),
    'check': ('✅', '#8BCB8A'),
    'map': ('📍', '#FFD45C'),
    'spark': ('✨', '#FFD45C'),
    'seed': ('🌾', '#8BCB8A'),
    'garden': ('🪴', '#8BCB8A'),
    'cart': ('🛒', '#FF718D'),
    'search': ('🔎', '#6FA8FF'),
    'home': ('🏠', '#6FA8FF'),
    'bell': ('🔔', '#FFD45C'),
}

for name, (emoji, hex_color) in icons.items():
    img = Image.new('RGBA', (128, 128), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    color = tuple(int(hex_color.lstrip('#')[i:i+2], 16) for i in (0, 2, 4)) + (220,)
    pad = 14
    draw.rounded_rectangle((pad, pad, 128 - pad, 128 - pad), radius=30, fill=color)
    try:
        font = ImageFont.truetype('seguiemj.ttf', 68)
    except Exception:
        font = ImageFont.load_default()
    try:
        bbox = draw.textbbox((0, 0), emoji, font=font)
        w = bbox[2] - bbox[0]
        h = bbox[3] - bbox[1]
        x = (128 - w) / 2
        y = (128 - h) / 2 - 8
        draw.text((x, y), emoji, font=font, embedded_color=True)
    except Exception:
        draw.text((36, 36), emoji, font=font)
    img.save(icons_dir / f'{name}.png', format='PNG')

cols = 5
rows = (len(icons) + cols - 1) // cols
sheet = Image.new('RGBA', (cols * 128, rows * 128), (255, 255, 255, 0))
for i, name in enumerate(icons):
    icon = Image.open(icons_dir / f'{name}.png').convert('RGBA')
    x = (i % cols) * 128
    y = (i // cols) * 128
    sheet.paste(icon, (x, y))

sheet.save(asset_dir / 'emoji-master-sheet.png', format='PNG')
print(f'Created {len(icons)} icon PNGs in {icons_dir}')
print(f'Master sheet created at {asset_dir / "emoji-master-sheet.png"}')
