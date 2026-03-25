import sys
try:
    from PIL import Image
except ImportError:
    print("Pillow not installed")
    sys.exit(1)

def trim_white_bg(img_path):
    try:
        img = Image.open(img_path).convert("RGBA")
    except Exception as e:
        print("Failed to load:", e)
        return

    data = img.getdata()
    new_data = []
    
    for item in data:
        # Check against a high threshold of white to target the bright background
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0)) # Make Transparent
        else:
            new_data.append(item)
    
    img.putdata(new_data)
    
    # Calculate bounding box to trim outer empty pixels perfectly
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(img_path, "PNG")
    print("Successfully removed background and cropped logo!")

if __name__ == "__main__":
    trim_white_bg("logo.png")
