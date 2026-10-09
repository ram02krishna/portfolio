import { useState, useEffect, useCallback, memo } from "react";
import { Link, useLocation } from "wouter";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const handleMobileNavClick = useCallback(() => {
    setSheetOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
        scrolled ? "pt-4" : "pt-0"
      }`}
    >
      <div
        className={`container mx-auto px-6 py-3 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "max-w-4xl bg-background/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-primary/10"
            : "max-w-full bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="text-xl md:text-2xl font-heading font-bold tracking-tighter hover:opacity-80 transition-opacity"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-purple-500">
            Portfolio
          </span>
          <span className="text-primary">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary relative group px-3 py-1.5 rounded-full ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              {location === link.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 bg-primary/10 rounded-full"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}

          <div className="flex items-center gap-4 pl-4 border-l border-border/50">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full h-9 w-9 hover:bg-primary/10"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Link href="/contact">
              <Button
                size="sm"
                className="rounded-full px-5 h-9 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all"
              >
                Hire me
              </Button>
            </Link>
          </div>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={handleMobileNavClick}
                    className={`text-lg font-medium ${location === link.href ? "text-primary" : "text-foreground"}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link href="/contact" onClick={handleMobileNavClick}>
                  <Button variant="default" className="w-full rounded-full mt-4">
                    Hire me
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default memo(Navbar);
