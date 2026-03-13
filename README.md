# 🎓 MCBU – Manisa Celal Bayar University Website

> A modern, animated and fully responsive university website built during the **MCBÜ Hackathon 2025**.  
> Designed to reimagine the digital presence of Manisa Celal Bayar University with a focus on user experience, accessibility, and modern web standards.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-animated-pink)
![Hackathon](https://img.shields.io/badge/MCBÜ_Hackathon-2025-orange)
![Award](https://img.shields.io/badge/🥈_2nd_Place-Winner-silver)

---

## 🏆 About the Hackathon

This project was built as part of the **MCBÜ Hackathon 2025**, organized by Manisa Celal Bayar University. The challenge was to redesign and modernize the university's web experience within a limited time frame.

### 🥈 2nd Place Winner

We are proud to have won **2nd place** out of all competing teams at MCBÜ Hackathon 2025. The project was recognized for its modern design, smooth user experience and technical implementation.

Our goal was to create a fast, visually appealing and user-friendly university website that students, academics and visitors would actually enjoy using — a significant improvement over traditional university portals.

---

## ✨ Features

- 🌙 **Dark / Light Mode** — Theme toggle with localStorage persistence
- 🎬 **Framer Motion Animations** — Smooth page transitions and scroll-triggered animations
- 📱 **Fully Responsive** — Optimized for mobile, tablet and desktop
- 🔍 **Search Modal** — Instant page search from the navbar
- 📂 **Dropdown Navigation** — Multi-level menus for Academic, About, Campus and Research sections
- 📊 **Animated Statistics Counter** — Scroll-triggered counters for university stats
- 🗺️ **Google Maps Integration** — Embedded campus location
- 🔔 **Announcements & Events** — Tabbed page with live university announcements
- 📰 **News with Filtering** — Category filter and search on the news page
- ❌ **Custom 404 Page** — Friendly error page with navigation

---

## 📄 Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero banner, stats counter, info cards |
| News | `/news` | Filterable news grid with categories |
| Academics | `/academics` | Faculties, programs, institutes, resources |
| About | `/about` | Mission, vision, management, campus map |
| Announcements | `/announcements` | Announcements and upcoming events |
| Contact | `/contact` | Contact form and university info |
| 404 | `*` | Custom not found page |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI |
| **Vite** | Fast dev environment & bundler |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animations & transitions |
| **React Router DOM v6** | Client-side routing |

---

## ⚙️ Getting Started

```bash
# Clone the repository
git clone https://github.com/gozdetanyildiz/mcbu-hackathon-2025.git

# Navigate to the project
cd mcbu-hackathon-2025

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Dropdown menus + dark mode + search
│   ├── Hero.jsx          # Animated hero section
│   ├── InfoBar.jsx       # Stats counter + info cards
│   ├── Footer.jsx        # Multi-column footer
│   ├── NewsCard.jsx      # News card component
│   ├── NewsGrid.jsx      # News listing page
│   └── NewsDetail.jsx    # News detail page
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Academics.jsx
│   ├── Contact.jsx
│   ├── Announcements.jsx
│   └── NotFound.jsx
├── context/
│   └── ThemeContext.jsx  # Global dark/light mode
├── App.jsx               # Routes + page transitions
└── main.jsx
```

---

## 👩‍💻 Developer

**Gözde Tanyıldız**  
[GitHub](https://github.com/gozdetanyildiz) • [LinkedIn](https://linkedin.com/in/gozdetanyildiz)

---

> 🏅 Built with passion at **MCBÜ Hackathon 2025** — Manisa Celal Bayar University