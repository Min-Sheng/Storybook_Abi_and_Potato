# 阿比與土豆 (Abi and Potato) - 互動式繪本專案

這是一個結合現代網頁技術與溫馨故事的互動式電子繪本專案。故事講述了小男孩阿比與他的新夥伴——小白貓「土豆」的一場奇幻冒險。

![阿比與土豆](assets/images/image_1.png)

## 📖 故事簡介
阿比用家中的老牛換回了小白貓土豆，卻意外種下了一顆神奇種子，長出了直通雲霄的巨大貓抓柱。他們前往雲端上的「貓貓國」，遇見了守衛貓吉、大臣貓利以及孤單的大貓貓女王。最終，阿比用勇氣與溫情融化了女王的心，並將大家帶回地面，展開了幸福的新生活。

## ✨ 專案特色
*   **互動式網頁翻頁書**：使用 `StPageFlip` 技術，提供擬真的實體書翻頁體驗。
*   **吉卜力風格藝術**：採用精緻的水彩風格插畫，營造溫暖的氛圍。
*   **多平台支援**：支持網頁線上閱讀及 EPUB 電子書導出。
*   **自動化建置**：內附 Python 腳本，可根據 `source` 資料夾中的文稿自動生成 HTML 與 Markdown 檔案。

## 🚀 快速開始

### 1. 檢視網頁版
只需在瀏覽器中開啟 `index.html` 即可開始閱讀。
或使用本機伺服器：
```bash
npx serve .
```

### 2. 資料建置與更新
如果你修改了 `source/content.txt` 中的故事文字，可以使用以下腳本更新檔案：

*   **更新網頁版內容**：
    ```bash
    python3 build_web.py
    ```
*   **生成電子書 Markdown**：
    ```bash
    python3 build_book.py
    ```

### 3. 匯出電子書 (EPUB)
本專案支援將故事匯出為 EPUB 格式。確保系統已安裝相關轉換工具（如 Calibre 的 `ebook-convert`），然後運行：
```bash
bash export_book.sh
```

## 📂 專案結構
```text
.
├── index.html          # 網頁版主程式
├── book.md             # 電子書 Markdown 原始檔
├── assets/             # 圖片、字體與靜態資源
├── css/                # 網頁樣式表 (Vanilla CSS)
├── js/                 # 網頁互動邏輯 (JavaScript)
├── source/             # 原始文稿與模板
├── build_web.py        # 網頁建置腳本
├── build_book.py       # Markdown 建置腳本
└── export_book.sh      # 電子書匯出腳本
```

## ❤️ 致謝
*   **故事與創意**：由 Vincent Wu 構思創作。
*   **技術支持**：使用 `StPageFlip` 開源庫實現翻頁效果。
*   **獻詞**：獻給親愛的盈均。

---
*Made with ❤️ for storytelling and technology.*
