/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: "Frontend" | "Backend" | "Tools & Devops";
  iconName: string; // Dynamic icon rendering helper
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
  image: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number; // 1-5
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}
