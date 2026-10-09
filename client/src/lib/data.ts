export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  link: string;
  repo: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: "spendora",
    title: "Spendora",
    category: "Full Stack",
    description:
      "A professional full-stack finance manager with React 19 and Node.js. Features real-time analytics, automated budgeting, and professional PDF report generation.",
    fullDescription:
      "Spendora is a professional-grade full-stack financial management application built with React 19, Node.js, and MongoDB. It offers users a secure and intuitive platform to manage their personal finances with precision. Key features include a real-time interactive dashboard with multiple visualization options (Bar, Line, and Doughnut charts via Recharts and Chart.js), comprehensive CRUD operations for income and expense records, and advanced budget tracking with recurring daily, weekly, or monthly options. The application prioritizes security with JWT-based authentication and robust backend protection including rate limiting and input sanitization. Users can generate professional PDF reports with embedded charts, manage profiles with Cloudinary-backed image uploads, and enjoy a seamless responsive experience in both dark and light modes.",
    technologies: [
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Recharts",
      "Chart.js",
      "JWT",
      "Cloudinary",
      "jsPDF",
      "ExcelJS",
      "Framer Motion",
      "Vite",
    ],
    link: "https://spendora-finance.vercel.app/login",
    repo: "https://github.com/ram02krishna/spendora-expense-tracker",
    featured: true,
  },
  {
    id: "iiitn-vms",
    title: "IIIT Nagpur VMS",
    category: "Full Stack",
    description:
      "A web-based campus access and security management system for IIIT Nagpur unifying visitor registration, 10-floor hostel census, 09:30 PM curfew passes, and optical gate QR verification.",
    fullDescription:
      "IIIT Nagpur Visitor Management System (VMS) is a comprehensive campus access and security management platform built for the Indian Institute of Information Technology, Nagpur. Built with React 18, TypeScript, Vite, and Tailwind CSS on the frontend, and Node.js, Express, Prisma ORM, and PostgreSQL on the backend, the platform unifies visitor registration, hostel resident outing passes with strict 09:30 PM night curfew tracking, optical gate QR verification, a 10-floor hostel census matrix (Hostel Block A), vehicle parking passes, and automated transactional emails via Resend. The system enforces strict Role-Based Access Control (RBAC) across 6 roles (Admin, Chief Warden, Faculty/Host, Security Guard, Student, and Visitor). It features a touchscreen reception kiosk with webcam badge photo capture, dual-checkpoint optical QR scanning (Main Gate and Hostel Gate), real-time campus capacity telemetry (1,000 safe limit), overstay detection with security escort dispatch, and a campus-wide SOS broadcast beacon.",
    technologies: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Zustand",
      "Resend API",
      "Cloudinary",
      "HTML5 QR Code",
      "PWA",
      "JWT",
      "React Hook Form",
    ],
    link: "https://iiitn-vms.vercel.app/",
    repo: "https://github.com/ram02krishna/Visitor-Management-System",
    featured: true,
  },
  {
    id: "quickconnect",
    title: "QuickConnect",
    category: "Full Stack",
    description:
      "A high-performance real-time communication platform featuring 1-on-1 and group chats, WebRTC audio/video calls, rich media sharing, and Upstash Redis presence tracking.",
    fullDescription:
      "QuickConnect is an enterprise-ready real-time communication web application designed for seamless instant messaging and high-definition voice/video calling. Built using Next.js 15 (App Router), React 19, Tailwind CSS v4, Express 5, Prisma ORM with PostgreSQL, Upstash Redis, and Socket.io, QuickConnect provides sub-millisecond message delivery, adaptive WebRTC mesh calls, rich media sharing, and end-to-end security workflows. Key features include 1-on-1 and group chats, real-time delivery and read receipts (single/double checkmarks), typing indicators, high-performance virtualized scrolling with react-virtuoso, floating Picture-in-Picture (PiP) call widgets, in-browser voice note recording with interactive waveforms and speed controls (1x, 1.5x, 2x), direct Cloudinary uploads with client-side compression, state-of-the-art Argon2id password hashing, and Upstash Redis-backed presence tracking with automated disconnect reconciliation.",
    technologies: [
      "Next.js 15",
      "React 19",
      "Socket.io",
      "WebRTC",
      "Express 5",
      "Prisma",
      "PostgreSQL",
      "Upstash Redis",
      "Tailwind CSS v4",
      "Zustand 5",
      "TanStack Query v5",
      "Argon2id",
      "Resend",
      "Cloudinary",
      "Radix UI",
      "React Virtuoso",
    ],
    link: "https://quick-connect-chatapp.vercel.app/",
    repo: "https://github.com/ram02krishna/QuickConnect",
    featured: true,
  },
  {
    id: "nanoURL",
    title: "nanoURL",
    category: "Full Stack",
    description:
      "A high-performance URL shortening platform featuring advanced analytics, password-protected links, and secure OTP-based authentication.",
    fullDescription:
      "nanoURL is a sleek, full-stack URL shortening platform built for speed, security, and simplicity. It offers a comprehensive suite of features including instant link generation, detailed click analytics (tracking IP, browser, OS, and device data), and advanced security options like password-protected links and custom expiration dates. The platform ensures secure user onboarding via Email OTP verification and provides a unique free-tier experience with device-aware limits. Architected with a React/Vite frontend and a high-performance Node.js/PostgreSQL backend using Drizzle ORM, nanoURL delivers lightning-fast redirections and a polished, responsive dashboard with adaptive theming, instant QR code generation, and fluid Framer Motion animations.",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Zod",
      "JWT",
      "Email OTP",
      "Tailwind CSS",
      "Framer Motion",
      "Docker",
      "Vercel",
    ],
    link: "https://getnanourl.vercel.app/",
    repo: "https://github.com/ram02krishna/nano-url",
    featured: true,
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML5 / CSS3",
      "JavaScript / TypeScript",
      "React / Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication (JWT, OAuth)",
      "Drizzle ORM",
      "Supabase",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Problem Solving",
    skills: [
      "C++",
      "Data Structures",
      "Algorithms",
      "STL",
      "Sliding Window",
      "Graph Algorithms",
      "Dynamic Programming",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git & GitHub",
      "Docker",
      "Linux Fundamentals",
      "Postman",
      "VS Code",
      "Vercel",
    ],
  },
  {
    title: "Computer Science",
    skills: ["Operating Systems", "Computer Networks", "DBMS", "OOP"],
  },
];

