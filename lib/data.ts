export const links = {
  email: "krishnarammhd@gmail.com",
  phone: "+91-9244088448",
  web: "ram02krishna.me",
  github: "https://github.com/ram02krishna",
  linkedin: "https://www.linkedin.com/in/ram-krishna-419528287/",
  twitter: "https://x.com/krishnarammhd",
  leetcode: "https://leetcode.com/u/ram_02_Krishna/",
  codeforces: "https://codeforces.com/profile/krishnarammhd",
  resume: "/resume.pdf",
};

export const stats = [
  ["20%", "faster_api_response"], ["0", "double_bookings_at_1k_concurrency"],
  ["66ms", "p95_latency"], ["500+", "leetcode_solved (1725 peak)"],
];

export const principles = [
  ["Concurrency-Safe Architecture", "Atomic SQL updates, Prisma transaction locks, sorted lock ordering, and idempotent checkout to eliminate race conditions, deadlocks and duplicate orders."],
  ["Low-Latency Real-Time Systems", "Sub-100ms signaling and live state synchronization across clients using Socket.io rooms, Redis presence, and WebRTC."],
  ["Database & Query Optimization", "Profiling slow endpoints, restructuring SQL queries, and leveraging Redis/BullMQ for background job queues."],
  ["Production-First DevOps", "Deploying behind Nginx reverse proxies with PM2 supervision, Docker containers, AWS EC2, and GitHub Actions CI/CD."],
];

export const internship = {
  role: "Software Development Engineer (SDE) Intern - Backend @ Simphy Softwares Pvt. Ltd.",
  when: "Jun 2026 — Aug 2026 | Remote",
  logs: [
    "Developed and maintained scalable REST APIs using Node.js and Express.js, handling core business logic, input validation, and secure client-server communication.",
    "Optimized database performance by profiling bottlenecks and restructuring SQL queries, reducing API response times by 20% on heavy endpoints.",
    "Managed application deployments on AWS EC2 behind an Nginx reverse proxy with PM2 process supervision, setting up automated CI/CD pipelines via GitHub Actions.",
  ],
};

export const education = [
  ["IIIT Nagpur", "B.Tech in CSE", "2023 — Present"],
  ["Sanskar Public School, Gwalior", "Class XII CBSE", "81% | 2022"],
  ["St. Paul's School, Gwalior", "Class X CBSE", "88% | 2020"],
];

export type Project = {
  file: string; badge?: string; title: string; bullets: string[]; tech: string[];
  metricsCmd: string; metrics: [string, string][]; flow: string[]; live: string; github: string;
};

