import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled ? "py-3" : "py-5"}`}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <nav className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${isScrolled ? "glass-strong shadow-lg" : ""}`}>
          <a href="#home" className="font-display text-xl sm:text-2xl font-bold tracking-tight">
            <span className="text-gradient">Dileep</span>
            <span className="text-primary">.</span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-display font-semibold hover:scale-105 hover:shadow-neon transition-all duration-300"
            >
              Hire Me
            </a>
            <button
              className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {isOpen && (
          <div className="lg:hidden mt-3 glass-strong rounded-2xl p-4 animate-fade-up">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
