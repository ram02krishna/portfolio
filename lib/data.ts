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
  role: "Software Development Engineer (SDE) Intern – Backend @ Simphy Softwares Pvt. Ltd.",
  when: "Jun 2026 — Aug 2026 | Remote",
  logs: [
    "Worked on the backend of Simphy's software, contributing to the server-side codebase as part of the engineering team.",
    "Wrote and shipped backend code in Node.js and Express.js, building RESTful APIs with core business logic, request validation, and secure client-server communication.",
    "Cut API response times by 20% on heavy endpoints by profiling database bottlenecks and rewriting slow SQL queries.",
    "Containerized backend services with Docker and deployed them on AWS EC2 behind an Nginx reverse proxy with PM2 process supervision, automating build and release with GitHub Actions CI/CD pipelines.",
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
      "Built an event and cinema ticketing platform with an interactive, zoomable SVG seat map, designed to stay correct even when thousands of people go after the same seats at once.",
      "Stopped double bookings at the database level using atomic PostgreSQL transactions with row-level locks, and locked seats in a fixed order so two buyers can never deadlock each other.",
      "Added a 5-minute seat hold using Redis and BullMQ, with Socket.io pushing live availability to every connected user so seats appear taken or freed instantly.",
      "Made checkout idempotent so retries never create duplicate orders, then emailed QR e-tickets and built an atomic gate scanner that rejects a ticket the second time it is scanned.",
      "Supported multi-showtime cinema scheduling, tiered seat pricing and organizer dashboards, and packaged everything with Docker Compose and GitHub Actions CI.",
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
      "Built a real-time chat app with 1-on-1 and group conversations, delivery and read receipts, typing indicators, and a virtualized message list that stays smooth with thousands of messages.",
      "Added WebRTC audio and video calling with my own Socket.io signaling, ICE/STUN negotiation, screen sharing, and a floating Picture-in-Picture window so calls continue while browsing chats.",
      "Tracked online presence in Redis tied to live socket connections, so statuses stay accurate across reconnects and server restarts instead of showing stale users as online.",
      "Supported image, video, document and voice-note sharing, with client-side compression and signed direct uploads to Cloudinary, plus a voice player with playback speed control.",
      "Secured accounts with Argon2id password hashing, AES-256 encryption for message text at rest, HTTP-only cookies, and email OTP verification sent through Resend.",
    ],
    tech: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "Redis", "Socket.io", "WebRTC"],
    metricsCmd: "feature_highlights.json",
    metrics: [["1:1 & Group", "WebRTC_A/V_Calls"], ["Redis", "live_presence_&_membership_cache"], ["Argon2 + AES-256", "auth_&_data_at_rest"]],
    flow: ["Next.js UI", "JWT/Argon2 Auth", "Socket.io Signaling", "WebRTC P2P Stream / Redis Presence"],
    live: "https://quick-connect-chatapp.vercel.app/",
    github: "https://github.com/ram02krishna/quick-connect",
  },
  {
    file: "sonara-music.tsx",
    title: "Sonara — Full-Stack Music Streaming Platform",
    bullets: [
      "Built a music streaming platform inspired by Spotify and Apple Music, with a responsive Next.js frontend and a Go backend using the Chi router, with its own accounts, library and listening history.",
      "Designed a full player experience with a drag-and-drop queue, synced lyrics, full-screen view with album-colour theming, sleep timer, and keyboard shortcuts with a command palette.",
      "Used the Spotify catalogue and iTunes previews for discovery, so listeners can search and play 30-second previews without linking any external streaming account.",
      "Built a home feed personalised from each listener's history and chosen languages, genres and artists, along with playlists, liked songs, followed artists and real listening stats.",
      "Deployed the web app on Vercel and ran the Go API, PostgreSQL and Redis in Docker on AWS EC2 behind Nginx, with CI/CD that deploys automatically on every push.",
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
    file: "moneymint-tracker.js",
    title: "MoneyMint — Full-Stack Expense Tracker with Splits",
    bullets: [
      "Built a personal finance app that lets users track income and expenses, set category budgets, and set savings goals, with a React web client and an Expo Android app sharing one Express and MongoDB API.",
      "Added a Splitwise-style group expense feature that handles equal, exact, percentage, share-based and itemized splits, with all amounts stored in integer cents so balances never drift by rounding errors.",
      "Wrote a debt-simplification routine that reduces who-owes-whom within a group to the fewest payments, making it much easier for friends and roommates to settle up.",
      "Designed dashboards with Chart.js showing spending by category, monthly income vs. expense trends, and quick insights like savings rate and month-end projection, plus one-click Excel and PDF report downloads.",
      "Secured the app with JWT and Google sign-in, email OTP verification through Resend for password resets, and rate limiting on public and auth routes, and deployed the API and web client on Vercel.",
    ],
    tech: ["JavaScript", "React", "React Native (Expo)", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Mongoose", "Chart.js", "ExcelJS", "JWT"],
    metricsCmd: "feature_highlights.json",
    metrics: [["Web + Android", "one_shared_express_api"], ["Integer cents", "exact_split_balances"], ["Excel & PDF", "automated_report_exports"]],
    flow: ["React / Expo Clients", "Express REST API", "MongoDB / Mongoose", "Split Ledger Engine", "Analytics & Excel / PDF Export"],
    live: "https://moneymint-app.vercel.app/",
    github: "https://github.com/ram02krishna/moneymint",
  },
  {
    file: "nano-url.jsx",
    title: "nanoURL — Full-Stack URL Shortener with Analytics",
    bullets: [
      "Built a full-stack URL shortener with custom aliases, a live availability check for slugs, QR code generation, and a dashboard to search, edit, pause and export your links as CSV.",
      "Added click analytics showing referrers, countries, operating systems and devices over 7, 30 or 90 days, with a traffic chart and per-link CSV export.",
      "Gave links extra control through optional password protection hashed with scrypt, expiry dates, and click limits enforced atomically so a link cannot go past its cap.",
      "Hardened the service by accepting only http and https destinations, rate-limiting password attempts, and using crypto-random OTPs for email verification and password recovery.",
      "Built the backend with Node.js, Express, PostgreSQL and Drizzle ORM, validated requests with Zod, and added a free tier of 3 links per device that is enforced on the server.",
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
