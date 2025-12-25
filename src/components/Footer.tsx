import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-lg sm:text-xl font-bold mb-0.5 sm:mb-1">
              Dileep<span className="text-primary">.</span>
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Web Developer</p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {["About", "Skills", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-3 sm:gap-4">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#contact", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center text-muted-foreground 
                           hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border text-center">
          <p className="text-xs sm:text-sm text-muted-foreground flex items-center justify-center gap-1 flex-wrap">
            © {currentYear} Dileep Kumar. Made with{" "}
            <Heart size={12} className="sm:w-[14px] sm:h-[14px] text-accent fill-accent" /> in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
