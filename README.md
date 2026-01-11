# 🎮 Portfolio Website – Garv Chopra

This repository contains the source code for my personal **portfolio website**, built to showcase my work as a **Unity / Game Developer with a strong focus on VR, AR, and XR technologies**.

The website highlights my projects, technical skills, and experience in building immersive, real-time interactive applications.

---

## 🚀 Live Website
🔗 https://portfolio-garv-chopra.vercel.app  
*(Custom domain coming soon)*

---

## 🧠 About the Portfolio
This portfolio is designed for:
- Recruiters and hiring managers
- Game studios and XR companies
- Internship and full-time Unity / XR roles

It focuses on **technical depth, real-world projects, and clean presentation**, rather than flashy visuals.

---

## 🛠️ Tech Stack
- **Vue.js 2** (Vue CLI)
- **TypeScript**
- **Vue Router**
- **LESS** for styling
- **Vercel** for deployment

---

## 📂 Project Structure
```

├── public/          # Static assets
├── src/
│   ├── components/  # Reusable Vue components
│   ├── views/       # Page-level components
│   ├── router/      # Vue Router configuration
│   ├── data/        # Project and content data
│   ├── css/         # Global styles
│   ├── App.vue
│   └── main.ts
├── .env.example     # Environment variable template
├── package.json
└── README.md

````

---

## ✨ Features
- SPA architecture with Vue Router (history mode)
- Responsive design for desktop and mobile
- Dedicated pages for:
  - Game Projects
  - XR / AR / VR Projects
  - Resume
  - About & Contact
- SEO-ready meta tags
- Fast static deployment on Vercel

---

## 🧪 Local Development
```bash
npm install
npm run serve
````

The app will run at:

```
http://localhost:8080
```

---

## 📦 Production Build

```bash
npm run build
```

Build output will be generated in the `dist/` directory.

---

## 🔐 Environment Variables

Create a `.env` file (not committed to Git):

```env
VUE_APP_TITLE=Garv Chopra | Unity & XR Developer
VUE_APP_DESCRIPTION=Portfolio of Garv Chopra – Unity, VR, AR, XR Developer
VUE_APP_OGDESCRIPTION=Unity / XR / VR Developer Portfolio
VUE_APP_PRODUCTION_URL=https://your-project-name.vercel.app
```

> ⚠️ Environment variables must also be added manually in **Vercel Dashboard → Project Settings → Environment Variables**.

---

## ☁️ Deployment

This project is deployed using **Vercel** as a static site.

Deployment steps:

1. Push code to GitHub
2. Import repository in Vercel
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Add environment variables
6. Deploy 🚀

---

## 📈 Future Improvements

* Route-based dynamic SEO meta tags
* Project detail pages with media previews
* Lighthouse performance optimization
* Custom domain setup
* Blog / devlog section

---

## 👤 Author

**Garv Chopra**
Unity | Game Development | VR | AR | XR

📧 Email: *[your-email@example.com](mailto:your-email@example.com)*
🔗 GitHub: [https://github.com/garv4884](https://github.com/garv4884)
🔗 LinkedIn: *(add when ready)*

---

> This portfolio is actively maintained and updated with new projects and improvements.
