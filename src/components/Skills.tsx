/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { SKILLS } from "../data";
import { Skill } from "../types";
import { Sparkles, Terminal, Cpu, Database, Command, Star } from "lucide-react";
import { motion, useInView } from "motion/react";

// Helper to map icon name to a Lucide icon component
const IconMapper: React.FC<{ name: string; size?: number; className?: string }> = ({ name, size = 18, className }) => {
  switch (name) {
    case "Atom":
      return <Cpu size={size} className={className} />; // Symbolizing React node
    case "Code":
      return <Terminal size={size} className={className} />;
    case "FileJson":
      return <Command size={size} className={className} />;
    case "Palette":
      return <Star size={size} className={className} />;
    case "Compass":
      return <Cpu size={size} className={className} />;
    case "Cpu":
      return <Cpu size={size} className={className} />;
    case "FileCode":
      return <Terminal size={size} className={className} />;
    case "Link":
      return <Command size={size} className={className} />;
    case "Database":
      return <Database size={size} className={className} />;
    case "GitBranch":
      return <Command size={size} className={className} />;
    default:
      return <Terminal size={size} className={className} />;
  }
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"All" | "Frontend" | "Backend" | "Tools & Devops">("All");
  const filteredSkills = activeTab === "All" ? SKILLS : SKILLS.filter((s) => s.category === activeTab);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="py-24 bg-transparent transition-colors duration-300 relative">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.div
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles size={12} />
            <span>EXPERT CAPABILITIES</span>
          </motion.div>
 
          <motion.h2
            className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Deep Technical Stack
          </motion.h2>
          <motion.p
            className="text-gray-500 dark:text-gray-400 max-w-lg text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Durable full-stack knowledge optimized in modern framework systems, reliable database layers, and deployment automations.
          </motion.p>
 
          {/* Filtering Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/30 dark:bg-slate-900/40 backdrop-blur-md max-w-md mt-6 select-none">
            {(["All", "Frontend", "Backend", "Tools & Devops"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-lg cursor-pointer transition-all ${
                  activeTab === tab
                    ? "bg-white dark:bg-white/10 text-indigo-600 dark:text-white shadow-sm font-bold"
                    : "text-slate-500 hover:text-slate-800 dark:text-[#8a919e] dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid with animation limits */}
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredSkills.map((skill, index) => {
            return (
              <motion.div
                key={skill.name}
                className="p-6 rounded-2xl glass-panel relative overflow-hidden group select-none border border-slate-200/30 dark:border-white/5 transition-all duration-300"
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                {/* Micro hovering neon background glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 group-hover:to-indigo-500/5 group-hover:from-indigo-500/2 dark:group-hover:to-indigo-500/10 dark:group-hover:from-indigo-500/3 transition-all duration-300" />

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3.5">
                    <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-200">
                      <IconMapper name={skill.iconName} />
                    </div>
                    <span className="font-heading font-bold text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-semibold text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar Container */}
                <div className="h-1.5 w-full bg-gray-100 dark:bg-[#1a1c24] rounded-full overflow-hidden relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-purple-500 rounded-full shadow-sm"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
