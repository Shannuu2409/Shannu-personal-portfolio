import React from "react";
import SlidebarNav from "./components/portfolio/SlidebarNav";
import Hero from "./components/portfolio/Hero";
import About from "./components/portfolio/About";
import Projects from "./components/portfolio/Project";
import Contact from "./components/portfolio/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      <SlidebarNav />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-gray-700 text-center text-xs text-gray-400 py-6">
        © {new Date().getFullYear()} Shanmukha Kumar Karra. Built with React, Tailwind & Framer Motion.
      </footer>
    </div>
  );
}
