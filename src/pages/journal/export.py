import os
import shutil
from os import listdir
from os.path import isfile, join

mypath = os.path.abspath(os.getcwd())

# onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]

post_directories = listdir(mypath)

for f in (post_directories):
    if f != "export.py":
        original_file = "./" + f + "/index.md"
        normalize_name = f.replace("---", "-")
        date = normalize_name[0:10].replace("-","")
        name = normalize_name[11:].lower()
        new_file = date + "-" + name + ".md"
        print("Origin: " + original_file)
        print("Destination: " + new_file )
        shutil.copyfile(original_file, new_file)

