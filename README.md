This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Attention - توجه

This project uses a middleware to detect user device and redirect it to its recommended page.
در این پروژه وقتی کاربر لینک سرور را در مرورگر وارد می کند توسط میان افزار یا middleware به صفحه مورد نظر هدایت می شود.
برای مثال: 
localhost:3000/mobile => mobile devices
localhost:3000/desktop => desktop devices