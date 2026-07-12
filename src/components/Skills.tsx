import { motion } from "framer-motion";
import { Shield, Code2, Cpu, Palette, Video, TrendingUp, Youtube, Users } from "lucide-react";

const skillGroups = [
  { icon: Shield, title: "Cybersecurity", color: "from-cyan-400 to-blue-500", items: ["Networking", "Linux", "Ethical Hacking", "Web Security", "Penetration Testing", "Security Research"] },
  { icon: Code2, title: "Web Development", color: "from-blue-400 to-indigo-500", items: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React", "Responsive Design"] },
  { icon: Cpu, title: "Artificial Intelligence", color: "from-purple-400 to-pink-500", items: ["AI Prompt Engineering", "ChatGPT", "Gemini", "Leonardo AI", "Midjourney", "AI Workflow Design"] },
  { icon: Palette, title: "Graphic Design", color: "from-pink-400 to-rose-500", items: ["Logo Design", "Thumbnail Design", "Banner Design", "Social Media Design"] },
  { icon: Video, title: "Video Editing", color: "from-orange-400 to-red-500", items: ["CapCut", "Premiere Pro", "After Effects", "Short Form Editing", "YouTube Editing"] },
  { icon: TrendingUp, title: "Trading", color: "from-emerald-400 to-teal-500", items: ["Technical Analysis", "Risk Management", "Chart Reading", "Market Research"] },
  { icon: Youtube, title: "Content Creation", color: "from-red-400 to-rose-500", items: ["YouTube", "Personal Branding", "Content Strategy", "Script Writing"] },
  { icon: Users, title: "Soft Skills", color: "from-yellow-400 to-orange-500", items: ["Problem Solving", "Communication", "Leadership", "Creative Thinking", "Time Management", "Teamwork"] },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6">
      <div className="absolute inset-0 grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="container max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-xs font-medium text-primary tracking-[0.3em] uppercase mb-4">
            My Skills
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Multi-Disciplinary <span className="text-gradient-cyber">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A powerful stack of technologies and creative skills powering everything I build.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -8 }}
              className="group relative glass neon-border rounded-2xl p-6 overflow-hidden"
            >
              <div className={`absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br ${g.color} opacity-20 blur-3xl rounded-full group-hover:opacity-40 transition-opacity`} />

              <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${g.color} p-[1.5px] mb-5`}>
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <g.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              <h3 className="font-display text-lg font-semibold mb-4">{g.title}</h3>

              <ul className="space-y-1.5">
                {g.items.map((item) => (
                  <li key={item} className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
