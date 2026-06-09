/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./components/ThemeContext";
import { LanguageProvider } from "./components/LanguageContext";
import { CustomCursor } from "./components/CustomCursor";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Experience } from "./components/Experience";
import { Testimonials } from "./components/Testimonials";
import { Family } from "./components/Family";
import { KigaliMap } from "./components/KigaliMap";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      setShowScroll(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        {/* Dynamic Halo Cursor tracking ring */}
        <CustomCursor />

        <AnimatePresence mode="wait">
          {isLoading ? (
            <Loader key="intro-loader" onComplete={() => setIsLoading(false)} />
          ) : (
            <motion.div
              key="portfolio-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-white relative overflow-hidden font-sans"
            >
              {/* Soft Ambient Frosted Glass Background Blobs */}
              <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/15 blur-[120px] pointer-events-none z-0" />
              <div className="absolute top-[20%] left-[-150px] w-[600px] h-[600px] rounded-full bg-cyan-400/5 dark:bg-cyan-500/10 blur-[130px] pointer-events-none z-0" />
              <div className="absolute top-[45%] right-[-150px] w-[550px] h-[550px] rounded-full bg-indigo-400/5 dark:bg-purple-600/10 blur-[120px] pointer-events-none z-0" />
              <div className="absolute top-[70%] left-[-100px] w-[500px] h-[500px] rounded-full bg-pink-500/5 dark:bg-pink-600/5 blur-[110px] pointer-events-none z-0" />
              <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/15 blur-[140px] pointer-events-none z-0" />

              {/* Sticky transparent header with scroll blurs */}
              <Navbar />

              {/* Main Single Page Sections content */}
              <main id="portfolio-main-layout">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Services />
                <Experience />
                <Testimonials />
                <Family />
                <KigaliMap />
                <Contact />
              </main>

              {/* Global Footer */}
              <Footer />

              {/* WhatsApp Floating Contact Widget */}
              <WhatsAppFloatingButton />

              {/* Persistent Floating Scroll Back To Top Button Anchor */}
              <AnimatePresence>
                {showScroll && (
                  <motion.button
                    key="floating-scroll-back-top"
                    onClick={scrollToTop}
                    className="fixed bottom-24 right-6 z-40 p-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-indigo-500/20 active:scale-95 cursor-pointer flex items-center justify-center transition-all duration-200"
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                    aria-label="Scroll back to top of screen"
                  >
                    <ArrowUp size={18} />
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </LanguageProvider>
    </ThemeProvider>
  );
}
