import os

# 读取源文字稿
with open('source/content.txt', 'r', encoding='utf-8') as f:
    lines = [line.strip() for line in f if line.strip()]

# 第一行是標題，我們跳過
paragraphs = lines[1:]

# 讀取 HTML 模板
with open('source/index_template.html', 'r', encoding='utf-8') as f:
    template = f.read()

pages_html = ""

# 循環產生每一頁跨頁的左右 HTML 結構
for i, para in enumerate(paragraphs):
    img_num = i + 2
    img_path = f"assets/images/image_{img_num}.png"
    page_num = i + 1
    
    # 左側：圖片頁
    pages_html += f"""      <!-- Spread {page_num}: Image {img_num} + Text -->
      <div class="page">
        <div class="page-content image-page">
          <img src="{img_path}" alt="Image {img_num}">
        </div>
      </div>
"""
    # 右側：文字頁
    pages_html += f"""      <div class="page">
        <div class="page-content text-page">
          <div class="page-number">{page_num}</div>
          <p>{para}</p>
        </div>
      </div>\n"""

# 替換模板中的佔位符
final_html = template.replace('<!-- INJECT_PAGES_HERE -->', pages_html)

# 寫出到網頁主檔
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

print(f"index.html created successfully with {len(paragraphs)} spreads.")
