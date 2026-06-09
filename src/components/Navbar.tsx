/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";
import { Menu, X, Sun, Moon, Terminal, Github, Linkedin, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SOCIAL_LINKS } from "../data";
// @ts-ignore
import eagleLogo from "../assets/images/eagle_logo_1779694178606.png";

interface NavLink {
  labelKey: string;
  defaultLabel: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { labelKey: "nav.home", defaultLabel: "Home", href: "#hero" },
  { labelKey: "nav.about", defaultLabel: "About", href: "#about" },
  { labelKey: "nav.skills", defaultLabel: "Skills", href: "#skills" },
  { labelKey: "nav.projects", defaultLabel: "Projects", href: "#projects" },
  { labelKey: "nav.services", defaultLabel: "Services", href: "#services" },
  { labelKey: "nav.experience", defaultLabel: "Experience", href: "#experience" },
  { labelKey: "nav.family", defaultLabel: "Family", href: "#family" },
  { labelKey: "nav.location", defaultLabel: "Location", href: "#location" },
  { labelKey: "nav.contact", defaultLabel: "Contact", href: "#contact" }
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Scroll event to handle navbar blur intensity change
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // IntersectionObserver to pinpoint active view accurately
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Trigger when element is near center
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    NAV_LINKS.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "glass-nav py-3 shadow-lg" : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
          {/* Logo Branding */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="flex items-center space-x-2 text-xl font-heading font-bold font-display text-gray-900 dark:text-white group"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 overflow-hidden shadow-md shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-200 border border-slate-200/20">
              <img
                src={eagleLogo}
                alt="EAGLE ART"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 font-black text-base md:text-lg">
              EAGLE ART<span className="text-indigo-500 font-extrabold">.</span>
            </span>
          </a>

          {/* Desktop Links (Large/Medium Devices) */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 interactive-hover relative ${
                    isActive
                      ? "text-indigo-600 dark:text-white"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-indigo-50 dark:bg-indigo-600/10 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {t(link.labelKey)}
                </a>
              );
            })}
          </div>

          {/* Right Side Options (Theme toggle & burger menu) */}
          <div className="flex items-center space-x-2">
            {/* GitHub Profile Icon */}
            <div className="relative group">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit my GitHub"
                className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:text-[#111827] dark:hover:text-[#818cf8] hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] bg-white dark:bg-[#12141a]/60 hover:scale-105 active:scale-95 flex items-center justify-center transition-all duration-300"
                aria-label="GitHub Developer Profile Link"
              >
                <Github size={18} />
              </a>
              <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-[10px] font-mono text-white bg-slate-950/90 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/5 shadow-md z-50">
                Visit my GitHub
              </span>
            </div>

            {/* Premium Language Selector Switcher button - Globe with code */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-amber-400 bg-white dark:bg-[#12141a]/60 flex items-center space-x-1.5 cursor-pointer transition-all duration-200 active:scale-95"
              aria-label="Switch Language (En/Rw)"
              title={language === "en" ? "Hindura mu Kinyarwanda" : "Switch to English"}
            >
              <Globe size={18} className="text-indigo-500 dark:text-indigo-400" />
              <span className="text-xs font-mono font-bold tracking-wider">{language === "en" ? "EN" : "RW"}</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-amber-400 bg-white dark:bg-[#12141a]/60 flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-95"
              aria-label="Toggle theme mode"
              id="theme-toggler"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Hamburger Burger menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 bg-white dark:bg-[#12141a]/60 cursor-pointer hover:text-indigo-600 transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 lg:hidden bg-white dark:bg-[#0c0d12]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col h-full pt-28 px-8 pb-10">
              <div className="flex flex-col space-y-4">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`text-2xl font-heading font-medium py-3 border-b border-gray-100 dark:border-gray-800 transition-all ${
                        isActive
                          ? "text-indigo-600 dark:text-white"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {t(link.labelKey)}
                    </a>
                  );
                })}
              </div>

              {/* Language Switcher in Mobile Drawer */}
              <div className="mt-8">
                <button
                  onClick={toggleLanguage}
                  className="w-full py-3.5 px-4 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-amber-400 bg-gray-50 dark:bg-[#12141a]/60 flex items-center justify-center space-x-2 transition-all duration-200"
                >
                  <Globe size={18} className="text-indigo-500" />
                  <span className="text-sm font-semibold">
                    {language === "en" ? "Change language: English" : "Hindura ururimi: Kinyarwanda"}
                  </span>
                  <span className="font-mono font-bold bg-indigo-100 dark:bg-indigo-950 px-2 py-0.5 rounded text-xs select-none">
                    {language === "en" ? "EN" : "RW"}
                  </span>
                </button>
              </div>

              <div className="mt-auto">
                <div className="text-xs font-mono text-gray-400 mb-2">CONNECTED AS </div>
                <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">eagleart46@gmail.com</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
