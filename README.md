# ADPILOT AI — Render-ready Demo

Bản demo Next.js để chạy thử ADPILOT AI.

## Lỗi Render bạn gặp

Nếu log báo:

`Couldn't find any pages or app directory. Please create one under the project root`

thì Render đang build tại thư mục chứa `package.json` nhưng trong thư mục đó không có `app/` hoặc `pages/`.

Bản ZIP này đã có CẢ:
- `app/`
- `pages/`

và có `render.yaml` với cấu hình Render sẵn.

## Chạy local

Yêu cầu Node.js 18.17+.

```bash
npm install
npm run dev
```

Mở http://localhost:3000

## Deploy Render

Tại Render → New → Web Service:

Build Command:
```bash
npm install && npm run build
```

Start Command:
```bash
npm start
```

Root Directory:
```text
để trống
```

Plan:
```text
Free
```

Nếu deploy từ GitHub, repository phải có các mục này NGAY Ở ROOT:

```text
package.json
next.config.mjs
tsconfig.json
app/
pages/
components/
```

Không được để thành:

```text
adpilot-ai-demo/
  package.json
  app/
```

nếu Root Directory của Render vẫn để trống. Nếu repository có thêm một thư mục cấp ngoài, hãy đặt Root Directory đúng vào thư mục chứa `package.json`.

## Dữ liệu

Tất cả số liệu giao diện hiện tại là `DATA DEMO`. Không có Meta Ads, TikTok Ads, TikTok Shop hoặc Shopee API thật trong bản này.
