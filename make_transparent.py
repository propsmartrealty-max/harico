from PIL import Image
import numpy as np

def make_transparent(image_path, output_path, tolerance=30):
    try:
        img = Image.open(image_path)
        img = img.convert("RGBA")
        
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # Check if pixel is "white-ish" within tolerance
            # Euclidean distance from white could be better, but simple threshold works for pure backgrounds
            if item[0] > (255 - tolerance) and item[1] > (255 - tolerance) and item[2] > (255 - tolerance):
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
        
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Successfully saved transparent image to {output_path} with tolerance {tolerance}")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    # Using the cropped version as source to maintain size
    # Assuming harico_logo.jpg was the cropped one from previous step? 
    # Actually step 125 output said new size (808, 215) for crop_logo.py
    # and step 128 copied cropped to .jpg. So .jpg is the cropped one.
    make_transparent("public/harico_logo.jpg", "public/harico_logo.png", tolerance=50)
