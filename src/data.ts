/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Skill, Project, Experience, Service, Testimonial, Stat } from "./types";

export const DEV_NAME = "NDAYISHIMIYE Jean de Dieu";
export const DEV_TITLE = "Full Stack Software Developer & Modern UI/UX Engineer";
export const DEV_BIO = "I am NDAYISHIMIYE Jean de Dieu (EAGLE ART), a Full Stack Software Developer and modern UI/UX Engineer specializing in building premium cloud architectures, immersive interactive web applications, and pixel-perfect high-performance frameworks.";

export const SOCIAL_LINKS = {
  github: "https://github.com/eagle597",
  linkedin: "https://www.linkedin.com/messaging/",
  twitter: "https://twitter.com/eagleart",
  whatsapp: "https://wa.me/250793708340?text=Hello%20EAGLE%20ART%2C%20I%20would%20like%20to%20work%20with%20you.",
  email: "eagleart46@gmail.com"
};

export const SERVICES: Service[] = [
  {
    title: "Frontend Development",
    description: "Crafting visually outstanding, highly functional React interfaces with fluid, GPU-accelerated motion paths and precise responsive typography.",
    iconName: "MonitorAndLayout"
  },
  {
    title: "Backend Development",
    description: "Designing durable, secure distributed server architectures with Node.js and Express to manage complex backend workflows.",
    iconName: "Server"
  },
  {
    title: "Full Stack Development",
    description: "Seamless integration of interactive frontends with scalable databases, reliable caching layers, and performant server infrastructures.",
    iconName: "Cpu"
  },
  {
    title: "UI/UX Design",
    description: "Creating premium layouts inspired by modern SaaS leaderboards and bento grids, focusing heavily on negative space and visual hierarchy.",
    iconName: "Figma"
  },
  {
    title: "API Development",
    description: "Architecting clean, type-safe RESTful and GraphQL APIs with comprehensive security policies, rate-limiting, and detailed validation.",
    iconName: "Webhook"
  },
  {
    title: "Database Design",
    description: "Designing robust normalized schemas and efficient indexes for SQL and NoSQL targets to achieve sub-millisecond query execution.",
    iconName: "Database"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "AI Chat Application",
    description: "An advanced real-time AI assistant interface with streaming responses, conversation branch history, code highlighting, and customized markdown renders, powered by Gemini LLM integration.",
    tech: ["TypeScript", "React.js", "Tailwind CSS", "Node.js", "Express", "Gemini API"],
    demoUrl: "https://demo.example.com/ai-chat",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/seed/aichat2026/800/600",
    featured: true
  },
  {
    id: "proj-2",
    title: "Hospital Management System",
    description: "A highly secure electronic health record (EHR) portal incorporating animated interactive patient dashboards, real-time appointment schedulers, secure messaging channels, and billing engines.",
    tech: ["React.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Chart.js"],
    demoUrl: "https://demo.example.com/hospital",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/seed/medicalcenter/800/600",
    featured: true
  },
  {
    id: "proj-3",
    title: "SaaS Streaming Platform",
    description: "A high-performance media delivery application utilizing HLS stream segmentation, content authorization checkpoints, customized custom video controls, and user analytics.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "AWS CloudFront"],
    demoUrl: "https://demo.example.com/streaming",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/seed/streamingvox/800/600",
    featured: true
  },
  {
    id: "proj-4",
    title: "Universal Bus Booking System",
    description: "A comprehensive transit network solution featuring physical seat reservation charts, interactive regional maps for tracking, dynamic discount tiers, and direct payment gateway webhooks.",
    tech: ["React.js", "PHP", "Tailwind CSS", "MySQL", "Google Maps API", "Stripe"],
    demoUrl: "https://demo.example.com/bus-booking",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/seed/busbooking33/800/600",
    featured: false
  },
  {
    id: "proj-5",
    title: "Decentralized Social Media App",
    description: "A responsive next-generation community board offering microblogging options, decentralized state synchronization, lazy image lists, dark/light mode toggles, and rich media attachment feeds.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "WebSockets"],
    demoUrl: "https://demo.example.com/social-app",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/seed/socialmed22/800/600",
    featured: false
  }
];

