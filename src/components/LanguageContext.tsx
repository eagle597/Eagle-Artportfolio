/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "rw";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define translation dictionary
const translations: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.home": { en: "Home", rw: "Ahabanza" },
  "nav.about": { en: "About", rw: "Ibyerekeye Jye" },
  "nav.projects": { en: "Projects", rw: "Imishinga" },
  "nav.services": { en: "Services", rw: "Serivisi" },
  "nav.experience": { en: "Experience", rw: "Ubunararibonye" },
  "nav.family": { en: "Family", rw: "Umuryango" },
  "nav.location": { en: "Location", rw: "Aho mbarizwa" },
  "nav.contact": { en: "Contact", rw: "Twandikire" },

  // Hero Section
  "hero.greeting": { en: "Hello, I am", rw: "Muraho, Nitwa" },
  "hero.bio": {
    en: "I build highly scalable web structures, real-time engines, and gorgeous microfrontends. Combining pixel-perfect aesthetic layouts inspired by Apple and Stripe with robust systems engineering.",
    rw: "Nshushanya kandi nkubaka imiryango minini ya internet ihuta cyane, codes isukuye nka Apple na Stripe ifatanye na databases n'Inyubako ya Tekinoroji zizewe cyane."
  },
  "hero.terminal.uptime": { en: "Uptime: 100% Core Online", rw: "Igihe kizamutse: Code Ihagaze 100%" },
  "hero.terminal.host": { en: "Host: Local Developer Machine", rw: "Kigandaro: Imashini y'Umwubatsi" },
  "hero.terminal.pc": { en: "PC Name:", rw: "Izina rya PC:" },
  "hero.terminal.synced": { en: "Successfully synced with local device", rw: "Bishyize hamwe neza n'imashini" },
  "hero.cv": { en: "Download CV", rw: "Kuramo CV" },
  "hero.touch": { en: "Get In Touch", rw: "Tuvugane" },
  "hero.viewProjects": { en: "See Projects", rw: "Reba Imishinga" },

  // About Section
  "about.badge": { en: "MEET EAGLE ART", rw: "MENYA EAGLE ART" },
  "about.title": { en: "Merging Design Integrity With Robust Architecture.", rw: "Guhuza Ubunyamwuga mu Gushushanya n'Inyubako ya Tekinoroji Ihamye." },
  "about.bio": {
    en: "I am NDAYISHIMIYE Jean de Dieu (EAGLE ART), a Full Stack Software Developer and modern UI/UX Engineer specializing in building premium cloud architectures, immersive interactive web applications, and pixel-perfect high-performance frameworks.",
    rw: "Nitwa NDAYISHIMIYE Jean de Dieu (EAGLE ART), ndi Umwubatsi wa Porogaramu (Full Stack Developer) n'Umunyabugeni wa UI/UX ugezweho. Nzi kubaka inyubako za cloud zizewe, imbuga za internet zunze ubumwe kandi zihuta cyane, hamwe na frameworks zikora neza cyane zinoze."
  },
  "about.xp": { en: "Years Experience", rw: "Imyaka y'Ubunararibonye" },
  "about.done": { en: "Completed Projects", rw: "Imishinga Yarangiye" },
  "about.clients": { en: "Global Clients", rw: "Abakiriya ku Isi" },
  "about.commits": { en: "Code Commits", rw: "Gushyira Code kuri Git" },
  
  "about.card1.title": { en: "High Performance Core", rw: "Imikorere ihamye yo ku rwego rwo hejuru" },
  "about.card1.text": {
    en: "Applying advanced code splitting, lazy loading, and hardware-accelerated transforms to achieve flawless lighthouse scores. Every interaction transitions smoothly.",
    rw: "Gukoresha tekinoloji zigezweho zo gucamo code, lazy loading, hamwe no kwihutisha ibishushanyo hifashishijwe hardware kugira ngo website yacu yihute cyane kandi inoze."
  },
  "about.card2.title": { en: "Staggering UX Detail", rw: "Ubwitonzi buhanitse mu gushushanya" },
  "about.card2.text": {
    en: "Taking design cues from legends (like Stripe and Apple). Generous gaps, comfortable margins, precise colors, and dynamic feedback.",
    rw: "Gukurikiza icyerekezo cy'ibigo bikomeye cyane ku isi (nka Stripe na Apple). Espase zihagije, amabara meza cyane anyura ijisho, no kuguha ibisubizo byoroshye mu gukoresha imbuga."
  },
  "about.card3.title": { en: "Bulletproof Clean Code", rw: "Code Isukuye Kandi Ifite Umutekano" },
  "about.card3.text": {
    en: "TypeScript type safety, modular structures, decoupled states, and strict linting. Built for scalability first.",
    rw: "Kugira umutekano wa code hifashishijwe TypeScript, porogaramu zigabanyijemo ibice binini n'ibitoya byumvikana neza, kandi byubakiwe gukura mu buryo bworoshye."
  },

  // Services Section
  "services.badge": { en: "EXPERT CAPABILITIES", rw: "UBUYOBOZI CYANE MU SERIVISI" },
  "services.title": { en: "Professional Engineering Services Offered", rw: "Serivisi z'Ubunyamwuga n'Ibyo Ngushoboza" },
  "services.desc": {
    en: "Providing premium backend scalability, beautifully structured client systems, and beautiful interactive flow designed for the modern web.",
    rw: "Ngutegurira imiryango ya internet ikora neza batayibangamiye, codes ziteguye neza, hamwe n'itumanaho ryoroshye ry'imbuga za internet zizewe muri iki gihe."
  },

  // Skills Section
  "skills.badge": { en: "TECHNICAL SPECIALTIES", rw: "IBYO NZOBEREYEMO CYANE" },
  "skills.title": { en: "Advanced Technology Toolkit", rw: "Ibikoresho bya Tekinoroji Byisumbuye n'Intwaro Ntwaza" },
  "skills.desc": {
    en: "Continuous learning and professional implementation of full-stack patterns to deliver robust production-grade products.",
    rw: "Umuhati wo guhora niga no gushyira mu bikorwa uburyo bwose bwa full-stack bunoze ngo nkugezeho ibicuruzwa bikomeye kandi bishya mbere y'abandi."
  },

  // Projects Section
  "projects.badge": { en: "SELECTED PORTFOLIO", rw: "IMISHINGA NATORANYIJE" },
  "projects.title": { en: "Recent Digital Creations", rw: "Ibikorwa Ngororangingo Bioshyya mbona" },
  "projects.desc": {
    en: "Explore a handpicked list of enterprise-grade cloud systems, interactive patient charts, and custom bus ticketing networks designed for impact.",
    rw: "Shakisha urutonde rw'imishinga ihamye ya cloud, amakarita ya kiganga meza anyura ijisho, hamwe n'imbuga bafatanyije zo gukoresha ku mateka y'ingendo."
  },
  "projects.featured": { en: "Featured", rw: "Indashyikirwa" },
  "projects.demo": { en: "Live Demo", rw: "Igerageze Imbonankubone" },
  "projects.source": { en: "Source Code", rw: "Code-Inkomoko" },

  // Experience Section
  "experience.badge": { en: "WORK HISTORY", rw: "AMATEKA Y'AKAZI ANDI" },
  "experience.title": { en: "Professional Career Path", rw: "Inzira y'Akazi nk'Umunyamwuga" },
  "experience.desc": {
    en: "Over 6 years of architecting scalable systems, leading core optimization initiatives, and building elegant web portfolios.",
    rw: "Imyaka irenga 6 yo gukora inyubako z'ikoranabuhanga zizewe ku isi, kuyobora imiryango minini iterambere runaka, no kubaka amaportfoliyo meza adasanzwe."
  },

  // Testimonials Section
  "testimonials.badge": { en: "WORLDWIDE RECOMMENDATIONS", rw: "UBUHAMYA KU ISI YOSE" },
  "testimonials.title": { en: "What Client Leaders Say", rw: "Ibyo Abayobozi n'Abakiriya Bavuga ku Bikorwa Byanjye" },
  "testimonials.desc": {
    en: "Real partnerships built on exceptional design polish, performant communication, and highly predictable systems delivery.",
    rw: "Ubufatanye nyabwo bushingiye ku gashushanyo gahebuje, itumanaho ryoroshye n'umuvuduko, hamwe no kugeza ku mukiriya imishinga ikoze neza cyane."
  },

  // Family Section
  "family.badge": { en: "THE HEART OF EAGLE ART", rw: "UMUTIMA WA EAGLE ART" },
  "family.title": { en: "My Beloved Family", rw: "Umuryango Wanjye Nkundwa Cyane" },
  "family.desc": {
    en: "Success is never built alone. Meet the foundational pillars of love, support, strength, and joy who power NDAYISHIMIYE Jean de Dieu's creative tech landscape every day.",
    rw: "Intsinzi ntigerwaho uli wenyine. Menya inkingi za mwamba zigushyigikiye mu rukundo, imbaraga, n'ibyishimo bihora bitera imbaraga urugendo rwa tekinoloji rwa NDAYISHIMIYE Jean de Dieu buri munsi."
  },
  "family.quote": {
    en: "\"Family is not an important thing. It's everything. Through the waves and stars, we rise together as one.\"",
    rw: "\"Umuryango si ikintu gito cyangwa cy'ingenzi gusa. Ni byose ryamye. Mu biraba no mu nkoranyamitsi, tuzamukira hamwe nka rimwe.\""
  },
  "family.quoteSub": {
    en: "Designed with Love by EAGLE ART",
    rw: "Byashushanyijwe n'Urukundo rwinshi na EAGLE ART"
  },

  // Location Section
  "location.badge": { en: "LOCAL BASE", rw: "ICHICARO NYAMUKURU" },
  "location.title": { en: "Based in Kigali, Rwanda", rw: "Nkorera mu Mujyi wa Kigali, u Rwanda" },
  "location.desc": {
    en: "Operating from the innovative heart of East Africa, building cloud architectures and custom corporate websites for a global customer base.",
    rw: "Mbarizwa mu mutima w'ikoranabuhanga n'udushya rwa Afurika y'Iburasirazuba, mfatanya kubaka inyubako za cloud n'imbuga z'ibigo zizewe ku isi."
  },

  // Contact Section
  "contact.badge": { en: "LET'S WORK TOGETHER", rw: "DUFATANYE KUBANA INTANGO" },
  "contact.title": { en: "Establish Connection", rw: "Twandikire Tuvugane Uyu Munsi" },
  "contact.desc": {
    en: "Got an ambitious project? Need a robust developer? Fill out the secure form below or reach out directly on telegram and social media. Let's build elite things.",
    rw: "Ufite umushinga ukomeye ukeneye kubaka? Cyangwa ukeneye umukorera w'inzobere mu gushushanya na code? Uzuzanya ifomu ifite umutekano munsi cyangwa utwandikire kuri WhatsApp. Duhuze ingufu!"
  },
  "contact.form.name": { en: "First & Last Name", rw: "Izina Ryawe Ryose" },
  "contact.form.email": { en: "Email Address", rw: "Imeli Yawe" },
  "contact.form.subject": { en: "Project Subject / Goal", rw: "Intego y'Umushinga / Umutwe" },
  "contact.form.message": { en: "Your Message", rw: "Ubutumwa Bwawe" },
  "contact.form.send": { en: "Transmit Transmission", rw: "Ohereza Ubutumwa Neza" },
  "contact.form.sending": { en: "Transmitting...", rw: "Buri Koherezwa..." },
  "contact.form.success": { en: "Transmission successful! We will communicate soon.", rw: "Ubutumwa bwoherejwe neza cyane! Turabandikira bidatinze." },
  "contact.card1.title": { en: "Digital Postbox", rw: "Aderese y'Imeli" },
  "contact.card2.title": { en: "Inquiries & WhatsApp", rw: "Ibibazo & WhatsApp" },
  "contact.card2.chat": { en: "WhatsApp Chat", rw: "Kwandikira Kuri WhatsApp" },
  "contact.card3.title": { en: "Standard Work Hours", rw: "Igihe cy'Akazi Gikora" },
  "contact.card3.text": { en: "Mon - Fri | 08:00 - 18:00 (Kigali Time)", rw: "Kuva Kuwa Mbere - Kuwa Gatanu | 08:00 - 18:00" },
  "contact.card4.title": { en: "Social Connect", rw: "Imbuga Nkoranyambaga" },

  // Footer
  "footer.connect": { en: "Let’s connect and build something amazing 🚀", rw: "Reka duhuze ingufu twubake ikintu gitangaje cyane 🚀" },
  "footer.copyright": {
    en: "Designed and Developed by",
    rw: "Byashushanyijwe kandi Byitetswe na"
  },
  "footer.toTop": { en: "To Top", rw: "Gusubira Hejuru" },

  // Float
  "float.chat": { en: "Chat with EAGLE ART 🚀", rw: "Vugana na EAGLE ART 🚀" }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("portfolio-language");
      if (stored === "en" || stored === "rw") return stored;
    }
    return "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio-language", lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "rw" : "en");
  };

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || translation["en"] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
