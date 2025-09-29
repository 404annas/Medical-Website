# Medical Website

## Project Overview

This project is a modern and responsive landing page for a medical service provider. It features a clean and professional design, smooth animations, and a user-friendly interface. The primary goal of this website is to provide information about the medical services offered, build trust with potential patients, and provide an easy way to get in touch with the clinic.

## Features

- **Responsive Design:** Fully responsive layout that works on all devices, from mobile phones to desktops.
- **Animated Interface:** Engaging animations to enhance user experience, powered by Framer Motion and GSAP.
- **Component-Based Architecture:** Built with React, promoting reusability and maintainability.
- **Clear Navigation:** Easy-to-use navigation to browse through different sections of the website.
- **Contact Form:** A simple and effective form for users to send their inquiries.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Routing:** React Router
- **Animations:** Framer Motion, GSAP
- **Icons:** Lucide React, React Icons

## Folder Structure

```
/mnt/NewVolume/office/landing-pages/Medical-Website/
├───.gitignore
├───eslint.config.js
├───index.html
├───package-lock.json
├───package.json
├───README.md
├───vite.config.js
├───.git/...
├───node_modules/...
├───public/
│   ├───logo.svg
│   └───vite.svg
└───src/
    ├───App.jsx
    ├───index.css
    ├───main.jsx
    ├───assets/
    │   ├───1.webp
    │   ├───abstract-logo.svg
    │   ├───hero.png
    │   ├───medHero.png
    │   ├───owner.png
    │   ├───services-main.webp
    │   ├───services-main1.webp
    │   ├───services1.webp
    │   ├───services2.webp
    │   ├───services3.webp
    │   ├───services4.webp
    │   ├───services5.webp
    │   └───services6.webp
    ├───components/
    │   ├───Animation.jsx
    │   ├───CareForm.jsx
    │   ├───DepthAnimationServices.jsx
    │   ├───Faqs.jsx
    │   ├───Footer.jsx
    │   ├───Hero.jsx
    │   ├───Navbar.jsx
    │   ├───PopUp.jsx
    │   ├───Services.jsx
    │   ├───ServicesAno.jsx
    │   ├───ServicesAnoAno.jsx
    │   ├───StickyPhone.jsx
    │   └───WhatsAppButton.jsx
    └───screens/
        ├───AboutPage.jsx
        ├───BlogPage.jsx
        ├───ContactPage.jsx
        ├───HomePage.jsx
        └───ServicesPage.jsx
```

## Installation Guide

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/medical-website.git
    cd medical-website
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Environment Setup

No special environment variables are needed for this project. All configurations are handled within the Vite configuration file.

## Usage

To start the development server, run the following command:

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`.

To build the project for production, run:

```bash
npm run build
```

This will create a `dist` folder with the optimized and minified files for deployment.

## Component Documentation

The `src/components` directory contains all the reusable components of the application. Each component is designed to be modular and self-contained.

- **`Navbar.jsx`**: The main navigation bar of the website.
- **`Hero.jsx`**: The hero section of the landing page.
- **`Services.jsx`**: The section that displays the services offered.
- **`Footer.jsx`**: The footer of the website.
- **`CareForm.jsx`**: The contact form component.
- **`Faqs.jsx`**: The frequently asked questions section.

## Best Practices & Conventions

- **Component Naming:** Components are named using PascalCase (e.g., `MyComponent`).
- **File Naming:** Files are named using PascalCase for components and camelCase for other JavaScript files.
- **CSS:** Tailwind CSS is used for styling. Utility-first classes are preferred over custom CSS.
- **Linting:** The project uses ESLint to enforce code quality and consistency. Run `npm run lint` to check for linting errors.
- **Commits:** Commit messages should be clear and concise, following the conventional commit format.
