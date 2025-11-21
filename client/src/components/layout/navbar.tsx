import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection("");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4",
        scrolled ? "py-2" : "py-6"
      )}
    >
      <div className={cn(
        "max-w-6xl mx-auto rounded-full transition-all duration-300 flex items-center justify-between px-6 py-3",
        scrolled ? "glass bg-background/40" : "bg-transparent"
      )}>
        <button 
          onClick={scrollToTop}
          className="text-lg font-bold tracking-tight text-foreground hover:text-accent transition-colors"
        >
          UP<span className="text-primary">.</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={cn(
                "relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors",
                activeSection === item.href.substring(1)
                  ? "text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {activeSection === item.href.substring(1) && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-accent rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {item.name}
            </button>
          ))}

          {/* Resume Button */}
          <a 
            href="/resume.pdf" 
            download="Utsav_Patel_Resume.pdf"
            className="ml-2 flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent/50 text-white transition-all group"
          >
            <span>Resume</span>
            <Download size={14} className="group-hover:translate-y-0.5 transition-transform text-accent" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 p-4 glass rounded-2xl md:hidden flex flex-col gap-2"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-xl transition-colors",
                  activeSection === item.href.substring(1)
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:bg-white/5"
                )}
              >
                {item.name}
              </button>
            ))}

            {/* Mobile Resume Button */}
            <a 
              href="/resume.pdf" 
              download="Utsav_Patel_Resume.pdf"
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-foreground hover:bg-white/5 transition-colors border border-white/10 mt-2"
            >
              <span>Resume</span>
              <Download size={16} className="text-accent" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
