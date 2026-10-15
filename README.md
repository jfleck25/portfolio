# Jimmy Fleck — Personal Portfolio & AI Builder

A modern, high-performance personal portfolio for **Jimmy Fleck** (Product Manager & AI Builder), migrated from Framer to clean, open React + Vite.

Zero vendor lock-in, zero Framer badges, ultra-fast load times, and 100% free hosting ready for **Vercel** or **GitHub Pages**.

---

## ⚡ Tech Stack & Highlights

- **Framework**: React 19 + Vite 8
- **Styling**: Vanilla CSS design system with custom tokens, obsidian glassmorphism, responsive grids, and Google Fonts (`Inter Tight` & `Inter`).
- **Assets**: 100% self-hosted images and previews in `/public/images` (no dependencies on Framer CDNs).
- **Contact**: Direct reach-out links to email (`jimmyfleck3@gmail.com`) and LinkedIn.
- **Deployment**: Pre-configured for **Vercel** (`vercel.json` included for single-page routing and caching) or **GitHub Pages**.

---

## 🚀 Quick Start (Local Development)

1. Clone or open this repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

---

## 🚢 Deploying to Vercel (Recommended)

Since you already have a Vercel account, this is the easiest and best route:

### Method 1: Connect via GitHub (Automatic CI/CD)
1. Push this repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/jfleck25/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```
2. Open your [Vercel Dashboard](https://vercel.com/dashboard).
3. Click **Add New...** → **Project** and select your repository.
4. Vercel will automatically detect **Vite**.
5. Click **Deploy**. Your site is now live!

### Method 2: Deploy with Vercel CLI
```bash
npx vercel
```

---

## 🌐 Connecting a Custom Domain (e.g. `jimmyfleck.com`)

1. In your **Vercel Dashboard**, go to your project → **Settings** → **Domains**.
2. Type your domain (e.g., `jimmyfleck.com` or `www.jimmyfleck.com`) and click **Add**.
3. Follow the DNS instructions (add a `CNAME` or `A` record at your domain registrar).
4. Vercel automatically provisions and renews a free SSL certificate.

---

## 📂 Project Structure

```
jimmyfleck-portfolio/
├── public/
│   └── images/              # Self-contained project images, profile photo, and favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Responsive glassmorphism navigation (Home, Portfolio, Experience)
│   │   ├── Footer.jsx       # Footer with social links and contact banner
│   │   └── Icons.jsx        # Standalone SVG brand icons (GitHub, LinkedIn)
│   ├── data/
│   │   └── portfolioData.js # Bio, major projects, side projects, and experience timeline
│   ├── pages/
│   │   ├── Home.jsx         # Hero, background, badges, and featured preview
│   │   ├── Portfolio.jsx    # Flagship projects & side project cards
│   │   └── Experience.jsx   # Interactive career & education timeline
│   ├── App.jsx              # Client router with history sync
│   ├── index.css            # Custom obsidian design system & animations
│   └── main.jsx
├── vercel.json              # SPA rewrites & caching rules
└── package.json
```
