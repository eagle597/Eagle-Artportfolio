/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { SERVICES } from "../data";
import { useLanguage } from "./LanguageContext";
import { Sparkles, Monitor, Server, Cpu, Layers, Webhook, Database } from "lucide-react";
import { motion } from "motion/react";

const servicesTranslations: Record<string, Record<"en" | "rw", { title: string; description: string }>> = {
  "Frontend Development": {
    en: {
      title: "Frontend Development",
      description: "Crafting visually outstanding, highly functional React interfaces with fluid, GPU-accelerated motion paths and precise responsive typography."
    },
    rw: {
      title: "Iterambere Rya Mbere (Frontend)",
      description: "Gukora imbuga zinyura ijisho, React ikoreshwa mu buryo bworoshye kandi bwihuta, ifite ibishushanyo binogeye amaso."
    }
  },
  "Backend Development": {
    en: {
      title: "Backend Development",
      description: "Designing durable, secure distributed server architectures with Node.js and Express to manage complex backend workflows."
    },
    rw: {
      title: "Iterambere Ryo Nyuma (Backend)",
      description: "Gushushanya n'umutekano w'imashini (servers) zihamye hifashishijwe Node.js na Express ngo biyobore amakuru yose akomeye."
    }
  },
  "Full Stack Development": {
    en: {
      title: "Full Stack Development",
      description: "Seamless integration of interactive frontends with scalable databases, reliable caching layers, and performant server infrastructures."
    },
    rw: {
      title: "Iterambere Ryuzuye (Full Stack)",
      description: "Guhuza imbuga z'imbere n'inyuma mu buryo bwuzuye, na databases zikomeye na servers zihuta cyane."
    }
  },
  "UI/UX Design": {
    en: {
      title: "UI/UX Design",
      description: "Creating premium layouts inspired by modern SaaS leaderboards and bento grids, focusing heavily on negative space and visual hierarchy."
    },
    rw: {
      title: "Gushushanya Imbata (UI/UX Design)",
      description: "Gushushanya amapaji meza ya internet yisunze bento-grids, hibandwa ku buryo amaso areba neza ubutumwa bw'ingenzi."
    }
  },
  "API Development": {
    en: {
      title: "API Development",
      description: "Architecting clean, type-safe RESTful and GraphQL APIs with comprehensive security policies, rate-limiting, and detailed validation."
    },
    rw: {
      title: "Iterambere rya API",
      description: "Kubaka uburyo bwa API (RESTful & GraphQL) budafite amakosa, bufite umutekano usesuye kandi bwihuta cyane."
    }
  },
  "Database Design": {
    en: {
      title: "Database Design",
      description: "Designing robust normalized schemas and efficient indexes for SQL and NoSQL targets to achieve sub-millisecond query execution."
    },
    rw: {
      title: "Inyubako ya Database",
      description: "Gushushanya databases (SQL & NoSQL) zifite umutekano n'urubuga runoza gushakisha amakuru mu gihe gito."
    }
  }
};

const ServiceIconMapper: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  switch (name) {
    case "MonitorAndLayout":
      return <Monitor className={className} size={24} />;
    case "Server":
      return <Server className={className} size={24} />;
    case "Cpu":
      return <Cpu className={className} size={24} />;
    case "Figma":
      return <Layers className={className} size={24} />;
    case "Webhook":
      return <Webhook className={className} size={24} />;
    case "Database":
      return <Database className={className} size={24} />;
    default:
      return <Layers className={className} size={24} />;
  }
};

export const Services: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-transparent transition-colors duration-300 relative">
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
            <span>{t("services.badge")}</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("services.title")}
          </motion.h2>
          <motion.p
            className="text-gray-500 dark:text-gray-400 max-w-lg text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t("services.desc")}
          </motion.p>
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const localized = servicesTranslations[service.title]?.[language] || {
              title: service.title,
              description: service.description
            };

            return (
              <motion.div
                key={service.title}
                className="p-8 rounded-2xl glass-panel relative overflow-hidden group select-none border border-slate-200/30 dark:border-white/5 transition-all duration-300 interactive-hover flex flex-col justify-between text-left"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {/* Stripe-like background glow path on card hover */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-500 to-pink-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                
                <div className="space-y-4">
                  {/* Glowing Icon holder */}
                  <div className="inline-flex p-3 rounded-xl bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-indigo-600 group-hover:to-pink-500 group-hover:text-white transition-all duration-350">
                    <ServiceIconMapper name={service.iconName} />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {localized.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#4b5563] dark:text-[#a1a1aa] text-sm leading-relaxed">
                    {localized.description}
                  </p>
                </div>

                {/* Decorative bullet tracker in corner visual */}
                <div className="mt-6 flex justify-end">
                  <span className="font-mono text-xs text-gray-300 dark:text-gray-800 font-bold group-hover:text-indigo-500/40 transition-colors">
                    0{index + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
