/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { APIProvider, Map, AdvancedMarker, useAdvancedMarkerRef } from "@vis.gl/react-google-maps";
import { MapPin, Navigation, Send, MessageSquare, Linkedin, ExternalLink, Sparkles, AlertCircle, RefreshCw, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SOCIAL_LINKS } from "../data";
import { useLanguage } from "./LanguageContext";

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  "";

const hasValidKey = Boolean(API_KEY) && API_KEY !== "YOUR_API_KEY" && API_KEY.trim() !== "";

// Coordinate definitions for Kigali City
const KIGALI_LAT = -1.9441;
const KIGALI_LNG = 30.0619;

export const KigaliMap: React.FC = () => {
  const { language } = useLanguage();
  const [localTime, setLocalTime] = useState("");
  const [showHowToSetup, setShowHowToSetup] = useState(!hasValidKey);
  const [customStyle, setCustomStyle] = useState<"standard" | "dark" | "silver">("dark");
  const [markerRef, marker] = useAdvancedMarkerRef();

  // Keep a ticking clock representing Kigali local time (CAT: UTC+2)
  useEffect(() => {
    const updateKigaliTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Kigali",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };

    updateKigaliTime();
    const timer = setInterval(updateKigaliTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Professional Map styles matching light & dark modes
  const mapStyles = {
    standard: [],
    silver: [
      { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
      { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
      { featureType: "administrative.land_parcel", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] },
      { featureType: "poi", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
      { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
      { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
      { featureType: "road.arterial", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
      { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#dadada" }] },
      { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
      { featureType: "water", elementType: "geometry", stylers: [{ color: "#c9c9c9" }] },
      { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
    ],
    dark: [
      { elementType: "geometry", stylers: [{ color: "#1a1b24" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#1a1b24" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#747891" }] },
      { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
      { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#83c5be" }] },
      { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#132a13" }] },
      { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#6b9080" }] },
      { featureType: "road", elementType: "geometry", stylers: [{ color: "#282936" }] },
      { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#1c1d24" }] },
      { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca3af" }] },
      { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#313646" }] },
      { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#1f1e26" }] },
      { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#f3f4f6" }] },
      { featureType: "water", elementType: "geometry", stylers: [{ color: "#0c0f1d" }] },
      { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#4e7a8e" }] },
    ],
  };

  const getDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${KIGALI_LAT},${KIGALI_LNG}`;

  return (
    <section id="location" className="py-24 bg-transparent transition-colors duration-300 relative overflow-hidden">
      {/* Subtle glowing radial background blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[90px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-purple-500/5 dark:bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.div
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles size={12} />
            <span>{language === "en" ? "GLOBAL FOOTPRINT" : "AKAZI KACU KU ISI"}</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {language === "en" ? "Based in Kigali City, Rwanda" : "Tuba mu Mujyi wa Kigali, u Rwanda"}
          </motion.h2>

          <motion.p
            className="text-gray-500 dark:text-gray-400 max-w-2xl text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {language === "en"
              ? "Operating globally from the heart of East Africa's rising technology hub. Delivering premium scalable software engineering services worldwide."
              : "Dukorera ku rwego rw'isi duturuka mu mutima w'ikoranabuhanga riri gutera imbere muri Afurika y'Iburasirazuba. Dutanga serivisi z'ikoranabuhanga zigezweho ku isi yose."}
          </motion.p>
        </div>

        {/* Dynamic Card Map Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Location Info Card Column */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8 rounded-2xl glass-panel relative overflow-hidden group select-none border border-slate-200/30 dark:border-white/5 shadow-sm hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Top Info Blocks */}
            <div className="space-y-6 text-left">
              <div>
                <span className="text-xs font-mono font-bold text-indigo-500 uppercase tracking-widest block mb-1">
                  {language === "en" ? "Current Coordinates" : "Ibyerekezo Bihari"}
                </span>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {language === "en" ? "Kigali, Rwanda — 1.9441° S, 30.0619° E" : "Kigali, u Rwanda — 1.9441° S, 30.0619° E"}
                </span>
              </div>

              <div className="space-y-4">
                {/* Meta details with dynamic indicators */}
                <div className="flex items-start space-x-3.5 p-3 rounded-xl bg-slate-500/5 border border-slate-200/20 dark:border-white/5">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse mt-2.5 flex-shrink-0" />
                  <div className="text-left">
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                      {language === "en" ? "Freelancer & Remote Status" : "Uburyo bwo Gukora (Remote Status)"}
                    </span>
                    <span className="text-sm font-semibold text-gray-800 dark:text-white">
                      {language === "en" ? "Active & Open for Innovations" : "Niteguye Akazi & Guhimba Ibishya"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3 rounded-xl bg-slate-500/5 border border-slate-200/20 dark:border-white/5">
                  <div className="h-2\5 w-0 text-indigo-500 mt-1 flex-shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                      {language === "en" ? "Local Time Zone" : "Isaha ya Gace Ndangamasaha"}
                    </span>
                    <span className="text-sm font-semibold text-gray-800 dark:text-white">
                      {language === "en" ? "Central Africa Time (CAT) ─ UTC +2" : "Isaha yo muri Afurika yo Hagati (CAT) ─ UTC +2"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3 rounded-xl bg-slate-500/5 border border-slate-200/20 dark:border-white/5">
                  <span className="text-lg font-mono font-semibold text-indigo-500 mt-0.5 flex-shrink-0 select-none">🕒</span>
                  <div className="text-left">
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                      {language === "en" ? "Kigali Realtime clock" : "Isaha yo mu Kigali Iri Gukora"}
                    </span>
                    <span className="text-lg font-bold font-mono tracking-tight text-indigo-600 dark:text-indigo-400">
                      {localTime || "00:00:00 AM"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Social & Quick CTA Buttons */}
            <div className="mt-8 space-y-4">
              <a
                href={getDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold text-sm shadow-md shadow-indigo-500/10 cursor-pointer active:scale-[0.98] transition-all"
              >
                <Navigation size={16} className="animate-pulse" />
                <span>{language === "en" ? "Get Directions on Google Maps" : "Tugereho unyuze kuri Google Maps"}</span>
                <ExternalLink size={12} className="opacity-70" />
              </a>

              {/* Grid of contact links */}
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/15 cursor-pointer transition-all"
                  aria-label="WhatsApp EAGLE ART"
                >
                  <MessageSquare size={16} />
                  <span className="text-[10px] uppercase tracking-wider font-bold mt-1 font-mono">WhatsApp</span>
                </a>

                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/15 cursor-pointer transition-all"
                  aria-label="Email EAGLE ART"
                >
                  <Send size={16} />
                  <span className="text-[10px] uppercase tracking-wider font-bold mt-1 font-mono">Email</span>
                </a>

                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/15 cursor-pointer transition-all"
                  aria-label="LinkedIn EAGLE ART"
                >
                  <Linkedin size={16} />
                  <span className="text-[10px] uppercase tracking-wider font-bold mt-1 font-mono">LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Interactive Interactive Google Map Container */}
          <motion.div
            className="lg:col-span-7 rounded-2xl border border-slate-200/30 dark:border-white/5 bg-slate-900/40 relative overflow-hidden flex flex-col min-h-[400px] shadow-sm hover:shadow-indigo-500/5 group/map"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {showHowToSetup ? (
                /* Dynamic Interactive Fallback with Secrets configuration instructions */
                <motion.div
                  key="setup-guide"
                  className="absolute inset-0 bg-slate-950/90 text-white flex flex-col justify-between p-6 md:p-8 z-30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-indigo-400 font-bold">
                      <AlertCircle size={20} className="text-yellow-500 animate-bounce" />
                      <span className="text-sm font-mono uppercase tracking-widest">Maps Integration Ready</span>
                    </div>

                    <h3 className="text-base md:text-lg font-heading font-bold text-slate-100 text-left">
                      Activate Fully Interactive Google Maps API Experience
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed text-left">
                      To load Google's live mapping tiles natively, set your <code>GOOGLE_MAPS_PLATFORM_KEY</code>.
                    </p>

                    <div className="p-4 rounded-xl bg-slate-900/60 border border-indigo-500/20 space-y-2 text-left">
                      <p className="text-xs text-slate-200 font-semibold">To set your API key:</p>
                      <ol className="text-[11px] text-slate-400 space-y-2 list-decimal list-inside leading-relaxed">
                        <li>
                          Get an API key: <a href="https://console.cloud.google.com/google/maps-apis/start?utm_campaign=gmp-code-assist-ais" target="_blank" rel="noreferrer" className="text-indigo-400 underline hover:text-indigo-300">Google Cloud Console</a>
                        </li>
                        <li>
                          Enter your key when the <strong>"Enter your environment variable to continue"</strong> prompt appears, or do it manually:
                        </li>
                        <li>
                          Open <strong>Settings</strong> (⚙️ gear icon, top-right panel) &rarr; <strong>Secrets</strong> &rarr; Add <code>GOOGLE_MAPS_PLATFORM_KEY</code> as secret key, and paste your API key value.
                        </li>
                      </ol>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* Bypass buttons to see Mock Kigali Map frame without API key */}
                    <button
                      onClick={() => setShowHowToSetup(false)}
                      className="px-4 py-2 text-xs font-bold rounded-lg border border-slate-600/40 hover:border-slate-400 hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
                    >
                      Bypass to Render Vector Map Fallback
                    </button>
                    <span className="text-[10px] font-mono text-slate-500">2026 EAGLE ART MAPS</span>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>

            {/* Actual Google Maps Platform API Node */}
            {hasValidKey && !showHowToSetup ? (
              <div className="w-full h-full min-h-[400px] relative z-10 flex-grow">
                <APIProvider apiKey={API_KEY} version="weekly">
                  <Map
                    defaultCenter={{ lat: KIGALI_LAT, lng: KIGALI_LNG }}
                    defaultZoom={13}
                    mapId="DEMO_MAP_ID"
                    internalUsageAttributionIds={["gmp_mcp_codeassist_v1_aistudio"]}
                    style={{ width: "100%", height: "100%", minHeight: "400px" }}
                    styles={mapStyles[customStyle]}
                    disableDefaultUI={false}
                  >
                    <AdvancedMarker ref={markerRef} position={{ lat: KIGALI_LAT, lng: KIGALI_LNG }}>
                      {/* Animated radar style custom location pin */}
                      <div className="relative flex items-center justify-center">
                        <div className="absolute h-8 w-8 rounded-full bg-indigo-500/30 dark:bg-indigo-400/30 animate-ping" />
                        <div className="absolute h-12 w-12 rounded-full bg-indigo-500/15 dark:bg-indigo-400/15 animate-pulse" />
                        <div className="p-2.5 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-lg border-2 border-white dark:border-slate-900 flex items-center justify-center relative">
                          <MapPin size={16} />
                        </div>
                      </div>
                    </AdvancedMarker>
                  </Map>
                </APIProvider>

                {/* Map style customization switcher floating bar */}
                <div className="absolute bottom-4 left-4 z-20 flex space-x-1.5 p-1 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10">
                  {(["dark", "silver", "standard"] as const).map((style) => (
                    <button
                      key={style}
                      onClick={() => setCustomStyle(style)}
                      className={`px-3 py-1 text-[10px] font-mono uppercase tracking-wider font-bold rounded-lg cursor-pointer transition-all ${
                        customStyle === style
                          ? "bg-indigo-600 text-white shadow"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>

                {/* Button to view instructions */}
                <button
                  onClick={() => setShowHowToSetup(true)}
                  className="absolute top-4 right-4 z-20 flex items-center space-x-1 px-3 py-1.5 text-[10px] font-mono tracking-wider font-bold rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-slate-400 hover:text-slate-200 cursor-pointer transition-all"
                >
                  <RefreshCw size={10} className="animate-spin" />
                  <span>Setup Guide</span>
                </button>
              </div>
            ) : (
              /* High-End vector fallback showing stylized coordinates when key is not loaded yet */
              <div className="w-full h-full min-h-[400px] flex-grow relative flex flex-col items-center justify-center bg-[#090b14] overflow-hidden">
                {/* SVG Mocking a highly stylish abstract map of Kigali City */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  {/* Grid lines and city rings simulating a HUD display */}
                  <svg width="100%" height="100%" className="absolute inset-0">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2a2e4a" strokeWidth="0.5" />
                      </pattern>
                      <radialGradient id="grad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#090b14" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    <circle cx="50%" cy="50%" r="100" fill="url(#grad)" />
                    <circle cx="50%" cy="50%" r="200" fill="none" stroke="#6366f1" strokeOpacity="0.1" strokeDasharray="5,5" />
                    <circle cx="50%" cy="50%" r="300" fill="none" stroke="#6366f1" strokeOpacity="0.05" />

                    {/* Faux road network lines */}
                    <path d="M -100 200 Q 200 150 400 350 T 800 250" fill="none" stroke="#6366f1" strokeWidth="1" strokeOpacity="0.15" />
                    <path d="M 100 -50 Q 150 200 300 400 T 500 650" fill="none" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.15" />
                    <path d="M 0 350 H 1000" fill="none" stroke="#cbd5e1" strokeWidth="0.5" strokeOpacity="0.1" />
                  </svg>
                </div>

                {/* Simulated Custom Pulse Marker centered */}
                <motion.div
                  className="relative flex items-center justify-center z-10"
                  animate={{ scale: [0.97, 1.03, 0.97] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <div className="absolute h-16 w-16 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10 blur-xl" />
                  <div className="absolute h-28 w-28 rounded-full bg-indigo-500/5 dark:bg-indigo-400/5 blur-2xl" />
                  <div className="p-4 rounded-3xl bg-slate-900/95 border border-indigo-500/30 text-center space-y-2 max-w-sm shadow-2xl relative">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/40 relative">
                      <MapPin size={18} className="animate-bounce" />
                    </div>
                    <div>
                      <h4 className="text-sm font-heading font-black tracking-tight text-white uppercase">
                        {language === "en" ? "Kigali, Rwanda" : "Kigali, u Rwanda"}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                        S 1° 56' 38" ⎸ E 30° 3' 42"
                      </p>
                    </div>
                    <p className="text-[11px] text-indigo-300 leading-normal border-t border-slate-800 pt-2">
                       {language === "en"
                         ? "Vector preview. Fully interactive 3D map activates automatically upon setting your API key."
                         : "Ikarita mpanabyerekezo. Ikarita ya 3D ifunguka mu buryo bwikora ukimara gushyiraho ururundi rwa API key."}
                    </p>
                  </div>
                </motion.div>

                {/* Option to show setup guide */}
                <button
                  onClick={() => setShowHowToSetup(true)}
                  className="absolute bottom-6 px-4 py-2 rounded-xl bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 text-xs font-bold tracking-wider uppercase cursor-pointer transition-all active:scale-95 z-20"
                >
                  {language === "en" ? "Configure Live Google Maps" : "Gushyiraho Ikarita Icyeye"}
                </button>
              </div>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
