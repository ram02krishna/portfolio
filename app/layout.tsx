import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const viewport: Viewport = {
  themeColor: "#121214",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ram02krishna.me"),
  title: {
    default: "Ram Krishna — Backend · DevOps · Full-Stack Engineer",
    template: "%s | Ram Krishna",
  },
  description:
    "Portfolio of Ram Krishna, CSE @ IIIT Nagpur. Engineering concurrency-safe backend systems, real-time WebSockets/WebRTC architectures, full-stack web and Android apps, and automated DevOps deployments.",
  keywords: [
    "Ram Krishna",
    "Backend Engineer",
    "DevOps Engineer",
    "Full-Stack Developer",
    "IIIT Nagpur",
    "Distributed Systems",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Next.js",
    "React Native",
    "WebRTC",
    "Socket.io",
    "BullMQ",
  ],
  authors: [{ name: "Ram Krishna", url: "https://ram02krishna.me" }],
  creator: "Ram Krishna",
  alternates: {
    canonical: "https://ram02krishna.me",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ram02krishna.me",
    title: "Ram Krishna — Backend · DevOps · Full-Stack Engineer",
    description:
      "Engineering concurrency-safe distributed systems, low-latency APIs, and automated CI/CD pipelines.",
    siteName: "Ram Krishna Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ram Krishna — Backend · DevOps · Full-Stack Engineer",
    description:
      "Engineering concurrency-safe distributed systems, low-latency APIs, and automated CI/CD pipelines.",
    creator: "@krishnarammhd",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-bg text-ink antialiased selection:bg-emerald/20 selection:text-emerald">
        {children}
      </body>
    </html>
  );
}
