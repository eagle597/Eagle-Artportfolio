/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { SOCIAL_LINKS } from "../data";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, AlertCircle, Sparkles, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const tempErrors: ValidationErrors = {};
    if (!form.name.trim()) tempErrors.name = "Full name is required";
    
    if (!form.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      tempErrors.email = "Please input a valid email coordinate";
    }
    
    if (!form.message.trim()) {
      tempErrors.message = "Message message cannot be blank";
    } else if (form.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API ping latency
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setForm({ name: "", email: "", message: "" }); // Clean form
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent transition-colors duration-300 relative">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.div
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles size={12} />
            <span>GET IN TOUCH</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Initiate Consultation
          </motion.h2>
          <motion.p
            className="text-gray-500 dark:text-gray-400 max-w-lg text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Have a system to construct, scale, or overhaul? Send details to explore strategies.
          </motion.p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-8 max-w-5xl mx-auto">
          
          {/* Left Column Contacts Info Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Card 1: Email */}
              <motion.div
                className="p-5 rounded-xl glass-panel text-left flex items-start space-x-4 border border-slate-200/30 dark:border-white/5 interactive-hover select-none"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-450">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-[#111827] dark:text-white text-sm">
                    Direct Email
                  </h4>
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="text-sm font-mono text-indigo-600 dark:text-indigo-400 hover:underline mt-1 block"
                  >
                    {SOCIAL_LINKS.email}
                  </a>
                </div>
              </motion.div>

               {/* Card 2: Phone & WhatsApp */}
              <motion.div
                className="p-5 rounded-xl glass-panel text-left flex items-start space-x-4 border border-slate-200/30 dark:border-white/5 interactive-hover select-none"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-[#111827] dark:text-white text-sm">
                    Inquiries & WhatsApp
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-[#a1a1aa] mt-0.5 font-mono">
                    +250 793 708 340
                  </p>
                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 text-[10px] font-bold tracking-wide uppercase rounded-md mt-2 transition-all cursor-pointer"
                  >
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </motion.div>

              {/* Card 3: Location */}
              <motion.div
                className="p-5 rounded-xl glass-panel text-left flex items-start space-x-4 border border-slate-200/30 dark:border-white/5 interactive-hover select-none"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="p-3 rounded-lg bg-pink-500/10 text-pink-600 dark:text-pink-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-[#111827] dark:text-white text-sm">
                    Local HQ Location
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Kigali City, Rwanda
                  </p>
                </div>
              </motion.div>

              {/* Card 4: Social Connect */}
              <motion.div
                className="p-5 rounded-xl glass-panel text-left flex items-start space-x-4 border border-slate-200/30 dark:border-white/5 interactive-hover select-none"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-[#111827] dark:text-white text-sm">
                    Social Connect
                  </h4>
                  <div className="flex items-center space-x-3 mt-2.5">
                    {/* GitHub Connection */}
                    <div className="relative group/tool">
                      <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg border border-slate-200 dark:border-white/5 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-[#6366f1] hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] hover:scale-110 bg-white/50 dark:bg-white/5 flex items-center justify-center transition-all cursor-pointer"
                        title="Visit my GitHub"
                      >
                        <Github size={16} />
                      </a>
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-0.5 text-[9px] font-mono text-white bg-slate-900 rounded opacity-0 group-hover/tool:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/5">
                        Visit my GitHub
                      </span>
                    </div>

                    {/* LinkedIn Connection */}
                    <div className="relative group/tool">
                      <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg border border-slate-200 dark:border-white/5 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 hover:scale-110 bg-white/50 dark:bg-white/5 flex items-center justify-center transition-all cursor-pointer"
                        title="Connect on LinkedIn"
                      >
                        <Linkedin size={16} />
                      </a>
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-0.5 text-[9px] font-mono text-white bg-slate-900 rounded opacity-0 group-hover/tool:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/5">
                        Connect on LinkedIn
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Google Maps embed Frame */}
            <motion.div
              className="rounded-2xl overflow-hidden border border-slate-200/30 dark:border-white/5 relative shadow-inner overflow-hidden flex-grow min-h-[160px] max-h-[220px]"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {/* Google Maps Embed iframe styled cleanly with grayscale theme */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127599.551694291!2d30.015093740263694!3d-1.94411681289658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca425b5c3e7f3%3A0x811005a76906af5e!2sKigali!5e0!3m2!1sen!2srw!4v1700000000000!5m2!1sen!2srw"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.08) contrast(1.1) opacity(0.85)" }}
                allowFullScreen={false}
                loading="lazy"
                title="Office Location Map Address"
                id="office-map-address"
              />
            </motion.div>
          </div>

          {/* Right Column Form Block */}
          <div className="lg:col-span-7">
            <motion.form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl glass-panel relative border border-slate-200/30 dark:border-white/5 flex flex-col justify-between h-full space-y-6"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <div className="space-y-4">
                {/* Submit State inline alert displays */}
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      className="p-4 rounded-xl bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 text-sm flex items-start space-x-3 text-left"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <CheckCircle size={18} className="mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-bold">Message Dispatched!</span> Thank you for reaching out. EAGLE ART will respond within 24 working hours.
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      className="p-4 rounded-xl bg-rose-500/10 text-rose-700 dark:text-rose-450 border border-rose-500/20 text-sm flex items-start space-x-3 text-left"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-bold">Dispatch Error.</span> Failed to transmit message. Please confirm coordinates and retry.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Name INPUT */}
                <div className="flex flex-col space-y-1.5 text-left">
                  <label htmlFor="name" className="text-xs font-semibold tracking-wider font-mono text-gray-500 dark:text-gray-400 uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="E.g. Richard Hendricks"
                    className={`w-full px-4 py-3 rounded-xl border border-slate-200/40 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-md text-gray-900 dark:text-white placeholder-gray-450 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ${
                      errors.name ? "border-rose-500 focus:ring-rose-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <span className="text-xs font-semibold text-rose-500 pl-1">{errors.name}</span>
                  )}
                </div>

                {/* EMAIL INPUT */}
                <div className="flex flex-col space-y-1.5 text-left">
                  <label htmlFor="email" className="text-xs font-semibold tracking-wider font-mono text-gray-500 dark:text-gray-400 uppercase">
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="richard@piedpiper.io"
                    className={`w-full px-4 py-3 rounded-xl border border-slate-200/40 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-md text-gray-900 dark:text-white placeholder-gray-450 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ${
                      errors.email ? "border-rose-500 focus:ring-rose-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs font-semibold text-rose-500 pl-1">{errors.email}</span>
                  )}
                </div>

                {/* MESSAGE TEXTAREA */}
                <div className="flex flex-col space-y-1.5 text-left">
                  <label htmlFor="message" className="text-xs font-semibold tracking-wider font-mono text-gray-500 dark:text-gray-400 uppercase">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe specific structural requirements or goals..."
                    className={`w-full px-4 py-3 rounded-xl border border-slate-200/40 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-md text-gray-900 dark:text-white placeholder-gray-450 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none ${
                      errors.message ? "border-rose-500 focus:ring-rose-500" : ""
                    }`}
                  />
                  {errors.message && (
                    <span className="text-xs font-semibold text-rose-500 pl-1">{errors.message}</span>
                  )}
                </div>
              </div>

              {/* Submit CTA button trigger */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl flex items-center justify-center space-x-2 shadow-lg cursor-pointer hover:scale-[1.02] active:scale-98 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm select-none"
              >
                {isSubmitting ? (
                  <>
                    <Clock className="animate-spin" size={18} />
                    <span>Transmitting Dispatch...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>
            </motion.form>
          </div>

        </div>
      </div>
    </section>
  );
};
