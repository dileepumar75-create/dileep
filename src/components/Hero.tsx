import profileAsset from "@/assets/dileep-hero.png.asset.json";
const cvUrl = "/files/Dileep_Kumar_CV.docx";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const titles = [
  "Cybersecurity Enthusiast",
  "Full Stack Web Developer",
  "AI Designer",
  "Creative Video Editor",
  "Professional Thumbnail Designer",
  "AI Prompt Engineer",
  "Trader",
  "YouTuber",
  "Technology Advisor",
];

const Hero = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setIdx((v) => (v + 1) % titles.length), 2200);
    return () => clearInterval(i);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 px-4 sm:px-6">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left - text */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs sm:text-sm font-medium mb-6"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-primary">Available for Freelance & Collaborations</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4"
          >
            Hi, I'm <span className="text-gradient-cyber animate-gradient-shift">Dileep</span>
            <br />
            <span className="text-gradient">Kumar</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-8 sm:h-10 md:h-12 mb-6 flex items-center justify-center lg:justify-start"
          >
            <span className="text-lg sm:text-xl md:text-2xl font-display font-medium text-muted-foreground">I'm a </span>
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="ml-2 text-lg sm:text-xl md:text-2xl font-display font-semibold text-gradient-accent"
            >
              {titles[idx]}
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
          >
            Building <span className="text-foreground font-medium">Secure Digital Experiences</span>,{" "}
            <span className="text-foreground font-medium">AI Solutions</span>, Creative Content, and{" "}
            <span className="text-foreground font-medium">Modern Web Applications</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
          >
            <a href="#projects" className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-display font-semibold hover:scale-105 hover:shadow-neon transition-all duration-300 text-sm sm:text-base">
              View Portfolio
            </a>
            <a href={cvUrl} download="Dileep_Kumar_CV.docx" className="px-6 py-3.5 rounded-xl glass font-display font-semibold hover:border-primary/50 hover:scale-105 transition-all duration-300 text-sm sm:text-base inline-flex items-center gap-2">
              <Download size={16} /> Download CV
            </a>
            <a href="#contact" className="px-6 py-3.5 rounded-xl border border-primary/40 text-primary font-display font-semibold hover:bg-primary/10 hover:scale-105 transition-all duration-300 text-sm sm:text-base">
              Hire Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-3 justify-center lg:justify-start"
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#contact", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label}
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 hover:shadow-neon transition-all duration-300">
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right - image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Rotating rings */}
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-spin-slow" style={{ transform: "scale(1.15)" }} />
            <div className="absolute inset-0 rounded-full border border-accent/30 animate-spin-slow" style={{ transform: "scale(1.3)", animationDirection: "reverse", animationDuration: "30s" }} />

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 via-accent/40 to-transparent blur-3xl scale-110 animate-glow-pulse" />

            {/* Image */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-primary/40 glow-neon">
              <img src={profileAsset.url} alt="Dileep Kumar" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-2 -left-4 glass rounded-2xl px-4 py-2.5 shadow-lg"
            >
              <p className="text-xs text-muted-foreground">Experience</p>
              <p className="font-display font-bold text-sm text-gradient">2+ Years</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-2 -right-4 glass rounded-2xl px-4 py-2.5 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <p className="font-display font-semibold text-xs">Available Now</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
    </section>
  );
};

export default Hero;
