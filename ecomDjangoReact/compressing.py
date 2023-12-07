import zipfile
import os

def zip_folder(folder_path, zip_path):
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(folder_path):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, folder_path)
                zipf.write(file_path, arcname=arcname)

if __name__ == "__main__":
    folder_to_zip = "Desktop\sample\ecomDjangoReact\myprjct"
    zip_file_path = "Desktop\sample\ecomDjangoReact1\myprjct_compressed.zip"

    zip_folder(folder_to_zip, zip_file_path)
    print(f"Folder '{folder_to_zip}' has been zipped to '{zip_file_path}'.")
