/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { TESTIMONIALS } from "../data";
import { MessageSquare, Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const setSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-transparent transition-colors duration-300 relative">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.div
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <MessageSquare size={12} />
            <span>CLIENT OUTCOMES</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Client Reviews
          </motion.h2>
          <motion.p
            className="text-gray-500 dark:text-gray-400 max-w-lg text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Read reviews from product managers, directors, and start-up co-founders who have partnered on systems development.
          </motion.p>
        </div>

        {/* Testimonials Slider Body */}
        <div className="relative max-w-4xl mx-auto">
          {/* Card Frame with dynamic animations */}
          <div className="relative p-8 md:p-14 rounded-3xl glass-panel overflow-hidden border border-slate-200/35 dark:border-white/5 min-h-[360px] flex flex-col justify-between">
            {/* Massive quotation marks */}
            <div className="absolute top-6 right-8 text-indigo-500/10 dark:text-indigo-500/5 select-none pointer-events-none">
              <Quote size={120} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8 text-left"
              >
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < activeTestimonial.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[#374151] dark:text-[#d1d5db] text-base md:text-lg leading-relaxed font-heading font-medium italic">
                  "{activeTestimonial.text}"
                </p>

                {/* Client Bio Profile */}
                <div className="flex items-center space-x-4">
                  <div className="h-14 w-14 rounded-full overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm">
                    <img
                      src={activeTestimonial.image}
                      alt={activeTestimonial.name}
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-sm md:text-base text-gray-900 dark:text-white leading-tight">
                      {activeTestimonial.name}
                    </h4>
                    <span className="text-xs font-semibold text-gray-500 dark:text-[#a1a1aa] font-mono">
                      {activeTestimonial.role} — <span className="text-indigo-600 dark:text-indigo-400">{activeTestimonial.company}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Slider Controls */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-200/50 dark:border-white/5">
              <div className="flex space-x-1.5 md:space-x-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSlide(index)}
                    className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                      currentIndex === index ? "w-6 bg-indigo-600 dark:bg-indigo-400" : "w-2 bg-gray-200 dark:bg-gray-800"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Angle Chevrons triggers */}
              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/10 text-slate-700 dark:text-slate-300 bg-white/35 dark:bg-white/5 backdrop-blur-sm hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500/40 cursor-pointer active:scale-95 transition-all duration-200"
                  aria-label="Previous review"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/10 text-slate-700 dark:text-slate-300 bg-white/35 dark:bg-white/5 backdrop-blur-sm hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500/40 cursor-pointer active:scale-95 transition-all duration-200"
                  aria-label="Next review"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
