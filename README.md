# Shanmukha Kumar Karra - Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern and responsive design
- ⚡ Smooth animations with Framer Motion
- 📱 Mobile-friendly interface
- 🎯 Smooth scrolling navigation
- 📧 Contact form with EmailJS integration
- 🌙 Dark theme optimized

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: EmailJS

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd protfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   └── portfolio/
│       ├── About.jsx
│       ├── Contact.jsx
│       ├── Hero.jsx
│       ├── Project.jsx
│       └── SlidebarNav.jsx
├── data/
│   └── portfolio.js
├── App.jsx
├── index.css
└── main.jsx
```

## Configuration

### EmailJS Setup

To enable the contact form functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Get your Service ID, Template ID, and Public Key
4. Open the contact form on your website
5. Click on "Setup EmailJS" and enter your credentials
6. Click "Save settings"

### Customization

Edit `src/data/portfolio.js` to update:
- Personal information
- Skills and technologies
- Projects
- Contact details
- Education history

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify/Vercel

1. Push your code to GitHub
2. Connect your repository to Netlify or Vercel
3. Deploy automatically

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Shanmukha Kumar Karra
