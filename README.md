<div align="center">

# 🦷 Lumina Dental

**A bilingual (Arabic / English) website concept for a dental clinic in Baghdad, built with Next.js, TypeScript, and Tailwind CSS.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-1A3A8C?style=for-the-badge&logo=githubpages&logoColor=white)](https://mustafacoder365.github.io/lumina-dental-website/)

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)

<br>

![Lumina Dental — English](screenshots/hero-en.png)

</div>

> **Concept project.** Lumina is a fictional clinic. The names, prices, and contact details are sample content.

---

## ✨ Highlights

- 🌍 **Full Arabic and English** — separate routes (`/ar`, `/en`), right-to-left layout for Arabic, and automatic language pick on first visit
- 🕌 **Distinctive identity** — palette and hero pattern drawn from Baghdad's glazed *kashi* tilework, instead of the usual clinic template
- 🟢 **Live "open now" status** — calculated in Baghdad time from the clinic's opening hours
- 💰 **Transparent pricing** — treatments listed with starting prices in Iraqi dinar
- 📝 **Booking form** — validation for Iraqi mobile numbers, accessible error messages, and a clear confirmation state
- ♿ **Accessible** — semantic landmarks, skip link, keyboard focus styles, and reduced-motion support
- 📱 **Responsive** — designed for phones first, where most patients will book
- ⚡ **Static export** — no server needed, deployed to GitHub Pages with GitHub Actions

## 📸 Screenshots

| Arabic (RTL) | Mobile |
|---|---|
| ![Arabic hero](screenshots/hero-ar.png) | <img src="screenshots/mobile-ar.png" alt="Mobile, Arabic" width="260"> |

| Treatments and prices |
|---|
| ![Treatments](screenshots/treatments.png) |

| Visit process |
|---|
| ![Visit process](screenshots/visit.png) |

| Booking form |
|---|
| ![Booking](screenshots/book.png) |

## 🧭 Page sections

| Section | What it does |
|---|---|
| **Hero** | Clear promise, booking and call buttons, live opening hours |
| **Treatments** | Seven treatments with short descriptions, durations, and starting prices |
| **Your visit** | The four steps from booking to follow-up |
| **Doctors** | Three specialists and what each one treats |
| **FAQ** | Answers to the questions patients ask most |
| **Booking** | Validated request form with a confirmation state |

## 🛠️ Tech Stack

| Area | Tools |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, static export) |
| **Language** | TypeScript |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) with design tokens |
| **Typography** | [Readex Pro](https://fonts.google.com/specimen/Readex+Pro) — one family for Arabic and Latin |
| **Icons** | [Lucide](https://lucide.dev/) |
| **Deployment** | GitHub Pages via GitHub Actions |

## 📂 Project Structure

```
app/
├── (root)/        # Language picker for "/"
└── [lang]/        # Arabic and English pages (layout sets lang + dir)
components/        # Header, tile arch, hours card, booking form, logo
lib/content.ts     # All copy, in Arabic and English
public/            # Favicon
```

## 🚀 Getting Started

```bash
git clone https://github.com/MustafaCoder365/lumina-dental-website.git
cd lumina-dental-website
npm install
npm run dev
```

Open http://localhost:3000/en or http://localhost:3000/ar.

### Build

```bash
npm run build   # static site in ./out
```

Pushing to `main` deploys automatically through `.github/workflows/deploy.yml`.

## 👤 Author

**Mustafa Shakir** — Frontend Software Developer

[![GitHub](https://img.shields.io/badge/GitHub-MustafaCoder365-181717?style=flat-square&logo=github)](https://github.com/MustafaCoder365)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Mustafa%20Shakir-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/mustafa-shakir-840374330)
[![Email](https://img.shields.io/badge/Email-Contact-0F172A?style=flat-square&logo=gmail&logoColor=white)](mailto:mustafa1997670@gmail.com)
