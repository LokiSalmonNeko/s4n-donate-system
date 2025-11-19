# S4N Donate System (S4N 贊助系統)

這是一個開源的實況主贊助平台，支援 ECPay (綠界) 和 O'Pay (歐付寶) 金流，並提供 OBS 即時通知功能。

[![Deploy on Zeabur](https://zeabur.com/button.svg)](https://zeabur.com/templates/PZ7FR9?referralCode=LokiSalmonNeko)

## 功能特色

- **公開贊助頁面**：觀眾可以輸入暱稱、金額、留言並選擇支付方式。
- **實況主後台**：查看最近贊助紀錄，設定通知樣式 (圖片、音效、字型)。
- **OBS 通知**：專屬的 Browser Source 網址，贊助成功後即時顯示動畫與播放音效。
- **現代化日系 UI**：採用 **Tocas UI** 設計系統，提供柔和、現代的視覺體驗。
- **Docker 支援**：提供 Docker Image (`lokisalmonneko/s4n-donate-system`) 與 Docker Compose 配置。

## 快速部署 (Zeabur)

本專案已發布為 Zeabur Template，您可以透過以下步驟一鍵部署：

1. 點擊上方的 "Deploy on Zeabur" 按鈕。
2. 系統將引導您至 Zeabur Dashboard 並自動建立專案。
3. 依照提示填入環境變數。
    - 若您已有綠界或歐付寶帳號，請填入您的商店代號與金鑰。
    - **若留空，系統將自動使用測試帳號進行部署，方便您快速體驗。**
4. 部署完成後，Zeabur 會自動提供一組網域供您訪問。

**注意**：
- 資料庫 (PostgreSQL) 會自動建立並連接，無需額外設定。
- 若您需要修改程式碼，請 Fork 本專案後使用 Git 部署方式。

## 本地開發

1. 安裝依賴：
   ```bash
   npm install
   ```

2. 啟動資料庫 (Docker)：
   ```bash
   docker-compose up -d db
   ```

3. 同步資料庫 Schema：
   ```bash
   npx prisma db push
   ```

4. 啟動開發伺服器：
   ```bash
   npm run dev
   ```

## 相關連結

- [Next.js Documentation](https://nextjs.org/docs)
- [Zeabur Documentation](https://docs.zeabur.com)
- [Tocas UI](https://tocas-ui.com/)
