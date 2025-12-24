import profileImage from "@/assets/dileep-profile.jpg";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Text Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-accent mb-6">
              Available for Freelance Work
            </span>
          </div>
          
          <h1 
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            Hi, I'm{" "}
            <span className="text-gradient">Dileep</span>
            <br />
            <span className="text-gradient-accent">Kumar</span>
          </h1>
          
          <p 
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-up"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            A passionate <span className="text-foreground font-medium">Web Developer</span> crafting 
            beautiful, responsive, and user-friendly digital experiences.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-up"
            style={{ animationDelay: "0.8s", opacity: 0 }}
          >
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display font-semibold 
                         hover:opacity-90 transition-all duration-300 glow hover:scale-105"
            >
              Let's Work Together
            </a>
            <a 
              href="#projects" 
              className="px-8 py-4 rounded-lg glass font-display font-semibold text-foreground
                         hover:bg-secondary transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>
          </div>

          <div 
            className="flex gap-4 justify-center lg:justify-start animate-fade-up"
            style={{ animationDelay: "1s", opacity: 0 }}
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#contact", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground 
                           hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl scale-110" />
            
            {/* Main image container */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden 
                            border-4 border-primary/20 glow">
              <img
                src={profileImage}
                alt="Dileep Kumar - Web Developer"
                className="w-full h-full object-cover object-top"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl glass animate-float">
              <p className="text-sm font-display font-semibold text-foreground">1+ Year</p>
              <p className="text-xs text-muted-foreground">Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 
                   text-muted-foreground hover:text-foreground transition-colors animate-fade-in"
        style={{ animationDelay: "1.5s", opacity: 0 }}
      >
        <span className="text-sm font-medium">Scroll Down</span>
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