export const codingProfiles = [
  {
    title: "Codeforces",
    link: "https://codeforces.com/profile/krishnarammhd",
  },
  {
    title: "LeetCode",
    link: "https://leetcode.com/u/ram_02_Krishna/",
  },
  {
    title: "GitHub",
    link: "https://github.com/ram02krishna",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    year: "Present",
    role: "Open to SDE & Web Development Roles",
    company: "Full Stack Development · Software Engineering",
    description:
      "I've spent the past year building real projects across the full stack — from authentication flows and REST APIs to responsive UIs and database design. Now I'm looking for a team where I can do meaningful work, grow alongside smart people, and ship things that actually matter.",
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find(
    (p) =>
      p.id === id ||
      (id === "orbix" && p.id === "quickconnect") ||
      (id === "visitor-management" && p.id === "iiitn-vms")
  );
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

import { Code2, Palette, Rocket, Smartphone } from "lucide-react";

export const services = [
  {
    title: "Frontend Development",
    description:
      "Crafting responsive, accessible UIs with React and TypeScript. I care about component architecture, clean state management, and the kind of polish users notice even when they can't name it.",
    icon: Code2,
  },
  {
    title: "Backend & APIs",
    description:
      "Building reliable REST APIs with Node.js and Express, handling authentication, database design, and the backend logic that keeps everything running smoothly under the hood.",
    icon: Palette,
  },
  {
    title: "Performance & SEO",
    description:
      "Improving load times, Core Web Vitals, and search visibility. Fast pages aren't a luxury — they're the baseline for a product people actually want to use.",
    icon: Rocket,
  },
  {
    title: "Full Stack Projects",
    description:
      "Taking ideas from concept to deployed product — handling the frontend, backend, database, and deployment pipeline as a single cohesive system rather than a collection of separate parts.",
    icon: Smartphone,
  },
];
