import { motion } from "framer-motion";
import { Shield, Globe, Cpu, Sparkles, Palette, Image, Video, User, Layout, MessageSquare } from "lucide-react";

const services = [
  { icon: Shield, title: "Cybersecurity" },
  { icon: Globe, title: "Website Development" },
  { icon: Cpu, title: "AI Prompt Engineering" },
  { icon: Sparkles, title: "AI Image Design" },
  { icon: Palette, title: "Logo Design" },
  { icon: Image, title: "Thumbnail Design" },
  { icon: Video, title: "Video Editing" },
  { icon: User, title: "Portfolio Design" },
  { icon: Layout, title: "Landing Page Design" },
  { icon: MessageSquare, title: "Technology Consultation" },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 px-4 sm:px-6">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-xs font-medium text-accent tracking-[0.3em] uppercase mb-4">
            Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What I Can <span className="text-gradient-accent">Do For You</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end digital services combining security, development, AI and creative design.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group glass neon-border rounded-2xl p-5 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/40 group-hover:to-accent/40 transition-all group-hover:shadow-neon">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-display text-sm font-medium">{s.title}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 max-w-3xl mx-auto glass-strong rounded-3xl p-8 text-center"
        >
          <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">
            Have a project in mind?
          </h3>
          <p className="text-muted-foreground mb-6">Let's discuss how I can help you build something extraordinary.</p>
          <a href="#contact" className="inline-flex px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-display font-semibold hover:scale-105 hover:shadow-neon transition-all">
            Get a Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
