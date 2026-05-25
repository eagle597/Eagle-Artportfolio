/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Heart, Sparkles, Users, Star, Smile, Award } from "lucide-react";

// Family Avatars Import
// @ts-ignore
import momAvatar from "../assets/images/mom_febronie_avatar_1779694960878.png";
// @ts-ignore
import brotherAvatar from "../assets/images/brother_batiste_avatar_1779694982707.png";
// @ts-ignore
import solangeAvatar from "../assets/images/sister_solange_avatar_1779695004662.png";
// @ts-ignore
import thereseAvatar from "../assets/images/sister_therese_avatar_1779695024508.png";
// @ts-ignore
import chadrackAvatar from "../assets/images/brother_chadrack_avatar_1779695045309.png";

interface FamilyMember {
  name: string;
  role: string;
  relation: string;
  bio: string;
  avatar: string;
  color: string;
  icon: React.ReactNode;
}

export const Family: React.FC = () => {
  const members: FamilyMember[] = [
    {
      name: "YANKURIJE Febronie",
      role: "Matriarch & Pillar of Strength",
      relation: "My Beloved Mother",
      bio: "The foundation of our wisdom, courage, and unconditional love. Her grace and guidance inspire absolute dedication in everything we create.",
      avatar: momAvatar,
      color: "from-amber-500/10 via-amber-600/5 to-amber-500/20 border-amber-500/30 text-amber-500 dark:text-amber-400 dark:border-amber-500/20",
      icon: <Heart className="h-5 w-5" />
    },
    {
      name: "NDAGIJE IMANA Jean Batiste",
      role: "Pillar of Support & Tech Ally",
      relation: "My Brother",
      bio: "A source of strength, strategic logic, and sisterhood-brotherhood cohesion. Always standing tall with dynamic energy and modern vision.",
      avatar: brotherAvatar,
      color: "from-blue-500/10 via-indigo-600/5 to-blue-500/20 border-blue-500/30 text-blue-500 dark:text-blue-400 dark:border-blue-500/20",
      icon: <Award className="h-5 w-5" />
    },
    {
      name: "IRADUKUNDA Solange",
      role: "Compassionate Advisor & Mentor",
      relation: "My Big Sister",
      bio: "An elegant beacon of support and joyful wisdom. She guides our decisions with patience and provides endless light to our family group.",
      avatar: solangeAvatar,
      color: "from-purple-500/10 via-pink-600/5 to-purple-500/20 border-purple-500/30 text-purple-500 dark:text-purple-400 dark:border-purple-500/20",
      icon: <Star className="h-5 w-5" />
    },
    {
      name: "NIYIGENA Therese",
      role: "Joyful Light & Creative Spirit",
      relation: "My Small Sister",
      bio: "Bringing pure joy, soft laughter, and creative light into our hearts. A brilliant spark whose future shines as bright as her wonderful smile.",
      avatar: thereseAvatar,
      color: "from-pink-500/10 via-fuchsia-600/5 to-pink-500/20 border-pink-500/30 text-pink-500 dark:text-pink-400 dark:border-pink-500/20",
      icon: <Smile className="h-5 w-5" />
    },
    {
      name: "NTWARI Chadrack",
      role: "Aesthetic Core & Future Explorer",
      relation: "My Little Brother (Petit)",
      bio: "Energetic, playful, and incredibly smart. Filled with curiosity, courage, and high potential to design amazing pathways for the future.",
      avatar: chadrackAvatar,
      color: "from-emerald-500/10 via-emerald-600/5 to-emerald-500/20 border-emerald-500/30 text-emerald-500 dark:text-emerald-400 dark:border-emerald-500/20",
      icon: <Sparkles className="h-5 w-5" />
    }
  ];

  return (
    <section id="family" className="py-24 bg-transparent transition-colors duration-300 relative overflow-hidden">
      {/* Background soft lighting blobs */}
      <div className="absolute top-[30%] -right-[15%] w-[400px] h-[400px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] -left-[10%] w-[350px] h-[350px] rounded-full bg-purple-500/5 dark:bg-purple-600/5 blur-[110px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.div
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Users size={12} />
            <span>THE HEART OF EAGLE ART</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-heading font-black tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Beloved Family
          </motion.h2>

          <motion.p
            className="text-gray-500 dark:text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Success is never built alone. Meet the foundational pillars of love, support, strength, and joy who power NDAYISHIMIYE Jean de Dieu's creative tech landscape every day.
          </motion.p>
        </div>

        {/* Dynamic Bento Box / Flex Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {members.map((member, idx) => (
            <motion.div
              key={member.name}
              className={`flex flex-col rounded-3xl p-6 glass-panel border bg-gradient-to-b ${member.color} shadow-sm hover:shadow-xl transition-all duration-300 relative group select-none`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Premium Glow Highlight Ring */}
              <div className="absolute inset-0 rounded-3xl bg-transparent border border-transparent group-hover:border-indigo-500/30 dark:group-hover:border-indigo-400/20 transition-all duration-300 pointer-events-none" />

              {/* Card Meta Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/5 text-gray-700 dark:text-gray-300">
                  {member.relation}
                </span>
                <div className="p-2 rounded-xl bg-white/60 dark:bg-slate-900/60 shadow-sm border border-black/5 dark:border-white/5">
                  {member.icon}
                </div>
              </div>

              {/* Avatar Circle Frame with Inner Shadow */}
              <div className="flex justify-center mb-6">
                <div className="relative h-28 w-28 rounded-full overflow-hidden border-2 border-slate-200/50 dark:border-white/10 shadow-md group-hover:scale-105 transition-transform duration-300 bg-slate-900">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Glass tint element */}
                  <div className="absolute inset-0 bg-transparent group-hover:bg-indigo-500/10 transition-colors duration-300 pointer-events-none" />
                </div>
              </div>

              {/* Text content details */}
              <div className="text-center space-y-2 mt-auto">
                <h3 className="text-lg font-heading font-black tracking-tight text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold tracking-wide text-indigo-600 dark:text-indigo-400 font-mono uppercase">
                  {member.role}
                </p>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-normal pt-2">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Accent Quote Card */}
        <motion.div
          className="mt-16 text-center max-w-2xl mx-auto p-6 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Heart indicator in corner */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-500/5 scale-[3.5] pointer-events-none">
            <Heart size={44} className="fill-current" />
          </div>

          <p className="text-sm font-medium tracking-wide text-indigo-800 dark:text-indigo-300 font-serif italic text-center">
            "Family is not an important thing. It's everything. Through the waves and stars, we rise together as one."
          </p>
          <span className="block mt-2 text-[10px] font-mono font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            Designed with Love by EAGLE ART
          </span>
        </motion.div>
      </div>
    </section>
  );
};
