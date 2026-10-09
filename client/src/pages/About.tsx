import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Download,
  Github,
  Linkedin,
  Twitter,
  Heart,
  Zap,
  Users,
  Target,
  Mail,
  Terminal,
  Code2,
} from "lucide-react";
import { skillCategories, experiences, codingProfiles } from "@/lib/data";
import { motion } from "framer-motion";
import Services from "@/components/home/Services";
import { Badge } from "@/components/ui/badge";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import SpotlightCard from "@/components/ui/SpotlightCard";
import CodeSnippet from "@/components/ui/CodeSnippet";
import SectionHeader from "@/components/ui/SectionHeader";
function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <SpotlightCard className="h-full group hover:-translate-y-2 hover:border-primary/40 rounded-3xl transition-all duration-500 shadow-xl overflow-hidden p-6 md:p-8">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Corner accent */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700 pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 font-heading tracking-tight mb-6">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-3 py-1.5 rounded-lg bg-secondary/40 border border-border/50 text-foreground text-sm font-medium hover:bg-primary/20 hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_rgba(var(--primary),0.3)] transition-all duration-300 cursor-default hover:-translate-y-0.5"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
}

const values = [
  {
    icon: Heart,
    title: "Genuinely Curious",
    description:
      "I build things because I find it interesting, not just as a job. That curiosity is what pushes me to understand how things actually work, not just make them work.",
  },
  {
    icon: Zap,
    title: "Performance First",
    description:
      "A slow or clunky app is a broken app. I treat performance as a feature, not an afterthought — because the details users feel are just as important as the ones they see.",
  },
  {
    icon: Users,
    title: "Team-Oriented",
    description:
      "Good software is rarely built alone. I value honest communication, receptive to feedback, and always willing to pair on a problem rather than wrestle with it solo.",
  },
  {
    icon: Target,
    title: "Sweating the Details",
    description:
      "I notice the small things — spacing, transitions, error states, edge cases. That attention is what separates something that works from something that feels right.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <main className="pt-16 md:pt-20 container mx-auto px-6">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-border shadow-xl relative z-10 group">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute -z-10 top-6 -left-6 w-full h-full border-2 border-primary/20 rounded-2xl hidden lg:block" />
            <div className="absolute -z-20 -bottom-6 -right-6 w-2/3 h-2/3 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <SectionHeader
              align="left"
              badge="About Me"
              title="More than just"
              highlight="Code."
              className="mb-6"
            />
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate{" "}
                <strong className="text-foreground font-semibold">Full Stack Developer</strong> who
                got into programming by building things I actually wanted to exist. What started as
                curiosity turned into a genuine craft — one I've spent the last couple of years
                refining through real projects across the full stack.
              </p>
              <p>
                I work primarily with{" "}
                <strong className="text-foreground font-semibold">
                  React, TypeScript, and Node.js
                </strong>
                , and I care deeply about both the quality of the code and the quality of the
                experience it produces. For me, a good product means clean architecture on the
                inside and something that genuinely feels good to use on the outside.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-10">
              <a href="/Resume.pdf" download="Resume.pdf">
                <Button
                  size="lg"
                  className="rounded-full h-12 px-8 text-base font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </a>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/ram02krishna", label: "GitHub" },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/ram-krishna-419528287/",
                    label: "LinkedIn",
                  },
                  { icon: Twitter, href: "https://x.com/krishnarammhd", label: "Twitter" },
                  { icon: Mail, href: "mailto:krishnarammhd@gmail.com", label: "Email" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-secondary/30 backdrop-blur-sm border border-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors group shadow-lg"
                    aria-label={social.label}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                    whileHover={{ scale: 1.1, y: -10 }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mb-16 md:mb-20 w-full max-w-4xl mx-auto px-4 z-10 relative">
          <CodeSnippet />
        </section>

        <section className="mb-16 md:mb-20">
          <SectionHeader badge="Expertise" title="Technical" highlight="Skills." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCard key={category.title} title={category.title} skills={category.skills} />
            ))}
          </div>
        </section>

        <section className="mb-16 md:mb-20">
          <SectionHeader badge="Profiles" title="Coding" highlight="Platforms." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {codingProfiles.map((profile, index) => {
              const ProfileIcon =
                profile.title === "LeetCode"
                  ? Code2
                  : profile.title === "Codeforces"
                    ? Terminal
                    : Github;

              return (
                <motion.a
                  key={profile.title}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <SpotlightCard className="h-full group hover:-translate-y-2 hover:border-primary/40 rounded-3xl p-6 md:p-8 flex items-center gap-6">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* Corner accent */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700 pointer-events-none" />

                    <div className="relative z-10 w-14 h-14 rounded-2xl bg-secondary/50 border border-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-md">
                      <ProfileIcon className="h-6 w-6" />
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold font-heading group-hover:text-primary transition-colors">
                        {profile.title}
                      </h3>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                        View Profile &rarr;
                      </p>
                    </div>
                  </SpotlightCard>
                </motion.a>
              );
            })}
          </div>
        </section>

        <section className="mb-16 md:mb-20">
          <SectionHeader badge="Path" title="Career" highlight="Experiences." />

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-10 pb-12 last:pb-0 border-l-2 border-border/50 hover:border-primary transition-colors group"
              >
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-[9px] group-hover:scale-125 group-hover:bg-primary transition-all duration-300 shadow-lg shadow-primary/20" />
                <span className="text-sm font-bold text-primary uppercase tracking-wider bg-primary/5 px-3 py-1 rounded-full">
                  {exp.year}
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-1 group-hover:text-primary transition-colors">
                  {exp.role}
                </h3>
                <p className="text-lg text-foreground/80 font-medium mb-3">{exp.company}</p>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16 md:mb-20">
          <Services />
        </section>

        <section className="mb-16 md:mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-primary/5 blur-[100px] -z-10 rounded-full" />

          <SectionHeader badge="Values" title="What Drives" highlight="Me." />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <SpotlightCard className="h-full group hover:-translate-y-4 hover:border-primary/40 rounded-3xl">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Corner accent */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700" />

                  <CardHeader className="relative z-10 p-8 pb-0">
                    <motion.div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-purple-500/15 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                      <value.icon className="h-8 w-8" />
                    </motion.div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300 font-heading tracking-tight">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 p-8 pt-4">
                    <p className="text-muted-foreground leading-relaxed font-light group-hover:text-foreground/80 transition-colors duration-500">
                      {value.description}
                    </p>
                  </CardContent>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
