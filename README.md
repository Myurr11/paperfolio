# Mayur Joshi — Portfolio

> A modern, paper-note styled personal portfolio showcasing projects, experience, and skills. Built with React, TypeScript, and Tailwind CSS.

[![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

---

## ✨ Features

- 📄 **Paper-note aesthetic** — Unique visual design with a handwritten feel
- 📱 **Fully responsive** — Optimized for all screen sizes
- ⚡ **Blazing fast** — Built with Vite for instant development and optimal performance
- 🎨 **shadcn/ui components** — Beautiful, accessible UI primitives
- 🎯 **SEO optimized** — Proper meta tags and semantic HTML
- 📥 **Resume download** — Direct PDF download available

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server (http://localhost:8080)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui primitives (Dialog, Toast, Sheet, etc.)
│   │   ├── Hero.tsx        # Hero section with intro and CTA
│   │   ├── Navigation.tsx  # Main navigation bar
│   │   ├── Education.tsx   # Education timeline
│   │   ├── TechStack.tsx   # Technologies and skills
│   │   ├── FeaturedProjects.tsx  # Project showcase
│   │   ├── Experience.tsx  # Work experience
│   │   ├── Highlights.tsx  # Key achievements
│   │   ├── About.tsx       # About me section
│   │   ├── ContactSection.tsx    # Contact information
│   │   └── Footer.tsx      # Site footer
│   ├── pages/
│   │   ├── Index.tsx       # Main landing page
│   │   └── NotFound.tsx    # 404 page
│   ├── App.tsx             # App entry with routing
│   ├── main.tsx            # React bootstrap
│   └── index.css           # Global styles
├── public/
│   └── resume.pdf          # Downloadable resume
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind configuration
└── package.json            # Dependencies
```

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **Routing:** [React Router](https://reactrouter.com/)
- **State Management:** [React Query](https://tanstack.com/query/latest)

---

## 📝 Customization

### Update Content

Edit the component files in `src/components/` to customize:
- **Personal Info:** `Hero.tsx`, `About.tsx`
- **Projects:** `FeaturedProjects.tsx`
- **Experience:** `Experience.tsx`, `Education.tsx`
- **Skills:** `TechStack.tsx`
- **Contact:** `ContactSection.tsx`

### Update Resume

Replace `public/resume.pdf` with your own PDF file.

### Styling

- **Global styles:** `src/index.css`
- **Tailwind config:** `tailwind.config.ts`
- **Component styles:** Inline Tailwind classes in component files

---

## 🌐 Deployment

The project builds to a `dist` folder ready for deployment on any static hosting service.

### Vercel

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Push 'dist' folder to gh-pages branch
```

---

## 📄 License

This is a personal portfolio template. Feel free to fork and customize with your own content and assets.

---


<p align="center">Made with ❤️ using React and TypeScript</p>