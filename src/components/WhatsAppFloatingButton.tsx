/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { SOCIAL_LINKS } from "../data";
import { motion } from "motion/react";

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto select-none flex items-center justify-center">
      {/* Outer pulsating wave ring */}
      <div className="absolute h-16 w-16 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
      <div className="absolute h-20 w-20 rounded-full bg-emerald-500/10 animate-pulse pointer-events-none" />
      
      {/* Main floating button containing WhatsApp brand SVG */}
      <motion.a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/30 border border-emerald-400/20 active:scale-95 transition-all text-center cursor-pointer group"
        whileHover={{ scale: 1.15, rotate: 6 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        aria-label="Direct Chat with NDAYISHIMIYE Jean de Dieu (EAGLE ART) on WhatsApp"
        title="Direct Chat with EAGLE ART"
      >
        <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 1.981 14.115.956 11.512.956c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.452 3.39 1.31 4.877L1.97 20.89l5.514-1.442zM17.57 14.47c-.22-.11-1.3-.64-1.502-.71-.2-.08-.35-.11-.5.11-.15.22-.58.73-.71.89-.13.15-.26.18-.48.08-.22-.11-.93-.34-1.78-1.1-.66-.59-1.1-1.32-1.23-1.54-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.36.08-.15.04-.28-.02-.39-.06-.11-.5-.1.2-.68-1.65-.18-.44-.35-.55-.48-.55-.11 0-.24.01-.37.03-.13.02-.34.08-.52.26-.18.18-.68.66-.68 1.61 0 .95.69 1.87.79 2 .1.13 1.36 2.08 3.29 2.91.46.2 1.03.32 1.39.23.46-.07 1.41-.57 1.61-1.12.2-.55.2-1.03.14-1.13-.06-.1-.22-.16-.44-.27z" />
        </svg>

        {/* Small Tooltip hint appearing on button hover */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1.5 text-xs text-white bg-slate-950/90 tracking-wide font-semibold rounded-xl border border-white/5 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
          Chat with EAGLE ART 🚀
        </span>
      </motion.a>
    </div>
  );
};
