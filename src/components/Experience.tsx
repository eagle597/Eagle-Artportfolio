/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { EXPERIENCES } from "../data";
import { Sparkles, Calendar, Briefcase } from "lucide-react";
import { motion } from "motion/react";

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-transparent border-y border-slate-200/40 dark:border-white/5 transition-colors duration-300 relative"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.div
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles size={12} />
            <span>EMPLOYMENT HISTORY</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Professional Experience
          </motion.h2>
          <motion.p
            className="text-gray-500 dark:text-gray-400 max-w-lg text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A timeline of building production code, architecting reliable SaaS modules, and leading diverse development divisions.
          </motion.p>
        </div>

        {/* Timeline Vector Framework */}
        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Vertical central connector line */}
          <div className="absolute top-0 bottom-0 left-1/2 -ml-0.5 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 md:block hidden opacity-60" />
          <div className="absolute top-0 bottom-0 left-4 -ml-0.5 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 md:hidden block opacity-60" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Central Node Indicator */}
                  <div className="absolute top-6 left-4 md:left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <motion.div
                      className="h-10 w-10 rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border-2 border-indigo-500 flex items-center justify-center shadow-md dark:shadow-indigo-500/15"
                      whileInView={{ scale: [0.8, 1.1, 1], rotate: [0, 10, -10, 0] }}
                      viewport={{ once: true }}
                    >
                      <Briefcase size={14} className="text-indigo-600 dark:text-indigo-400" />
                    </motion.div>
                  </div>

                  {/* Spacer Column (Desktop side offsets) */}
                  <div className="w-full md:w-1/2 md:block hidden px-12" />

                  {/* Main Event Card Column */}
                  <div className="w-full md:w-1/2 md:px-12 pl-12 pr-4 relative">
                    <motion.div
                      className="p-6 md:p-8 rounded-2xl glass-panel relative overflow-hidden group select-none border border-slate-200/30 dark:border-white/5 shadow-sm transition-all duration-300"
                      initial={{ opacity: 0, x: isEven ? 30 : -30, y: 15 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {/* Decorative corner indicator */}
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Briefcase size={80} />
                      </div>

                      {/* Header Title with duration */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div className="space-y-1">
                          <h3 className="font-heading font-extrabold text-lg md:text-xl text-gray-900 dark:text-white leading-tight">
                            {exp.role}
                          </h3>
                          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 font-mono">
                            {exp.company}
                          </span>
                        </div>
                        {/* Period badge */}
                        <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-[#1a1d28] text-gray-500 dark:text-gray-400 font-mono text-xs font-semibold">
                          <Calendar size={11} />
                          <span>{exp.duration}</span>
                        </span>
                      </div>

                      {/* Task points lists */}
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 list-none pl-0">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start space-x-2.5 leading-relaxed text-left">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
