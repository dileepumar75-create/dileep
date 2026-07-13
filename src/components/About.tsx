const aboutAsset = { url: "/images/dileep-about.png" };
import { motion } from "framer-motion";
import { Shield, Code2, Cpu, Palette } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Delivered", value: "25+" },
  { label: "Happy Clients", value: "15+" },
  { label: "Technologies", value: "20+" },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-xs font-medium text-primary tracking-[0.3em] uppercase mb-4">
            About Me
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Crafting <span className="text-gradient-cyber">The Future</span>
            <br /> One Line at a Time
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-3xl rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden border border-primary/30 glow">
              <img src={aboutAsset.url} alt="Dileep Kumar" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl p-4">
                  <p className="font-display font-semibold text-gradient">Dileep Kumar</p>
                  <p className="text-xs text-muted-foreground">Cybersecurity • AI • Web Development</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                Hi, I'm <span className="text-foreground font-medium">Dileep Kumar</span>, a passionate Computer Science student and technology enthusiast from Pakistan.
              </p>
              <p>
                I build modern websites, explore <span className="text-primary">cybersecurity</span>, design AI-powered content, and craft professional digital experiences that combine creativity with innovation.
              </p>
              <p>
                My journey started with web development. Today I continuously learn <span className="text-foreground">Ethical Hacking</span>, <span className="text-foreground">Artificial Intelligence</span>, UI/UX, Trading Analysis, and Digital Content Creation.
              </p>
              <p>
                My long-term goal is to become a professional <span className="text-gradient-accent font-medium">Cybersecurity Expert, Full Stack Developer, AI Creator, and Technology Entrepreneur</span> — helping people learn technology in a simple way.
              </p>
            </div>

            {/* Icons row */}
            <div className="grid grid-cols-4 gap-3 mt-8">
              {[
                { icon: Shield, label: "Security" },
                { icon: Code2, label: "Code" },
                { icon: Cpu, label: "AI" },
                { icon: Palette, label: "Design" },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-3 text-center hover:border-primary/50 hover:scale-105 transition-all">
                  <item.icon className="w-5 h-5 mx-auto text-primary mb-1" />
                  <p className="text-[10px] sm:text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass neon-border rounded-2xl p-6 text-center group hover:scale-105 transition-all"
            >
              <p className="font-display text-3xl sm:text-4xl font-bold text-gradient-cyber mb-1">{s.value}</p>
              <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
