import os
import sys

output_path = sys.argv[1] if len(sys.argv) > 1 else 'book.md'
output_dir = os.path.abspath(os.path.dirname(output_path)) if os.path.dirname(output_path) else os.path.abspath('.')
with open('source/content.txt', 'r', encoding='utf-8') as f:
    lines = [line.strip() for line in f if line.strip()]

title = lines[0]
paragraphs = lines[1:]

markdown_content = f"# {title}\n\n"

# Cover and Dedication
# The command line option `--cover assets/images/image_1.png` builds the cover page.
# Here we add the dedication page (致謝頁).
dedication_text = "獻給親愛的盈均"
markdown_content += f"<br><br><br><br><br>\n<h2 align='center' style='font-style: italic; color: #5b4b42;'>{dedication_text}</h2>\n\n"
markdown_content += "<div style='page-break-after: always;'></div>\n\n"

# Map para1 -> image_2, etc.
for i, para in enumerate(paragraphs):
    img_num = i + 2
    # Automatically compute relative path from the output file to the image
    img_abs = os.path.abspath(f"assets/images/image_{img_num}.png")
    img_name = os.path.relpath(img_abs, output_dir)
    
    
    markdown_content += f"![Image {img_num}]({img_name})\n\n"
    markdown_content += f"<p style='font-size: 1.5em; line-height: 1.6;'>{para}</p>\n\n"
    # Adding a page break
    markdown_content += "<div style='page-break-after: always;'></div>\n\n"

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(markdown_content)

print(f"{output_path} created. Title: {title}, Paragraphs: {len(paragraphs)}")
