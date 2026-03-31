import cv2
from pyzbar.pyzbar import decode
import sys

def read_qr(image_path):
    img = cv2.imread(image_path)
    if img is None:
        print(f"Could not open or find the image: {image_path}")
        return
    
    decoded_objects = decode(img)
    for obj in decoded_objects:
        print(f"Type: {obj.type}")
        print(f"Data: {obj.data.decode('utf-8')}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        read_qr(sys.argv[1])
    else:
        print("Please provide an image path.")
