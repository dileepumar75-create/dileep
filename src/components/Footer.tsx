import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-primary/20 py-10 px-4 sm:px-6">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg">
          <span className="text-gradient">Dileep</span>
          <span className="text-primary">.</span>
        </p>
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Dileep Kumar — Crafted with precision & neon light.
        </p>
        <div className="flex gap-3">
          {[Github, Linkedin, Mail, MessageCircle].map((Icon, i) => (
            <a key={i} href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-neon transition-all">
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
