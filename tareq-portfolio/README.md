# Md Tareq Rahman — Portfolio

Professional, mobile-responsive portfolio built with React, Vite, Bootstrap, Bootstrap Icons, and custom CSS.

## Project structure

```text
tareq-portfolio/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Publications.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       └── SectionHeading.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── responsive.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## Where developers should edit

- Personal information/content: `src/data/portfolio.js`
- Hero: `src/components/sections/Hero.jsx`
- About: `src/components/sections/About.jsx`
- Skills: `src/components/sections/Skills.jsx`
- Experience: `src/components/sections/Experience.jsx`
- Publications: `src/components/sections/Publications.jsx`
- Contact: `src/components/sections/Contact.jsx`
- Main design: `src/styles/variables.css` and `src/styles/globals.css`
- Mobile breakpoints: `src/styles/responsive.css`
- Profile/CV images and documents: `public/assets/`

No component needs to contain large amounts of personal data; keep content in the data file where possible.
