/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { SOCIAL_LINKS } from "../data";
import { useLanguage } from "./LanguageContext";
import { Github, Linkedin, Twitter, ArrowRight, Download, Atom, Database, Shield, Code, AppWindow } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
// @ts-ignore
import eagleLogo from "../assets/images/eagle_logo_1779694178606.png";
const postImage = "https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/686904006_1336795801627310_8025335128848720880_n.jpg?stp=dst-jpg_tt6&cstp=mx1040x1513&ctp=s1040x1513&_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEm7g9b8JZQM3P-XEDumlAKnOnRJX0iormc6dElfSKiuQW_Stn9zQTXh5gQg-5wQ7IzLWPFWwjAt2Xg7SaA0xZx&_nc_ohc=JZ2pqNQzQg4Q7kNvwGHxCCq&_nc_oc=Adol4m4xoN5oF_EPcszTgDfwGQHxuBhDDi71AE6bt76P35AxM3a0Vy5EFAXI3HD46Yk&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=zqygwrSDrLtoUlLpW7YwvQ&_nc_ss=7a2a8&oh=00_Af_kPo__5AY4koTYnyzm_0SKJs51olZx0Fjsy5y6clkoNw&oe=6A2DF609";

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const typingWords = language === "en" 
    ? ["Full Stack Software Developer", "Creative Web Developer", "Modern UI/UX Engineer", "Custom Cloud Architect"]
    : ["Umunyabugeni wa UI/UX", "Umwubatsi wa Software", "Umunyakoranyabuhanga wa Cloud", "Umukanishi wa Code Isukuye"];

  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [activeTab, setActiveTab] = useState<"terminal" | "logo" | "profile">("profile");

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const fullWord = typingWords[wordIndex] || "";
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          // Pause at full word
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % typingWords.length);
          return;
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, typingSpeed, typingWords]);

  const handleDownloadCV = () => {
    alert("CV Download sequence initiated. Real portfolio would serve Resume file.");
  };

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden hero-gradient-mesh bg-transparent transition-colors duration-300"
    >
      {/* Background Neon Pulsing Blobs */}
      <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 blur-3xl" />
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-pink-500/10 dark:bg-pink-500/15 blur-3xl" />

      {/* Floating Animated Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[25%] left-[20%] text-indigo-500/30 dark:text-indigo-500/40"
          animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <Atom size={44} />
        </motion.div>
        <motion.div
          className="absolute top-[35%] right-[15%] text-pink-500/20 dark:text-pink-500/30"
          animate={{ y: [0, -25, 0], rotate: [0, -20, 20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
        >
          <Database size={38} />
        </motion.div>
        <motion.div
          className="absolute bottom-[25%] left-[15%] text-indigo-500/20 dark:text-indigo-500/30"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
        >
          <Code size={36} />
        </motion.div>
        <motion.div
          className="absolute bottom-[35%] right-[25%] text-emerald-500/20 dark:text-emerald-500/30"
          animate={{ y: [0, -15, 0], x: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
        >
          <AppWindow size={40} />
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 py-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full">
        {/* Left Header introduction Column */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
          {/* Tag */}
          <motion.div
            className="inline-flex self-start items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold tracking-wide"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Shield size={12} />
            <span>PORTFOLIO FOR 2026</span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-3">
            <motion.h4
              className="text-sm md:text-base font-mono tracking-widest text-[#6366f1] dark:text-[#818cf8] font-bold uppercase"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              {t("hero.greeting")} <span className="font-bold relative inline-block text-gray-800 dark:text-white">
                EAGLE ART
              </span>
            </motion.h4>
            <div className="space-y-1">
              <motion.h1
                className="text-3xl md:text-5xl font-heading font-black tracking-tight text-gray-900 dark:text-white leading-[1.12]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25, duration: 0.6, type: "spring" }}
              >
                <span className="block text-gray-900 dark:text-white">
                  NDAYISHIMIYE
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 font-extrabold pb-1">
                  Jean de Dieu
                </span>
              </motion.h1>
            </div>
            
            <motion.h2
              className="text-xl md:text-3xl font-heading font-extrabold tracking-tight text-gray-800 dark:text-slate-200 leading-tight min-h-[70px] md:min-h-[90px]"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <span className="text-gray-500 dark:text-gray-400 font-medium">
                {language === "en" ? "Architecting " : "Kubaka "}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                {currentText}
              </span>
              <span className="text-indigo-500 dark:text-indigo-400 cursor-blink">|</span>
            </motion.h2>
          </div>

          {/* Bio Description */}
          <motion.p
            className="text-[#4b5563] dark:text-[#a1a1aa] text-base md:text-lg max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {t("hero.bio")}
          </motion.p>

          {/* Buttons CTA */}
          <motion.div
            className="flex flex-wrap items-center gap-4 pt-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl flex items-center space-x-2 shadow-lg hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/10 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>{t("hero.touch")}</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={handleDownloadCV}
              className="px-6 py-3.5 border border-slate-200/60 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white bg-white/30 dark:bg-white/5 backdrop-blur-md hover:bg-white/50 dark:hover:bg-white/10 font-semibold rounded-xl flex items-center space-x-2 cursor-pointer hover:scale-105 active:scale-95 shadow-sm transition-all duration-200"
            >
              <Download size={18} />
              <span>{t("hero.cv")}</span>
            </button>
          </motion.div>

          {/* Social icons links */}
          <motion.div
            className="flex items-center space-x-4 pt-4 text-gray-400 dark:text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {/* GitHub Container */}
            <div className="relative group/tooltip">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit my GitHub"
                className="hover:text-indigo-600 dark:hover:text-white transition-all duration-300 p-2 border border-slate-200/50 dark:border-white/5 rounded-xl bg-white/20 dark:bg-white/5 hover:scale-110 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] flex items-center justify-center cursor-pointer"
              >
                <Github size={20} />
              </a>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2.5 px-2 py-1 text-[10px] font-mono text-white bg-slate-950/90 rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/5 shadow-lg z-50">
                Visit my GitHub
              </span>
            </div>

            {/* LinkedIn Container */}
            <div className="relative group/tooltip">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="Connect on LinkedIn"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 p-2 border border-slate-200/50 dark:border-white/5 rounded-xl bg-white/20 dark:bg-white/5 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] flex items-center justify-center cursor-pointer"
              >
                <Linkedin size={20} />
              </a>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2.5 px-2 py-1 text-[10px] font-mono text-white bg-slate-950/90 rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/5 shadow-lg z-50">
                Connect on LinkedIn
              </span>
            </div>

            {/* WhatsApp Container */}
            <div className="relative group/tooltip">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                title="Direct Chat with EAGLE ART"
                className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-all duration-300 p-2 border border-slate-200/50 dark:border-white/5 rounded-xl bg-white/20 dark:bg-white/5 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] flex items-center justify-center cursor-pointer"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.008 0C5.393 0 .048 5.345.048 11.962c0 2.113.548 4.18 1.587 5.983L0 24l6.195-1.624c1.727.94 3.673 1.442 5.642 1.444 6.617 0 11.96-5.344 11.962-11.961C23.999 5.344 18.654 0 12.008 0zm.014 21.996c-1.792 0-3.553-.482-5.1-.1.393l-1.637 5.952-6.113 1.6 1.631-5.952a10.82 10.82 0 011.238-4.908c-.808-1.579-1.232-3.344-1.23-5.148C.909 5.8 5.875.836 12.003.836c2.935 0 5.696 1.144 7.771 3.222a10.887 10.887 0 013.218 7.775c-.004 6.13-4.965 11.092-11.08 11.092c-.01.071 0 .071 0 0z"/>
                  <path d="M11.996.956c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.452 3.39 1.31 4.877L1.97 20.89l5.514-1.442c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 1.981 14.115.956 11.512.956zm5.748 13.513c-.22.427-.852.793-1.22 1.012-.341.203-.78.366-2.146-.183-2.126-.853-3.66-2.905-3.812-3.11-.152-.203-1.098-1.451-1.098-2.766 0-1.316.685-1.961.96-2.224.275-.264.6-.33.805-.33.152 0 .305.011.439.016.14.005.323-.021.503.411.183.438.64 1.547.695 1.66.055.111.092.244.018.39-.074.146-.11.238-.22.366s-.232.28-.33.39c-.11.11-.225.231-.097.451.128.22.567.927 1.22 1.505.842.744 1.554.975 1.774 1.085.22.11.353.091.488-.06.134-.153.585-.677.744-.908.158-.231.317-.195.536-.115.22.08 1.39.652 1.628.774.238.121.396.183.454.28.058.098.058.56-.162.987z"/>
                </svg>
              </a>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2.5 px-2 py-1 text-[10px] font-mono text-white bg-slate-950/90 rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/5 shadow-lg z-50">
                Chat on WhatsApp
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Developer Image Avatar Column */}
        <div className="lg:col-span-5 flex justify-center items-center relative pb-8 md:pb-0">
          <motion.div
            className="relative h-[320px] w-[320px] md:h-[400px] md:w-[400px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          >
            {/* Pulsing behind glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-pink-500/20 blur-2xl animate-pulse" />

            {/* Main Identity Emblem Frame with Futuristic Glowing border styling */}
            <div className="absolute inset-2 rounded-3xl overflow-hidden border border-indigo-500/30 dark:border-indigo-500/40 bg-[#0b0f19]/95 group shadow-3xl hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-500">
              {activeTab === "logo" ? (
                <img
                  src={eagleLogo}
                  alt="EAGLE ART Brand Identity Logo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 select-none"
                  referrerPolicy="no-referrer"
                />
              ) : activeTab === "profile" ? (
                <div className="relative w-full h-full select-none overflow-hidden bg-slate-950/90 flex items-center justify-center">
                  {/* High-fidelity color diffusion from the photo's vibrant background */}
                  <img
                    src={postImage}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  {/* Master crisp standing photoshoot image, fully preserved with zero clipping */}
                  <img
                    src={postImage}
                    alt="NDAYISHIMIYE Jean de Dieu Photoshoot"
                    className="relative z-10 w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-5 text-left z-20">
                    <p className="text-white font-heading font-black tracking-wide text-sm md:text-base leading-none">
                      NDAYISHIMIYE Jean de Dieu
                    </p>
                    <p className="text-indigo-400 font-mono text-[9px] md:text-[10px] font-bold mt-1 uppercase tracking-wider">
                      {language === 'en' ? 'Professional Photoshoot (Eagle Art)' : 'Ibyerekeye Amafoto (Eagle Art)'}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full p-4 md:p-6 text-[10px] md:text-xs font-mono text-emerald-400 flex flex-col justify-start">
                  {/* Title controls */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 select-none">
                    <div className="flex space-x-1.5 md:space-x-2">
                      <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-slate-400 font-bold tracking-wide text-[9px] uppercase">
                      post@localhost:~
                    </span>
                    <span className="text-slate-600 font-black text-[9px]">bash</span>
                  </div>

                  {/* Terminal simulation */}
                  <div className="space-y-3 overflow-hidden flex-1 text-left select-none">
                    <div className="flex items-center space-x-1.5 text-indigo-400">
                      <span className="text-slate-500 font-bold">post@pc:~$</span>
                      <span className="text-slate-200">neofetch</span>
                    </div>

                    <div className="grid grid-cols-12 gap-1 md:gap-3 pt-1">
                      {/* Left: ASCII Art representing Eagle Systems */}
                      <div className="col-span-4 text-indigo-500 font-black leading-tight text-[8px] md:text-[10px] space-y-0.5 select-none text-center">
                        <div className="text-indigo-400">  __    __  </div>
                        <div className="text-indigo-400"> \ \  / / </div>
                        <div className="text-indigo-400">  \ \/ /  </div>
                        <div className="text-indigo-500">  / /\ \  </div>
                        <div className="text-indigo-500"> /_/__\_\ </div>
                        <div className="text-[#a855f7] tracking-tighter text-[8px] mt-1 font-bold">EAGLE-SYS</div>
                      </div>

                      {/* Right: Specifications of PC post */}
                      <div className="col-span-8 space-y-1 text-[9px] md:text-[11px] text-slate-300">
                        <p><span className="text-indigo-400 font-bold">OS:</span> macOS / Linux Enterprise</p>
                        <p><span className="text-indigo-400 font-bold">{t("hero.terminal.host").split(":")[0] || "Host"}:</span> {t("hero.terminal.host").split(":")[1] || "Local Developer Machine"}</p>
                        <p><span className="text-indigo-400 font-bold">{t("hero.terminal.pc")}:</span> <span className="text-emerald-400 font-extrabold">"post"</span></p>
                        <p><span className="text-indigo-400 font-bold">Kernel:</span> 2026.06.02 LTS</p>
                        <p><span className="text-indigo-400 font-bold">{t("hero.terminal.uptime").split(":")[0] || "Uptime"}:</span> {t("hero.terminal.uptime").split(":")[1] || "100% Core Online"}</p>
                        <p><span className="text-indigo-400 font-bold">Shell:</span> zsh (post@pc-dev)</p>
                        <p><span className="text-slate-400 text-[8px] italic mt-1 block">{t("hero.terminal.synced")}</span></p>
                      </div>
                    </div>

                    {/* Output active line */}
                    <div className="pt-3 border-t border-slate-800/60 flex items-center space-x-1.5 text-[10px] md:text-xs">
                      <span className="text-slate-500 font-bold">post@pc:~$</span>
                      <span className="text-white animate-pulse">echo "{language === "en" ? "EAGLE ART Online" : "EAGLE ART Ari Kazi"}"▮</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Premium Tab Selector Control buttons */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex bg-slate-900/90 dark:bg-slate-950/90 border border-slate-200/20 dark:border-white/10 p-1 rounded-full text-[10px] font-semibold tracking-wide uppercase shadow-lg select-none z-20">
              <button
                type="button"
                onClick={() => setActiveTab("profile")}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  activeTab === "profile"
                    ? "bg-indigo-600 text-white font-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {language === "en" ? "Eagle Photo" : "Amafoto"}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("terminal")}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  activeTab === "terminal"
                    ? "bg-indigo-600 text-white font-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                PC: post
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("logo")}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  activeTab === "logo"
                    ? "bg-indigo-600 text-white font-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Big Logo
              </button>
            </div>

            {/* Glowing orbital badges */}
            <motion.div
              className="absolute -top-2 right-12 h-10 w-10 rounded-xl bg-white dark:bg-[#12141a] flex items-center justify-center shadow-lg border border-gray-100 dark:border-gray-800"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Atom size={20} className="text-[#61dafb]" />
            </motion.div>
            <motion.div
              className="absolute bottom-12 -left-4 h-11 w-11 rounded-full bg-white dark:bg-[#12141a] flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-800 z-10"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
              <span className="font-mono text-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-600 bg-indigo-500">
                TS
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
