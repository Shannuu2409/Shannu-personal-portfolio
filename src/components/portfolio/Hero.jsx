import React from "react";
import { motion } from "framer-motion";
import { data } from "../../data/portfolio";

const { p: MotionP, h1: MotionH1, h2: MotionH2, div: MotionDiv } = motion;

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center hero-glow">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
        <MotionP initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-accent font-mono mb-3">
          Hi, my name is
        </MotionP>

        <MotionH1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          {data.name}
        </MotionH1>

        <MotionH2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2 }} className="mt-2 text-2xl sm:text-3xl text-gray-400">
          {data.tagline}
        </MotionH2>

        <MotionP initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-6 max-w-2xl text-gray-400">
          {data.summary}
        </MotionP>

        <MotionDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.45 }} className="mt-8 flex gap-4">
          <a href="/CV/ShannuCV.pdf" download className="px-6 py-3 bg-accent text-black font-semibold rounded hover:bg-accent/90 transition">Download CV</a>
          <a href="#contact" className="px-6 py-3 border border-accent text-accent rounded hover:bg-accent hover:text-black transition">Contact me</a>
        </MotionDiv>
      </div>
    </section>
  );
}
