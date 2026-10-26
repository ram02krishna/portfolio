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
  ["Concurrency-Safe Architecture", "Atomic SQL updates, Prisma transaction locks, and sorted lock ordering to eliminate race conditions and deadlocks."],
  ["Low-Latency Real-Time Systems", "Sub-100ms signaling and live state synchronization across clients using Socket.io rooms, Redis, and WebRTC."],
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
      "Built a concurrency-safe ticketing platform with an interactive SVG seat map, using atomic conditional SQL updates in Prisma transactions and sorted seat-lock ordering to prevent double bookings and deadlocks.",
      "Implemented 5-minute seat holds with BullMQ and Redis delayed jobs plus a periodic sweeper to release abandoned carts, pushing live seat updates to all viewers through per-event Socket.io rooms.",
      "Added role-based access, QR e-tickets via Resend, atomic QR gate check-in, and Docker with GitHub Actions CI.",
    ],
    tech: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "Redis", "BullMQ", "Socket.io", "Docker"],
    metricsCmd: "impact_metrics.json",
    metrics: [["1,000", "concurrent_hold_requests"], ["0", "double_bookings & 5xx_errors"], ["66ms", "p95_response_latency"]],
    flow: ["SVG Seat Map", "Prisma Atomic Lock", "Redis/BullMQ 5m Hold", "Socket.io Live Broadcast", "Atomic QR Check-In"],
    live: "https://event-seat-booking-psi.vercel.app/",
    github: "https://github.com/ram02krishna/event-seat-booking",
  },
  {
    file: "quickconnect-realtime.ts",
    title: "QuickConnect — Real-Time Chat & WebRTC Video Platform",
    bullets: [
      "Built a full-stack real-time chat platform using Socket.io (WebSockets) with 1-on-1 and group chats, delivery/read receipts, typing indicators, soft deletions, and virtualized scrolling for long message histories.",
      "Implemented WebRTC audio/video calling with 1-on-1 and group-call signaling over Socket.io, screen sharing, a movable floating Picture-in-Picture window, and in-browser voice note recording.",
      "Secured authentication with JWT (HTTP-only cookies), Argon2 password hashing, and Redis-backed OTP email verification via Resend; added signed Cloudinary uploads, live presence tracking, and API rate limiting.",
    ],
    tech: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "Redis", "Socket.io", "WebRTC"],
    metricsCmd: "feature_highlights.json",
    metrics: [["1:1 & Group", "WebRTC_A/V_Calls"], ["PiP + Screen", "media_streaming"], ["Argon2 + JWT", "auth_security"]],
    flow: ["Next.js UI", "JWT/Argon2 Auth", "Socket.io Signaling", "WebRTC P2P Stream / Redis Presence"],
    live: "https://quick-connect-chatapp.vercel.app/",
    github: "https://github.com/ram02krishna/quick-connect",
  },
  {
    file: "spendora-tracker.js",
    title: "Spendora — Full-Stack MERN Expense & Budget Analytics Tracker",
    bullets: [
      "Developed a full-stack MERN expense tracker with income/expense logging, category tagging, monthly analytics, and a budget API that validates category budgets against income and reports actual vs. budget.",
      "Integrated Chart.js spending-trend visualizers with formatted Excel (.xlsx) exports via ExcelJS and PDF downloads.",
      "Implemented JWT authentication with bcrypt password hashing, email OTP password recovery via Resend, Cloudinary profile-picture uploads, and Helmet security headers with rate limiting on auth endpoints.",
    ],
    tech: ["JavaScript", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Mongoose", "Chart.js", "ExcelJS", "JWT", "Cloudinary"],
    metricsCmd: "feature_highlights.json",
    metrics: [
      ["Chart.js", "spending_trend_visualizer"],
      ["Excel & PDF", "automated_report_exports"],
      ["Bcrypt + JWT", "rate_limited_auth_security"],
    ],
    flow: ["React UI", "Express REST API", "MongoDB / Mongoose", "Chart.js Analytics", "ExcelJS / PDF Export"],
    live: "https://spendora-finance.vercel.app/login",
    github: "https://github.com/ram02krishna/spendora-expense-tracker",
  },
  {
    file: "sonara-music.tsx",
    title: "Sonara — Full-Stack Music Streaming Platform",
    bullets: [
      "Built a Spotify/Apple Music-inspired platform with its own accounts (email or guest), playlists, liked songs, followed artists, saved albums and listening history, using Spotify purely as a read-only catalogue so no third-party account connection is needed.",
      "Designed a Next.js (App Router) frontend proxying same-origin /api/v1 calls to a Go (chi) API backed by PostgreSQL and Redis with an in-memory fallback, keeping the HTTP-only session cookie first-party.",
      "Shipped a rich player: drag-to-reorder queue, shuffle/repeat, autoplay of similar music, sleep timer, synced lyrics, full-screen album-colour theming, command palette and keyboard shortcuts, plus a personalised home built from each listener's history and chosen languages and genres.",
      "Deployed the web app on Vercel and the Go API, PostgreSQL and Redis on AWS EC2 behind Nginx with HTTPS, using GitHub Actions to test, build and push the Docker image and auto-update the server on every push.",
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
      "Built a full-stack URL shortener with custom aliases and live availability check, link expiry, atomically enforced click limits, an active/disabled toggle, editable links, QR code generation and CSV export.",
      "Implemented click analytics (browser, OS, device, referrer and geo) with 7/30/90-day ranges, a dashboard overview with traffic charts, and friendly status pages for expired, disabled or limit-reached links.",
      "Hardened security with JWT auth (7-day expiry), Email OTP verification via Resend, scrypt-hashed link passwords, http(s)-only destinations, Zod request validation, and brute-force limiting on protected links.",
      "Enforced a free tier of 3 links per device server-side, using PostgreSQL with Drizzle ORM, Docker Compose and serverless deployment on Vercel.",
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
    items: ["Node.js", "Express.js", "REST APIs", "Socket.io / WebSockets", "WebRTC", "JWT / OAuth 2.0 / Argon2 / Bcrypt", "Zod Validation"],
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
    items: ["Next.js", "React.js", "Tailwind CSS", "HTML5 & CSS3"],
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
