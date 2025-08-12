import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { data } from "../../data/portfolio";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function SlidebarNav() {
  return (
    <header className="sticky top-0 z-50 h-16 bg-background/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <a href="#hero" className="font-semibold tracking-wide hover:text-accent transition-colors">
          {"shannu"}
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-gray-400 hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={data.contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover-scale text-gray-400 hover:text-accent">
            <Github size={20} />
          </a>
          <a href={data.contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover-scale text-gray-400 hover:text-accent">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${data.contact.email}`} aria-label="Email" className="hover-scale text-gray-400 hover:text-accent">
            <Mail size={20} />
          </a>
          <a href="/CV/ShannuCV.pdf" download className="hidden sm:block bg-accent/10 text-accent px-3 py-1 rounded hover:bg-accent hover:text-black transition">
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
