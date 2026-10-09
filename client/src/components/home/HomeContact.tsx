import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import MagneticButton from "@/components/ui/MagneticButton";

export default function HomeContact() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="container mx-auto px-6">
        <div className="glass-card rounded-[3rem] p-8 md:p-16 relative overflow-hidden border-primary/10 shadow-2xl">
          {/* Decorative pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
                  <MessageSquare className="w-3 h-3" />
                  Get in Touch
                </span>
                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                  Got something <span className="text-gradient">interesting?</span> <br />
                  Let's <span className="text-primary italic">build it</span>.
                </h2>
                <p className="text-muted-foreground text-lg mb-10 max-w-md leading-relaxed">
                  I'm actively looking for opportunities — whether that's a full-time role, an
                  internship, or a freelance project worth working on. If you think we'd be a good
                  fit, reach out.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <MagneticButton className="rounded-full px-8 h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-lg shadow-xl shadow-primary/20 group">
                      Start a Project
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </MagneticButton>
                  </Link>
                  <a href="mailto:krishnarammhd@gmail.com">
                    <Button
                      variant="outline"
                      className="rounded-full px-8 h-14 text-lg border-primary/20 hover:bg-primary/5 transition-all"
                    >
                      <Mail className="mr-2 w-4 h-4" />
                      Email Me
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent p-1 shadow-2xl"
              >
                <div className="w-full h-full rounded-2xl bg-background/40 backdrop-blur-xl flex flex-col items-center justify-center p-8 text-center border border-white/10">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Mail className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Send me a message</h3>
                  <p className="text-muted-foreground mb-6">
                    I check my email daily and usually reply within a day.
                  </p>
                  <a
                    href="mailto:krishnarammhd@gmail.com"
                    className="text-xl font-medium text-primary hover:underline underline-offset-4 decoration-2"
                  >
                    krishnarammhd@gmail.com
                  </a>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-blue-500/20 backdrop-blur-md border border-white/20 flex items-center justify-center"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-10 -left-6 w-20 h-20 rounded-full bg-primary/20 backdrop-blur-md border border-white/20 flex items-center justify-center"
                >
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
