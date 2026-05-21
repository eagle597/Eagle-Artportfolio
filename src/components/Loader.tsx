/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        // Increment with varying speeds for organic loading feel
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d0f14] text-white"
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative flex flex-col items-center">
          {/* Futuristic glowing geometric ornament */}
          <div className="absolute -top-16 mb-6 flex space-x-2">
            <motion.span
              className="h-3 w-3 rounded-full bg-indigo-500"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.2, delay: 0 }}
            />
            <motion.span
              className="h-3 w-3 rounded-full bg-purple-500"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}
            />
            <motion.span
              className="h-3 w-3 rounded-full bg-pink-500"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }}
            />
          </div>

          {/* Branding */}
          <motion.h1
            className="font-heading text-2xl md:text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            EAGLE ART
          </motion.h1>

          <motion.div
            className="mt-2 font-mono text-xs tracking-widest text-[#9ca3af]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.3 }}
          >
            INITIALIZING EAGLEART_SYSTEMS_2026
          </motion.div>

          {/* Graphical Loading Line */}
          <div className="relative mt-8 h-[2px] w-64 overflow-hidden rounded-full bg-[#1f2937]">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Numerical Counter */}
          <span className="mt-4 font-mono text-lg font-medium text-white">
            {progress}%
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
