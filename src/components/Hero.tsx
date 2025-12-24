import profileImage from "@/assets/dileep-profile.jpg";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-20 md:pt-0">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 sm:-left-32 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 sm:-right-32 w-56 sm:w-80 h-56 sm:h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center relative z-10">
        {/* Text Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass text-xs sm:text-sm font-medium text-accent mb-4 sm:mb-6">
              Available for Freelance Work
            </span>
          </div>
          
          <h1 
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-fade-up leading-tight"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            Hi, I'm{" "}
            <span className="text-gradient">Dileep</span>
            <br />
            <span className="text-gradient-accent">Kumar</span>
          </h1>
          
          <p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-up"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            A passionate <span className="text-foreground font-medium">Web Developer</span> crafting 
            beautiful, responsive, and user-friendly digital experiences.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10 animate-fade-up"
            style={{ animationDelay: "0.8s", opacity: 0 }}
          >
            <a 
              href="#contact" 
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-primary text-primary-foreground font-display font-semibold 
                         hover:opacity-90 transition-all duration-300 glow hover:scale-105 text-sm sm:text-base"
            >
              Let's Work Together
            </a>
            <a 
              href="#services" 
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg glass font-display font-semibold text-foreground
                         hover:bg-secondary transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              View My Work
            </a>
          </div>

          <div 
            className="flex gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-up"
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
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center text-muted-foreground 
                           hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Icon size={18} className="sm:w-5 sm:h-5" />
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
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden 
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
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 px-3 sm:px-4 py-2 sm:py-3 rounded-xl glass animate-float">
              <p className="text-xs sm:text-sm font-display font-semibold text-foreground">1+ Year</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 
                   text-muted-foreground hover:text-foreground transition-colors animate-fade-in hidden sm:flex"
        style={{ animationDelay: "1.5s", opacity: 0 }}
      >
        <span className="text-xs sm:text-sm font-medium">Scroll Down</span>
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
