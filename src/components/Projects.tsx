/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { PROJECTS } from "../data";
import { useLanguage } from "./LanguageContext";
import { Project } from "../types";
import { ExternalLink, Github, Sparkles, FolderGit } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const projectsTranslations: Record<string, Record<"en" | "rw", { title: string; description: string }>> = {
  "AI Chat Application": {
    en: {
      title: "AI Chat Application",
      description: "An advanced real-time AI assistant interface with streaming responses, conversation branch history, code highlighting, and customized markdown renders, powered by Gemini LLM integration."
    },
    rw: {
      title: "Ubutumwa bwa AI (AI Chat)",
      description: "Porogaramu y'ikiganiro cya AI ikora ako kanya, igasubiza mu buryo bw'indashyikirwa, ifite amateka y'ibiganiro n'uburyo bunoze usesuye hifashishijwe Gemini API."
    }
  },
  "Hospital Management System": {
    en: {
      title: "Hospital Management System",
      description: "A highly secure electronic health record (EHR) portal incorporating animated interactive patient dashboards, real-time appointment schedulers, secure messaging channels, and billing engines."
    },
    rw: {
      title: "Sisitemu Y'ibitaro (Hospital CMS)",
      description: "Uruhande rw'umutekano rwo gucunga ibitaro rurimo amadosiye y'abarwayi, gahunda zo kubonana na muganga, koherezanya ubutumwa n'uburyo bwo kwishyura."
    }
  },
  "SaaS Streaming Platform": {
    en: {
      title: "SaaS Streaming Platform",
      description: "A high-performance media delivery application utilizing HLS stream segmentation, content authorization checkpoints, customized custom video controls, and user analytics."
    },
    rw: {
      title: "Urubuga rwa Filime n'Imiziki (Streaming)",
      description: "Isakazamakuru ryihuta kandi rihanezeza rikoresha tekinoroji yo gushyira amashusho mu bice n'igenzura ry'abareba, ifite imiterere ya video inogeye ijisho."
    }
  },
  "Universal Bus Booking System": {
    en: {
      title: "Universal Bus Booking System",
      description: "A comprehensive transit network solution featuring physical seat reservation charts, interactive regional maps for tracking, dynamic discount tiers, and direct payment gateway webhooks."
    },
    rw: {
      title: "Gukata Amatike y'Imodoka (Bus Booking)",
      description: "Igikoresho cyo gukatiraho amashaje y'imodoka, gukurikirana imodoka kuri map, amaganya y'ibiciro ndetse no kwishyura ako kanya bikorwa mu buryo bworoshye."
    }
  },
  "Decentralized Social Media App": {
    en: {
      title: "Decentralized Social Media App",
      description: "A responsive next-generation community board offering microblogging options, decentralized state synchronization, lazy image lists, dark/light mode toggles, and rich media attachment feeds."
    },
    rw: {
      title: "Mbuga Nkoranyambaga (Social Media)",
      description: "Urubuga rw'itumanaho rugezweho, rufite uburyo bwo gusangiza ibitekerezo, kwandika amafoto, guhindura umwijima/umucyo, n'umutekano urizwe cyane."
    }
  }
};

export const Projects: React.FC = () => {
  const { language, t } = useLanguage();
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
              <span>{t("projects.badge")}</span>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t("projects.title")}
            </motion.h2>

            <motion.p
              className="text-gray-500 dark:text-gray-400 max-w-lg text-sm md:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {t("projects.desc")}
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
              {language === "en" ? "All Projects" : "Byose"}
            </button>
            <button
              onClick={() => setFilter("Featured")}
              className={`px-4 py-2 font-heading font-semibold text-xs md:text-sm rounded-lg transition-all cursor-pointer ${
                filter === "Featured"
                  ? "bg-indigo-600 text-white shadow-sm font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {language === "en" ? "Featured Only" : "Iby'ingenzi Gusa"}
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
              const localized = projectsTranslations[p.title]?.[language] || {
                title: p.title,
                description: p.description
              };

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
                        <span>{language === "en" ? "Featured" : "Icy'ingenzi"}</span>
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
                      {localized.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 dark:text-[#9ca3af] text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                      {localized.description}
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
                          alert(`Launching interactive live sandbox preview for: ${localized.title}`);
                        }}
                      >
                        <span>{language === "en" ? "Live Demo" : "Reba Imikorere"}</span>
                        <ExternalLink size={14} />
                      </a>

                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1.5 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors interactive-hover cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Navigating to GitHub repository branch for: ${localized.title}`);
                        }}
                      >
                        <Github size={14} />
                        <span>{language === "en" ? "Source" : "Code Inyuma"}</span>
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
