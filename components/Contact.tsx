"use client";
import { useState, FormEvent } from "react";
import Window from "./Window";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import { links } from "@/lib/data";

const rows: { label: string; text: string; href?: string }[] = [
  { label: "email", text: links.email, href: `mailto:${links.email}` },
  { label: "phone", text: links.phone, href: `tel:${links.phone}` },
  { label: "location", text: "Gwalior, MP / Nagpur, MH, India" },
  { label: "github", text: "github.com/ram02krishna", href: links.github },
  { label: "linkedin", text: "linkedin.com/in/ram-krishna-419528287", href: links.linkedin },
  { label: "x / twitter", text: "x.com/krishnarammhd", href: links.twitter },
  { label: "leetcode", text: "leetcode.com/u/ram_02_Krishna", href: links.leetcode },
  { label: "codeforces", text: "codeforces.com/profile/krishnarammhd", href: links.codeforces },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(result.error || "Failed to deliver message.");
      }
      setStatus("sent");
      form.reset();
    } catch (err: unknown) {
      setStatus("error");
      const msg = err instanceof Error ? err.message : "";
      if (!msg || msg.toLowerCase().includes("failed to fetch")) {
        setErrorMessage("Connection interrupted while reaching API. Please retry.");
      } else {
        setErrorMessage(msg);
      }
    }
  }

  const field = "mt-1.5 block w-full rounded-md border border-line bg-[#141416] px-3 py-2 font-mono text-sm text-ink placeholder:text-muted/40 transition-colors focus:border-emerald focus:outline-none focus:ring-1 focus:ring-emerald/40 focus-visible:outline-none";

  return (
    <section>
      <SectionHeader id="contact" num="05" name="initiate_contact.sh" />
      <ScrollReveal delay={100}>
        <Window title="$ ./initiate_contact.sh">
        <h3 className="text-xl sm:text-2xl font-bold">&quot;Let&apos;s build backend systems that scale.&quot;</h3>
        <div className="cmt mt-2 space-y-1">
          <p>{"// Currently seeking Backend, DevOps, and Full-Stack SDE Intern / Full-Time roles."}</p>
          <p>{"// Reach out directly via email, phone, or connect on GitHub and LinkedIn."}</p>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <ul className="space-y-2 rounded-lg border border-line bg-bg p-4 sm:p-5 font-mono text-xs sm:text-sm">
            {rows.map((row) => (
              <li key={row.label} className="flex flex-wrap gap-x-2">
                <span className="text-emerald">{row.label}:</span>
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="break-all text-ink hover:text-cyan hover:underline"
                  >
                    {row.text}
                  </a>
                ) : (
                  <span className="break-all text-ink">{row.text}</span>
                )}
              </li>
            ))}
          </ul>
          <form onSubmit={onSubmit} className="space-y-4 rounded-lg border border-line bg-bg p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line/60 pb-2.5">
              <span className="font-mono text-xs font-semibold text-emerald">./send_message</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/30 bg-emerald/10 px-2 py-0.5 font-mono text-[11px] text-emerald">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
                active · direct inbox
              </span>
            </div>

            <p className="font-mono text-xs text-muted/90 leading-relaxed">
              {"// This form is connected and live. Fill out the fields below to send a message directly to my inbox — no email client needed."}
            </p>

            {/* Honeypot spam trap (invisible to human users) */}
            <input
              type="text"
              name="bot_field"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            {[
              ["name", "enter_name", "text", "Your name / company"],
              ["email", "enter_email", "email", "you@example.com"],
            ].map(([n, p, t, ph]) => (
              <label key={n} className="block font-mono text-sm">
                <span className="text-cyan">$ {p}:</span>
                <input
                  name={n}
                  type={t}
                  required
                  placeholder={ph}
                  className={field}
                  autoComplete={n}
                />
              </label>
            ))}
            <label className="block font-mono text-sm">
              <span className="text-cyan">$ enter_message:</span>
              <textarea
                name="message"
                required
                rows={3}
                placeholder="Write your message here..."
                className="mt-1.5 block w-full resize-none rounded-md border border-line bg-[#141416] px-3 py-2 font-mono text-sm text-ink placeholder:text-muted/40 transition-colors focus:border-emerald focus:outline-none focus:ring-1 focus:ring-emerald/40 focus-visible:outline-none"
              />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded bg-emerald px-4 py-2 font-mono text-sm font-semibold text-bg transition-all hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "transmitting_packet..." : "./send_message"}
            </button>
            <div role="status" className="min-h-[1.25rem] font-mono text-xs">
              {status === "sending" && (
                <span className="text-cyan animate-pulse">&gt; transmitting via Resend API...</span>
              )}
              {status === "sent" && (
                <span className="text-emerald">✓ transmission confirmed — message delivered to inbox.</span>
              )}
              {status === "error" && (
                <span className="text-rose-400">✗ {errorMessage || "transmission failed — please try again or email directly."}</span>
              )}
            </div>
          </form>
        </div>
      </Window>
      </ScrollReveal>
    </section>
  );
}
