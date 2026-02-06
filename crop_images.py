from PIL import Image, ImageChops
import numpy as np
import os

def crop_to_paper(image_path):
    try:
        full_path = os.path.abspath(image_path)
        if not os.path.exists(full_path):
            print(f"Skipping: {image_path} (File not found)")
            return

        print(f"Processing: {image_path}")
        img = Image.open(full_path).convert("RGB")
        np_img = np.array(img)
        h, w, _ = np_img.shape
        
        # Strategy: Find the "Paper" region. (Strict Density v8 logic)
        brightness = np.mean(np_img, axis=2)
        is_white = brightness > 210
        
        row_white_density = np.mean(is_white, axis=1)
        col_white_density = np.mean(is_white, axis=0)
        
        valid_rows = np.where(row_white_density > 0.3)[0]
        valid_cols = np.where(col_white_density > 0.3)[0]
        
        if valid_rows.size == 0 or valid_cols.size == 0:
            print("  -> Could not detect paper content.")
            return

        y_start, y_end = valid_rows[0], valid_rows[-1] + 1
        x_start, x_end = valid_cols[0], valid_cols[-1] + 1
        
        margin = 5
        y_start = min(h, y_start + margin)
        y_end = max(0, y_end - margin)
        x_start = min(w, x_start + margin)
        x_end = max(0, x_end - margin)
        
        if (x_end - x_start > 100) and (y_end - y_start > 100):
            cropped_img = img.crop((x_start, y_start, x_end, y_end))
            cropped_img.save(full_path, quality=95)
            print(f"  -> Cropped {image_path}: {w}x{h} -> {x_end-x_start}x{y_end-y_start}")
        else:
            print("  -> Detected region too small to be valid content.")

    except Exception as e:
        print(f"Error processing {image_path}: {e}")

TARGET_IMAGES = [
    "public/assets/harico-divaam-3bhk-grand-new.png"
]

if __name__ == "__main__":
    print("Starting STRICT content extraction (v9 - 3BHK Grand Only)...")
    for img_path in TARGET_IMAGES:
        crop_to_paper(img_path)
    print("Cleanup complete.")
