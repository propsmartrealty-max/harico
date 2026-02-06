from PIL import Image
import numpy as np

def crop_center_and_whitespace(image_path, output_path):
    try:
        img = Image.open(image_path)
        img = img.convert("RGB")
        
        # Convert to numpy array
        np_img = np.array(img)
        
        # Create mask of where image is NOT white
        # Assuming white is (255, 255, 255)
        # We allow a small tolerance
        mask = np.all(np_img > 240, axis=2)
        mask = ~mask # Invert so True is where content is
        
        # Find coordinates where mask is True
        coords = np.argwhere(mask)
        
        if coords.size > 0:
            y0, x0 = coords.min(axis=0)
            y1, x1 = coords.max(axis=0) + 1  # slice is exclusive at upper bound
            
            # Crop
            cropped_img = img.crop((x0, y0, x1, y1))
            cropped_img.save(output_path, quality=95)
            print(f"Successfully cropped image. New size: {cropped_img.size}")
        else:
            print("No non-white content found to crop.")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    crop_center_and_whitespace("public/harico_logo.jpg", "public/harico_logo_cropped.jpg")
