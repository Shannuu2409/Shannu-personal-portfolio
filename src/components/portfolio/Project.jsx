import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { data } from "../../data/portfolio";
import IconImage from "./IconImage";

const sectionVariants = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };
const { h2: MotionH2, div: MotionDiv } = motion;

const inferTech = (text) => {
  const techs = ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Vite", "Firebase", "API"];
  const lower = text.toLowerCase();
  return techs.filter((t) => lower.includes(t.toLowerCase().replace(/\./g, "")));
};

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
        <MotionH2 variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="text-3xl font-bold flex items-center gap-3">
          <span className="font-mono text-accent">02.</span> Projects
        </MotionH2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {data.projects.map((proj, idx) => {
            const tech = inferTech(proj.description);
            return (
              <MotionDiv key={proj.name} variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: idx * 0.05 }} className="border rounded-lg bg-secondary/40 hover:shadow-lg transition-shadow p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <span className="font-semibold text-lg">{proj.name}</span>
                  <span className="flex items-center gap-3">
                    <a href={proj.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-accent transition">
                      <Github size={18} />
                    </a>
                  </span>
                </div>

                <p className="text-sm text-gray-400">{proj.description}</p>

                {tech.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {tech.map((t) => (
                      <li key={t} className="inline-flex items-center gap-2 rounded border px-2 py-1 text-xs">
                        <IconImage name={t} size={16} className="rounded shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}