export const SKILLS: Skill[] = [
  { name: "React.js", level: 95, category: "Frontend", iconName: "Atom" },
  { name: "TypeScript", level: 92, category: "Frontend", iconName: "Code" },
  { name: "JavaScript", level: 98, category: "Frontend", iconName: "FileJson" },
  { name: "Tailwind CSS", level: 96, category: "Frontend", iconName: "Palette" },
  
  { name: "Node.js", level: 94, category: "Backend", iconName: "Compass" },
  { name: "Express.js", level: 90, category: "Backend", iconName: "Cpu" },
  { name: "PHP", level: 82, category: "Backend", iconName: "FileCode" },
  { name: "API Integration", level: 95, category: "Backend", iconName: "Link" },
  
  { name: "MongoDB", level: 88, category: "Tools & Devops", iconName: "Database" },
  { name: "MySQL", level: 86, category: "Tools & Devops", iconName: "Database" },
  { name: "Git & GitHub", level: 90, category: "Tools & Devops", iconName: "GitBranch" }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Lead Software Architect",
    company: "StripeWave Technologies",
    duration: "2024 - Present",
    description: [
      "Architected real-time dashboard microfrontends powering analytics for over 45k monthly active merchants.",
      "Re-engineered data synchronization mechanics resulting in an 85% drop in WebSocket server latency.",
      "Championed the developer tooling initiative, establishing rigid TypeScript templates and CSS guidelines."
    ]
  },
  {
    id: "exp-2",
    role: "Senior Full-Stack Engineer",
    company: "ApexLabs Studio",
    duration: "2022 - 2024",
    description: [
      "Engineered an dynamic AI-driven customer profiling engine syncing with multi-layered Node.js task queues.",
      "Migrated a massive legacy PHP system to a unified headless architecture using React, MongoDB, and Tailwind CSS.",
      "Scaled application servers in AWS to comfortably sustain unexpected surges of 120k peak concurrent connections."
    ]
  },
  {
    id: "exp-3",
    role: "Full-Stack Developer",
    company: "CloudFlow Systems",
    duration: "2020 - 2022",
    description: [
      "Designed secure database schemas in MySQL alongside Express endpoints to handle core platform payment triggers.",
      "Implemented beautiful fluid transitions and Apple-inspired motion behaviors using interactive React animations.",
      "Collaborated on visual systems styling inside strict designer-approved guidelines, ensuring flawless responsive metrics."
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Elena Rostova",
    role: "VP of Product",
    company: "SaaSify Inc.",
    image: "https://picsum.photos/seed/elena/150/150",
    text: "Working with EAGLE ART was a revelation. He didn't just write code; he collaborated on complex structural decisions in architecture, taking total ownership of the final interface and creating something that looks and operates in an elite league of excellence.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Devon Carter",
    role: "Co-Founder",
    company: "MediFlow Systems",
    image: "https://picsum.photos/seed/devon/150/150",
    text: "EAGLE ART rebuilt our flagship EHR product dashboard from scratch. His selection of React.js, Tailwind, combined with ultra-responsive UX paths, gave our systems the exact premium aesthetic and seamless fluidity we needed to close our Series A.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Yuki Tanaka",
    role: "Technical Operations Director",
    company: "TransRoute Global",
    image: "https://picsum.photos/seed/yuki/150/150",
    text: "The speed of his backend system structures is astonishing. Our bus booking transaction flow went from clunky and failure-prone to flawless under his MongoDB/TypeScript queries. An incredible full-stack talent.",
    rating: 5
  }
];

export const STATS: Stat[] = [
  { label: "Years Experience", value: 6, suffix: "+" },
  { label: "Completed Projects", value: 38, suffix: "" },
  { label: "Global Clients", value: 15, suffix: "+" },
  { label: "Code Commits", value: 4, suffix: "k+" }
];
