import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Shield, Sparkles, Layout, Server, Palette } from "lucide-react";

const projects = [
  { icon: Globe, title: "Portfolio Website", tag: "Web Development", desc: "Premium personal branding site with futuristic 2026 UI, glassmorphism and neon animations.", color: "from-cyan-500 to-blue-600" },
  { icon: Shield, title: "Cybersecurity Learning", tag: "Security", desc: "Hands-on labs and write-ups covering networking, Linux, and ethical hacking techniques.", color: "from-blue-500 to-indigo-600" },
  { icon: Sparkles, title: "AI Design Projects", tag: "AI / Creative", desc: "AI-generated banners, thumbnails and brand visuals using Midjourney, Leonardo & Gemini.", color: "from-purple-500 to-pink-600" },
  { icon: Layout, title: "Landing Pages", tag: "Web Design", desc: "High-converting responsive landing pages for startups, creators and small businesses.", color: "from-pink-500 to-rose-600" },
  { icon: Server, title: "WordPress Websites", tag: "CMS", desc: "Custom WordPress builds with elegant themes, blazing performance and SEO optimization.", color: "from-emerald-500 to-teal-600" },
  { icon: Palette, title: "UI Design Projects", tag: "UI / UX", desc: "Modern app and website interfaces designed with Apple-Tesla-Microsoft inspired aesthetics.", color: "from-orange-500 to-red-600" },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <span className="inline-block px-4 py-2 rounded-full glass text-xs font-medium text-primary tracking-[0.3em] uppercase mb-4">
              Projects
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Selected <span className="text-gradient-cyber">Works</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A curated collection of my recent projects spanning cybersecurity, AI, and web experiences.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-primary/40 via-accent/20 to-transparent overflow-hidden"
            >
              <div className="relative rounded-3xl bg-card/90 backdrop-blur-xl p-6 h-full flex flex-col overflow-hidden">
                <div className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br ${p.color} opacity-20 blur-3xl rounded-full group-hover:opacity-40 transition-opacity`} />

                {/* Preview area */}
                <div className={`relative rounded-2xl h-40 mb-5 overflow-hidden bg-gradient-to-br ${p.color}/20 border border-primary/20 flex items-center justify-center`}>
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${p.color} p-[2px]`}>
                    <div className="w-full h-full rounded-2xl bg-background/90 flex items-center justify-center">
                      <p.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-primary/80">{p.tag}</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-gradient transition-all">{p.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{p.desc}</p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-medium text-primary group-hover:tracking-wider transition-all">Explore</span>
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
