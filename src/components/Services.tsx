/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { SERVICES } from "../data";
import { Sparkles, Monitor, Server, Cpu, Layers, Webhook, Database } from "lucide-react";
import { motion } from "motion/react";

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
            <span>CORE EXPERTISE</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Capabilities & Services
          </motion.h2>
          <motion.p
            className="text-gray-500 dark:text-gray-400 max-w-lg text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Custom-built development models scaling with modern technical guidelines, bringing professional design paired with solid backends.
          </motion.p>
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
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
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#4b5563] dark:text-[#a1a1aa] text-sm leading-relaxed">
                    {service.description}
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
