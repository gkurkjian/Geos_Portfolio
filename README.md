# George Kurkjian – Portfolio

This is my personal developer portfolio, built with [Next.js 14](https://nextjs.org/), using the App Router and TypeScript.

It showcases my projects, experience, skills, and includes a custom-built contact form powered by **Nodemailer** and deployed via **Vercel**.

## 🔗 Live Demo

🌍 **[geostacklabs.com](https://geostacklabs.com)**  
_(Replace with your Vercel domain if not yet live)_

---

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript / JavaScript
- **Styling**: Bootstrap 5, Framer Motion
- **Email**: Nodemailer (via API route)
- **Hosting**: Vercel
- **Icons**: React Icons

---

## 📂 Project Structure

```
my-app/
├── app/                 # App Router pages
├── components/          # Reusable components
├── public/              # Static assets
├── styles/              # CSS / SCSS
├── .env.local           # Local environment variables (never committed)
├── next.config.mjs      # Next.js config
├── package.json
└── README.md
```

---

## ✉️ Contact Form

The contact form is powered by `nodemailer` using a secure API route at:

```
/api/contact
```

- Emails are sent using Gmail SMTP
- App password stored securely in environment variables
- Works both locally and in production (Vercel)

---

## 🛠️ Getting Started

### 1. Clone the project

```bash
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd Geos_Portfolio/my-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root of `my-app/`:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password
EMAIL_TO=george@geostacklabs.com
```

### 4. Run in development

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build && npm start
```

---

## ✅ Features

- 🔥 Fully custom contact form using Nodemailer
- ⚡ Fast performance with static + dynamic rendering
- 🎨 Clean UI with Bootstrap + Framer Motion
- 📱 Mobile-first responsive layout
- 🌐 Deployed to Vercel with custom domain

---

## 📄 License

MIT — free to use and modify.

---

> Crafted with ❤️ by **George Kurkjian**  
> 🌐 [geostacklabs.com](https://geostacklabs.com)
