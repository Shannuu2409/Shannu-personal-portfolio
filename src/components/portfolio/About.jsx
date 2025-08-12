import React from "react";
import { motion } from "framer-motion";
import { data } from "../../data/portfolio";
import IconImage from "./IconImage";

const sectionVariants = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };
const { h2: MotionH2, p: MotionP, article: MotionArticle } = motion;

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
        <MotionH2 variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="text-3xl font-bold flex items-center gap-3">
          <span className="font-mono text-accent">01.</span> About Me
        </MotionH2>

        <MotionP variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-6 text-gray-400 max-w-3xl">
          {data.summary}
        </MotionP>

        <div className="mt-10 grid grid-cols-1 gap-8">
          <MotionArticle variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.15 }} className="rounded-lg border bg-secondary/40 p-6">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <ul className="space-y-4">
              {data.education.map((ed) => (
                <li key={ed.degree} className="leading-snug">
                  <div className="font-medium">{ed.degree}</div>
                  <div className="text-sm text-gray-400">{ed.institution}</div>
                  <div className="text-xs text-gray-400 mt-1">GPA: {ed.gpa} • {ed.year}</div>
                </li>
              ))}
            </ul>
          </MotionArticle>

          <MotionArticle variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.2 }} className="rounded-lg border bg-secondary/40 p-6">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="space-y-6">
              <SkillGroup title="Languages" items={data.skills.languages} />
              <SkillGroup title="Frameworks & Databases" items={data.skills.frameworks_databases} />
              <SkillGroup title="Tools" items={data.skills.tools} />
            </div>
          </MotionArticle>
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div>
      <div className="mb-3 text-sm font-medium text-gray-400">{title}</div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {items.map((skill) => (
          <li key={skill} className="flex items-center gap-3 rounded-md border bg-background/40 p-3">
            <IconImage name={skill} size={24} className="rounded shrink-0" />
            <span className="text-sm">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
