import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, Phone, Clock, MessageSquare, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotlightCard";
import GradientOrb from "@/components/ui/GradientOrb";
import SectionHeader from "@/components/ui/SectionHeader";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Me",
    description: "I check my inbox daily and usually reply within 24 hours.",
    value: "krishnarammhd@gmail.com",
    href: "mailto:krishnarammhd@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Me",
    description: "Available for quick chats and interviews.",
    value: "+91 92440 88448",
    href: "tel:+919244088448",
  },
];

const trustSignals = [
  { icon: Clock, text: "Response within 24 hours" },
  { icon: MessageSquare, text: "Available for interviews" },
  { icon: CheckCircle2, text: "Committed to code quality" },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />

      {/* Decorative Background Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <GradientOrb color="primary" size="lg" className="top-20 -left-64 opacity-30" delay={0.2} />
        <GradientOrb color="purple" size="md" className="top-1/2 right-0 opacity-20" delay={0.5} />
        <GradientOrb color="blue" size="sm" className="bottom-20 left-10 opacity-30" delay={0.8} />
      </div>

      <main className="relative z-10 pt-24 md:pt-32 pb-16 container mx-auto px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader badge="Contact" title="Get in" highlight="Touch." className="mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            I'm currently open to full-time roles, internships, and freelance projects. Whether you
            have a question, a job opportunity, or just want to say hello — feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <signal.icon className="h-4 w-4 text-primary" />
              <span>{signal.text}</span>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            className="lg:col-span-1 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {contactInfo.map((item, index) => (
              <SpotlightCard key={index} className="p-1 rounded-2xl group">
                <div className="p-5 rounded-xl bg-card/80 backdrop-blur-sm h-full pointer-events-none group-hover:bg-transparent transition-colors duration-500">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 pointer-events-auto">
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-1">{item.description}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-primary hover:underline text-sm font-medium break-all relative z-10"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-primary">{item.value}</span>
                      )}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            ))}

            <SpotlightCard className="p-1 rounded-2xl">
              <div className="p-5 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 h-full pointer-events-none relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                <h3 className="font-semibold mb-2 relative z-10">Prefer a quick call?</h3>
                <p className="text-muted-foreground text-sm mb-3 relative z-10">
                  Happy to jump on a call to discuss how I can be a good fit for your team.
                </p>
                <a
                  href="mailto:krishnarammhd@gmail.com?subject=Interview%20Call"
                  className="inline-flex items-center text-sm font-medium text-primary hover:translate-x-1 transition-transform pointer-events-auto relative z-10"
                >
                  Schedule a call <span className="ml-1">→</span>
                </a>
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <SpotlightCard className="p-1 rounded-3xl h-full shadow-2xl">
              <div className="p-6 md:p-10 rounded-[22px] bg-card/80 backdrop-blur-xl h-full flex flex-col justify-center">
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-8 text-yellow-600 dark:text-yellow-400 text-sm flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 shrink-0" />
                  Note: The contact form is currently under development and sending messages will
                  not work. Please feel free to email me directly.
                </div>
                <h2 className="text-2xl font-bold mb-8 font-heading">Send me a message</h2>
                <ContactForm />
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
