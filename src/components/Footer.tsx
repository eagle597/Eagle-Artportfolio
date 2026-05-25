/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { SOCIAL_LINKS } from "../data";
import { Github, Linkedin, Twitter, ArrowUp, Terminal } from "lucide-react";
// @ts-ignore
import eagleLogo from "../assets/images/eagle_logo_1779694178606.png";

export const Footer: React.FC = () => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 bg-transparent border-t border-slate-200/40 dark:border-white/5 transition-colors duration-300 relative">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between pb-10 border-b border-slate-200/40 dark:border-white/5">
          
          {/* Brand Col */}
          <div className="md:col-span-4 flex flex-col space-y-4 text-left">
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, "#hero")}
              className="flex items-center space-x-2 text-xl font-heading font-bold"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 overflow-hidden text-white font-extrabold text-[11px] min-h-[36px] min-w-[36px] shadow-sm border border-slate-200/20">
                <img
                  src={eagleLogo}
                  alt="EAGLE ART"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 font-extrabold text-lg">
                EAGLE ART<span className="text-indigo-500 font-extrabold">.</span>
              </span>
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
              Designing premium frontend solutions linked with robust databases and highly performant backend architectures.
            </p>
          </div>

          {/* Quick links Col */}
          <div className="md:col-span-5 flex flex-wrap gap-x-6 gap-y-3 justify-start md:justify-center">
            <a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="text-sm font-semibold text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" onClick={(e) => handleLinkClick(e, "#skills")} className="text-sm font-semibold text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" onClick={(e) => handleLinkClick(e, "#projects")} className="text-sm font-semibold text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white transition-colors">
              Projects
            </a>
            <a href="#experience" onClick={(e) => handleLinkClick(e, "#experience")} className="text-sm font-semibold text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white transition-colors">
              Experience
            </a>
            <a href="#family" onClick={(e) => handleLinkClick(e, "#family")} className="text-sm font-semibold text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white transition-colors">
              Family
            </a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")} className="text-sm font-semibold text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Social icons links col */}
          <div className="md:col-span-3 flex justify-start md:justify-end space-x-4">
            <div className="relative group">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit my GitHub"
                className="p-2.5 rounded-lg border border-slate-200/40 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/5 hover:scale-110 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all bg-white/35 dark:bg-white/5 backdrop-blur-sm cursor-pointer flex items-center justify-center"
                aria-label="GitHub Developer Profile Link"
              >
                <Github size={16} />
              </a>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-mono text-white bg-slate-900 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/5">
                Visit my GitHub
              </span>
            </div>

            <div className="relative group">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="Connect on LinkedIn"
                className="p-2.5 rounded-lg border border-slate-200/40 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/5 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all bg-white/35 dark:bg-white/5 backdrop-blur-sm cursor-pointer flex items-center justify-center"
                aria-label="LinkedIn Developer Profile Link"
              >
                <Linkedin size={16} />
              </a>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-mono text-white bg-slate-900 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/5">
                Connect on LinkedIn
              </span>
            </div>

            <div className="relative group">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                title="Direct Chat with EAGLE ART"
                className="p-2.5 rounded-lg border border-slate-200/40 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/5 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all bg-white/35 dark:bg-white/5 backdrop-blur-sm cursor-pointer flex items-center justify-center"
                aria-label="WhatsApp Chat Profile Link"
              >
                {/* Standard MessageSquare/WhatsApp bubble */}
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 1.981 14.115.956 11.512.956c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.452 3.39 1.31 4.877L1.97 20.89l5.514-1.442z" />
                </svg>
              </a>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-mono text-white bg-slate-900 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/5">
                Chat on WhatsApp
              </span>
            </div>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <div className="flex flex-col space-y-1 text-center md:text-left">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Let’s connect and build something amazing 🚀
            </p>
            <span className="text-xs text-gray-400 dark:text-[#a1a1aa] font-mono">
              &copy; 2026 NDAYISHIMIYE Jean de Dieu. Designed and Developed by <span className="text-indigo-500 font-bold">EAGLE ART</span>.
            </span>
          </div>

          {/* Scroll back to top */}
          <button
            onClick={scrollUp}
            className="p-2.5 rounded-lg border border-slate-200/40 dark:border-white/10 text-gray-500 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white bg-white/35 dark:bg-white/5 backdrop-blur-sm cursor-pointer transition-all duration-200 active:scale-90"
            aria-label="Scroll back to top of page"
            id="scroll-to-top-button"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