export const projects: Project[] = [
  {
    file: "seatlock.ts",
    title: "SeatLock — Concurrency-Safe Ticketing Platform",
    bullets: [
      "Engineered a high-concurrency event ticketing platform with an interactive, zoomable SVG seat map, eliminating double-bookings and race conditions under heavy traffic spikes.",
      "Implemented atomic PostgreSQL transactions with row-level locks and strict seat-order locking, ensuring immediate rollback if any requested seat is contested.",
      "Built a real-time reservation system with Redis and BullMQ to manage 5-minute seat holds, broadcasting live availability updates to all connected users via Socket.io.",
      "Designed an idempotent checkout flow issuing QR e-tickets via email, paired with an atomic gate check-in scanner that prevents duplicate ticket entries.",
      "Added multi-showtime cinema scheduling, tiered seat pricing, organizer management dashboards, and containerized the stack with Docker Compose and GitHub Actions CI.",
    ],
    tech: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "Redis", "BullMQ", "Socket.io", "Docker"],
    metricsCmd: "impact_metrics.json",
    metrics: [["1,000", "concurrent_hold_requests"], ["0", "double_bookings & 5xx_errors"], ["66ms", "p95_response_latency"]],
    flow: ["SVG Seat Map", "Prisma Atomic Lock", "Redis/BullMQ 5m Hold", "Socket.io Live Broadcast", "Atomic QR Check-In"],
    live: "https://seatlock-event-seat-booking.vercel.app/",
    github: "https://github.com/ram02krishna/seat-lock",
  },
  {
    file: "quickconnect-realtime.ts",
    title: "QuickConnect — Real-Time Chat & WebRTC Video Platform",
    bullets: [
      "Built a full-featured real-time messaging platform supporting 1-on-1 and group chats, message delivery receipts, typing indicators, and virtualized message history.",
      "Integrated WebRTC for low-latency peer-to-peer audio and video calls, with custom Socket.io signaling, ICE/STUN negotiation, screen sharing, and Picture-in-Picture mode.",
      "Engineered Redis-backed user presence tracking tied directly to active socket connections, preventing stale online statuses across server restarts and reconnections.",
      "Secured communication with Argon2id password hashing, AES-256 encryption at rest, secure HTTP-only cookies, and email verification via Resend.",
    ],
    tech: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "Redis", "Socket.io", "WebRTC"],
    metricsCmd: "feature_highlights.json",
    metrics: [["1:1 & Group", "WebRTC_A/V_Calls"], ["Redis", "live_presence_&_membership_cache"], ["Argon2 + AES-256", "auth_&_data_at_rest"]],
    flow: ["Next.js UI", "JWT/Argon2 Auth", "Socket.io Signaling", "WebRTC P2P Stream / Redis Presence"],
    live: "https://quick-connect-chatapp.vercel.app/",
    github: "https://github.com/ram02krishna/quick-connect",
  },
  {
    file: "moneymint-tracker.js",
    title: "MoneyMint — Full-Stack Expense Tracker with Shared Splits & Android App",
    bullets: [
      "Developed a cross-platform personal finance application featuring a React web client and an Expo Android app, powered by a unified Express and MongoDB REST API.",
      "Built a Splitwise-style group expense engine supporting multiple split methods, calculated in exact integer cents with debt-simplification algorithms to settle balances cleanly.",
      "Created dynamic visual dashboards with category-wise spending analytics, recurring budget tracking, savings goal milestones, and Excel/PDF report generation.",
      "Secured the platform with JWT authentication, Google OAuth, crypto-random OTP verification via Resend, and tiered rate limiting on public and auth endpoints.",
    ],
    tech: ["JavaScript", "React", "React Native (Expo)", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Mongoose", "Chart.js", "ExcelJS", "JWT"],
    metricsCmd: "feature_highlights.json",
    metrics: [["Web + Android", "one_shared_express_api"], ["Integer cents", "exact_split_balances"], ["Excel & PDF", "automated_report_exports"]],
    flow: ["React / Expo Clients", "Express REST API", "MongoDB / Mongoose", "Split Ledger Engine", "Analytics & Excel / PDF Export"],
    live: "https://moneymint-app.vercel.app/",
    github: "https://github.com/ram02krishna/moneymint",
  },
  {
    file: "sonara-music.tsx",
    title: "Sonara — Full-Stack Music Streaming Platform",
    bullets: [
      "Created a modern music streaming application with a responsive Next.js frontend and a high-performance Go backend built using the Chi router.",
      "Designed a complete audio player experience with drag-and-drop queue management, synchronized lyrics, audio visualizer, sleep timer, and dynamic album-artwork theming.",
      "Integrated Spotify and iTunes catalog APIs for fast music discovery and song previews without requiring users to connect external streaming accounts.",
      "Deployed the web client on Vercel and containerized the Go API, PostgreSQL, and Redis cache on AWS EC2 behind an Nginx reverse proxy with automated CI/CD.",
    ],
    tech: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Go", "PostgreSQL", "Prisma ORM", "Redis", "Zustand", "TanStack Query", "Docker", "AWS EC2", "Nginx"],
    metricsCmd: "feature_highlights.json",
    metrics: [
      ["Go + Next.js", "monorepo_full_stack"],
      ["Spotify + iTunes", "catalogue_&_30s_previews"],
      ["CI/CD → EC2", "docker_hub_auto_deploy"],
    ],
    flow: ["Next.js UI", "/api/v1 Proxy", "Go (chi) API", "PostgreSQL / Redis Cache", "Spotify · iTunes · LRCLIB"],
    live: "https://sonara-ram02krishna.vercel.app/",
    github: "https://github.com/ram02krishna/sonara",
  },
  {
    file: "nano-url.jsx",
    title: "nanoURL — Full-Stack URL Shortener with Analytics",
    bullets: [
      "Built a lightweight, full-stack URL shortening service with custom alias support, real-time slug availability checks, QR code generation, and CSV exports.",
      "Implemented comprehensive click analytics tracking referral sources, geographic locations, operating systems, and device types over customizable timeframes.",
      "Secured sensitive links with optional scrypt password protection, link expiration dates, and atomically enforced click-limit thresholds.",
      "Constructed the backend with Node.js, Express, and PostgreSQL using Drizzle ORM, with containerized local environments via Docker Compose.",
    ],
    tech: ["JavaScript", "React", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Drizzle ORM", "Zod", "JWT", "Docker"],
    metricsCmd: "feature_highlights.json",
    metrics: [
      ["Scrypt + JWT", "hashed_link_passwords_&_auth"],
      ["Atomic", "click_limit_enforcement"],
      ["QR + CSV", "link_sharing_&_exports"],
    ],
    flow: ["React UI", "Express REST API", "Zod Validation", "Drizzle / PostgreSQL", "Click Analytics"],
    live: "https://getnanourl.vercel.app/",
    github: "https://github.com/ram02krishna/nano-url",
  },
];

export const skills: { title: string; items: string[] }[] = [
  {
    title: "Backend & Auth",
    items: ["Node.js", "Express.js", "REST APIs", "Socket.io / WebSockets", "WebRTC", "JWT / OAuth 2.0 / Argon2 / Bcrypt", "Zod Validation", "Helmet & Rate Limiting"],
  },
  {
    title: "Databases, Caching & Queues",
    items: ["PostgreSQL", "Redis & BullMQ", "MongoDB", "Prisma ORM", "Drizzle ORM", "Mongoose ODM", "SQL Query Optimization"],
  },
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript ES6+", "C++", "C", "Go", "SQL"],
  },
  {
    title: "Frontend & UI",
    items: ["Next.js", "React.js", "React Native (Expo)", "Vite", "Zustand", "TanStack Query", "Tailwind CSS", "HTML5 & CSS3"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS EC2", "Docker", "Nginx Reverse Proxy", "PM2", "GitHub Actions CI/CD", "New Relic"],
  },
  {
    title: "Core CS & Developer Tools",
    items: ["Data Structures & Algorithms", "OOP / DBMS / OS / Computer Networks", "Git & GitHub", "Linux / WSL2", "Postman / Vercel / Render / Cloudinary / Resend"],
  },
];
