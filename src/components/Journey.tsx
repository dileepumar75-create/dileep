import { motion } from "framer-motion";
import { Code2, Terminal, Shield, Cpu, Youtube, Rocket } from "lucide-react";

const steps = [
  { icon: Code2, year: "2023", title: "Started Web Development", desc: "Began the journey with HTML, CSS and JavaScript — building my first responsive websites." },
  { icon: Terminal, year: "2024", title: "Started Programming", desc: "Deep-dived into modern programming, React, and building real-world applications." },
  { icon: Shield, year: "2024", title: "Learning Cybersecurity", desc: "Exploring networking, Linux, ethical hacking and web security fundamentals." },
  { icon: Cpu, year: "2025", title: "Learning Artificial Intelligence", desc: "Mastering AI prompt engineering, generative tools and AI workflow design." },
  { icon: Youtube, year: "2025", title: "Building Personal Brand", desc: "Creating content, growing on YouTube and helping others learn technology." },
  { icon: Rocket, year: "Future", title: "Cybersecurity Engineer & AI Entrepreneur", desc: "Becoming a professional in security, AI and building impactful tech ventures.", highlight: true },
];

const Journey = () => {
  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-xs font-medium text-primary tracking-[0.3em] uppercase mb-4">
            Learning Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            From Curiosity <br /> to <span className="text-gradient-cyber">Mastery</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

          <div className="space-y-8">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative flex items-center gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full ${s.highlight ? "bg-accent" : "bg-primary"} shadow-neon animate-glow-pulse`} />
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <div className={`glass neon-border rounded-2xl p-5 hover:scale-[1.02] transition-transform ${s.highlight ? "border-accent/50" : ""}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-xl ${s.highlight ? "bg-accent/20" : "bg-primary/20"} flex items-center justify-center`}>
                          <s.icon className={`w-5 h-5 ${s.highlight ? "text-accent" : "text-primary"}`} />
                        </div>
                        <span className={`text-xs font-mono ${s.highlight ? "text-accent" : "text-primary"}`}>{s.year}</span>
                      </div>
                      <h3 className="font-display text-lg font-semibold mb-1.5">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
