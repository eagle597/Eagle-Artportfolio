/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { ExternalLink, Github, Sparkles, FolderGit } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<"All" | "Featured">("All");

  const filteredProjects =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="py-24 bg-transparent border-y border-slate-200/40 dark:border-white/5 transition-colors duration-300 relative"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 text-left">
            <motion.div
              className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <FolderGit size={12} />
              <span>CASE STUDIES</span>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Recent Productions
            </motion.h2>

            <motion.p
              className="text-gray-500 dark:text-gray-400 max-w-lg text-sm md:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              A selection of engineering frameworks developed directly against client specifications, optimizing speeds, caching layers and interaction points.
            </motion.p>
          </div>

          {/* Filtering trigger switcher */}
          <div className="flex space-x-2 bg-white/30 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/40 dark:border-white/5 p-1 rounded-xl self-start md:self-end">
            <button
              onClick={() => setFilter("All")}
              className={`px-4 py-2 font-heading font-semibold text-xs md:text-sm rounded-lg transition-all cursor-pointer ${
                filter === "All"
                  ? "bg-indigo-600 text-white shadow-sm font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("Featured")}
              className={`px-4 py-2 font-heading font-semibold text-xs md:text-sm rounded-lg transition-all cursor-pointer ${
                filter === "Featured"
                  ? "bg-indigo-600 text-white shadow-sm font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Featured Only
            </button>
          </div>
        </div>

        {/* Projects Cards Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, index) => {
              return (
                <motion.div
                  key={p.id}
                  className="group flex flex-col h-full rounded-2xl glass-panel border border-slate-200/30 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-lg hover:border-slate-300/40 dark:hover:border-white/10 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  layout
                >
                  {/* Top Image Frame container */}
                  <div className="relative h-48 md:h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-950">
                    {/* Visual filter overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent z-10" />

                    {/* Featured Tag Badge */}
                    {p.featured && (
                      <div className="absolute top-4 left-4 z-20 flex items-center space-x-1 px-2.5 py-1 rounded-full bg-indigo-600 text-white font-mono text-[10px] font-bold tracking-wide uppercase shadow">
                        <Sparkles size={10} />
                        <span>Featured</span>
                      </div>
                    )}

                    {/* Core Preview Image */}
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Text Details Area */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow text-left">
                    {/* Tags List */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-md bg-gray-100 dark:bg-[#1a1d29] text-gray-600 dark:text-gray-400 font-mono text-[10px] font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                      {p.tech.length > 3 && (
                        <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/35 text-indigo-600 dark:text-indigo-400 font-mono text-[10px] font-semibold">
                          +{p.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {p.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 dark:text-[#9ca3af] text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                      {p.description}
                    </p>

                    {/* Action buttons CTAs */}
                    <div className="flex items-center space-x-4 pt-4 border-t border-gray-100 dark:border-gray-800/40">
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors interactive-hover cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Launching interactive live sandbox preview for: ${p.title}`);
                        }}
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={14} />
                      </a>

                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1.5 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors interactive-hover cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Navigating to GitHub repository branch for: ${p.title}`);
                        }}
                      >
                        <Github size={14} />
                        <span>Source</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
