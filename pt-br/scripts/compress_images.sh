#!/bin/bash

# Define paths
SRC="../original_photos"
DST="../assets/img/publication_preview"

echo "Cleaning target directory..."
rm -f "$DST"/*

echo "Copying originals to target directory..."
cp "$SRC"/* "$DST"/

echo "Compressing JPGs in target directory..."
find "$DST" -iname '*.jpg' -exec mogrify -strip -quality 60 {} \;

echo "Done. Compressed images are in $DST"
