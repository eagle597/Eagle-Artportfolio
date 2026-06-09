/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from "react";
import { STATS } from "../data";
import { useLanguage } from "./LanguageContext";
import { Sparkles, Trophy, Zap, ShieldAlert } from "lucide-react";
import { motion, useInView } from "motion/react";

interface CounterProps {
  value: number;
  suffix: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startCount = 0;
    const endCount = value;
    const duration = 1200; // ms
    const range = endCount - startCount;
    if (range <= 0) {
      setCount(value);
      return;
    }

    const startTime = performance.now();

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const current = Math.floor(easeProgress * range + startCount);
      
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(endCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [value, isInView]);

  return (
    <span ref={containerRef} className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-indigo-600 dark:text-indigo-400">
      {count}
      {suffix}
    </span>
  );
};

export const About: React.FC = () => {
  const { t } = useLanguage();

  const getStatTranslationKey = (label: string) => {
    switch (label) {
      case "Years Experience": return "about.xp";
      case "Completed Projects": return "about.done";
      case "Global Clients": return "about.clients";
      case "Code Commits": return "about.commits";
      default: return label;
    }
  };

  return (
    <section
      id="about"
      className="py-24 bg-transparent border-y border-slate-200/40 dark:border-white/5 transition-colors duration-300 relative"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Text / Bios Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <Sparkles size={12} />
                <span>{t("about.badge")}</span>
              </motion.div>
              
              <motion.h2
                className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {t("about.title").split("<br />").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < t("about.title").split("<br />").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </motion.h2>
            </div>

            <motion.p
              className="text-[#4b5563] dark:text-[#a1a1aa] leading-relaxed text-base md:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {t("about.bio")}
            </motion.p>

            {/* Statistics Banner */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="p-5 rounded-2xl glass-panel flex flex-col justify-center select-none"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <span className="text-gray-500 dark:text-gray-400 text-xs font-semibold tracking-wider font-mono mt-1 uppercase">
                    {t(getStatTranslationKey(stat.label))}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Core Methodology Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Performance */}
            <motion.div
              className="md:col-span-2 p-6 rounded-2xl glass-panel relative overflow-hidden group border border-slate-200/30 dark:border-white/5 interactive-hover"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 h-32 w-32 bg-indigo-500/5 rounded-full blur-xl group-hover:bg-indigo-500/10 transition-colors" />
              <div className="h-10 w-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                <Zap size={22} />
              </div>
              <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-2">
                {t("about.card1.title")}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t("about.card1.text")}
              </p>
            </motion.div>

            {/* Card 2: Security */}
            <motion.div
              className="p-6 rounded-2xl glass-panel relative overflow-hidden group border border-slate-200/30 dark:border-white/5 interactive-hover"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute top-0 right-0 h-24 w-24 bg-pink-500/5 rounded-full blur-lg group-hover:bg-pink-500/10 transition-colors" />
              <div className="h-10 w-10 rounded-xl bg-pink-100 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-4">
                <Trophy size={20} />
              </div>
              <h4 className="font-heading font-bold text-base text-gray-900 dark:text-white mb-2">
                {t("about.card2.title")}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                {t("about.card2.text")}
              </p>
            </motion.div>

            {/* Card 3: Modern Integrations */}
            <motion.div
              className="p-6 rounded-2xl glass-panel relative overflow-hidden group border border-slate-200/30 dark:border-white/5 interactive-hover"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 h-24 w-24 bg-emerald-500/5 rounded-full blur-lg group-hover:bg-emerald-500/10 transition-colors" />
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <ShieldAlert size={20} />
              </div>
              <h4 className="font-heading font-bold text-base text-gray-900 dark:text-white mb-2">
                {t("about.card3.title")}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                {t("about.card3.text")}
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
