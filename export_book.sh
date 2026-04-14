# Define the save location here. 
# Note: Saving to root 'book.md' is recommended so calibre can access 'assets/images' without "outside doc root" errors.
BOOK_MD="book.md"

python3 build_book.py "$BOOK_MD" && /Applications/calibre.app/Contents/MacOS/ebook-convert \
    "$BOOK_MD" save/"阿比與土豆.epub" \
    --cover assets/images/image_1.png \
    --authors "Vincent Wu" \
    --title "阿比與土豆"