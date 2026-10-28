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
      "Built a concurrency-safe ticketing platform with an interactive SVG seat map, using atomic conditional SQL updates inside Prisma transactions, sorted seat-lock ordering and all-or-nothing rollback to prevent double bookings and deadlocks, with a per-user row lock keeping each customer to one active hold.",
      "Implemented 5-minute seat holds released by BullMQ/Redis delayed jobs plus a 60-second sweeper, each release a single conditional UPDATE so it can never free a newer hold, and pushed live held/released/sold updates to every viewer through per-event Socket.io rooms.",
      "Made checkout idempotent with order idempotency keys, marking seats SOLD and issuing random-token QR e-tickets in one transaction, then emailing them via Resend; an atomic check-in UPDATE (WHERE checkedInAt IS NULL) rejects duplicate scans at concurrent gates.",
      "Added role-based access (customer, organizer, staff) with an organizer console for venue templates with auto-generated seats, event creation, per-tier revenue and capacity stats and staff accounts, plus a camera QR scanner, Redis event-list caching, and Docker with GitHub Actions CI on Postgres and Redis.",
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
      "Built a full-stack real-time chat platform on Socket.io with 1-on-1 and group chats, per-user sent/delivered/read receipts, typing indicators, message forwarding, delete-for-me/delete-for-everyone, and cursor-paginated history rendered in a virtualized list for long conversations.",
      "Implemented WebRTC audio/video calling with 1-on-1 and mesh group calls, Socket.io signaling that only relays SDP/ICE between verified call peers, busy/unavailable handling, STUN/TURN config, screen sharing, a floating Picture-in-Picture window and in-browser voice notes.",
      "Engineered Redis-backed presence derived from live Socket.io socket counts (no stale online state after crashes or redeploys) and a 5-minute membership/contact cache so typing, receipt and call events skip the database.",
      "Secured the app with JWT in HTTP-only cookies, Argon2id hashing and Redis OTP email verification via Resend (15-minute expiry, 5-attempt cap, resend cooldown), AES-256 encryption of message text and emails at rest, signed Cloudinary uploads, Zod validation, Helmet and failed-attempt rate limiting.",
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
      "Developed a full-stack MERN expense tracker with a React (Vite) web app and a React Native (Expo) Android app sharing one Express/MongoDB API, covering income/expense logging, category tagging, monthly analytics, Chart.js and SVG charts, and Excel (ExcelJS) and PDF exports.",
      "Built a Splitwise-style shared-expense module with groups, equal/exact/percentage/share splits using integer-cent largest-remainder allocation, net balances, simplified repayment suggestions, partial settlements and activity history, membership-checked, kept apart from personal ledgers and covered by unit tests.",
      "Added a budget API that validates category budgets against income and tracks actual vs. budget with recurring budgets, savings goals with contribution history and monthly targets, and smart insights such as savings rate, daily average and month-end projection.",
      "Secured the API with JWT auth, bcrypt hashing, Resend email-OTP password recovery, Cloudinary profile uploads, Helmet headers, tiered rate limiting (general, auth, image uploads), request validation and per-user data scoping, deployed serverless on Vercel.",
    ],
    tech: ["JavaScript", "React", "React Native (Expo)", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Mongoose", "Chart.js", "ExcelJS", "JWT", "Cloudinary"],
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
