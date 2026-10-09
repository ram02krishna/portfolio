import { Switch, Route, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollToTop from "@/components/ui/ScrollToTop";
import React, { Suspense, lazy } from "react";
import { Loader2 } from "lucide-react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const Home = lazy(() => import("@/pages/Home"));
const Projects = lazy(() => import("@/pages/Projects"));
const ProjectDetail = lazy(() => import("@/pages/ProjectDetail"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/not-found"));

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

function Router() {
  const [location] = useLocation();

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-background">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      }
    >
      <AnimatePresence mode="wait">
        <Switch key={location}>
          <Route
            path="/"
            component={() => (
              <PageTransition>
                <Home />
              </PageTransition>
            )}
          />
          <Route
            path="/projects"
            component={() => (
              <PageTransition>
                <Projects />
              </PageTransition>
            )}
          />
          <Route path="/project/:id">
            {() => (
              <PageTransition>
                <ProjectDetail />
              </PageTransition>
            )}
          </Route>
          <Route
            path="/about"
            component={() => (
              <PageTransition>
                <About />
              </PageTransition>
            )}
          />
          <Route
            path="/contact"
            component={() => (
              <PageTransition>
                <Contact />
              </PageTransition>
            )}
          />
          <Route
            component={() => (
              <PageTransition>
                <NotFound />
              </PageTransition>
            )}
          />
        </Switch>
      </AnimatePresence>
    </Suspense>
  );
}

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="portfolio-theme-v2"
    >
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ScrollToTop />
          <CustomCursor />
          <Toaster />
          <Router />
          <SpeedInsights />
          <Analytics />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
