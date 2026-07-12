import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message required").max(1000),
});

const socials = [
  { icon: Github, label: "GitHub", href: "#", color: "hover:text-white" },
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-400" },
  { icon: Mail, label: "Email", href: "mailto:dileepumar75@gmail.com", color: "hover:text-primary" },
  { icon: MessageCircle, label: "WhatsApp", href: "#", color: "hover:text-green-400" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({ title: "Please check your input", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    toast({ title: "Message Sent!", description: "Thanks for reaching out — I'll reply within 24 hours." });
    setForm({ name: "", email: "", message: "" });
    setSending(false);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-xs font-medium text-primary tracking-[0.3em] uppercase mb-4">
            Contact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Let's Build Something <span className="text-gradient-cyber">Amazing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open to freelance projects, collaborations, and exciting opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-3 text-sm">
                <a href="mailto:dileepumar75@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={16} className="text-primary" /> dileepumar75@gmail.com
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={16} className="text-primary" /> Pakistan
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold mb-4">Follow Me</h3>
              <div className="grid grid-cols-4 gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className={`aspect-square rounded-xl glass flex items-center justify-center text-muted-foreground ${s.color} hover:scale-110 hover:shadow-neon transition-all`}
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-green-400">Available for work</span>
              </div>
              <p className="text-xs text-muted-foreground">Response time: within 24 hours</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={submit}
            className="lg:col-span-3 glass-strong rounded-3xl p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium mb-2 text-muted-foreground">Your Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-2 text-muted-foreground">Your Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium mb-2 text-muted-foreground">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                maxLength={1000}
                className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none text-sm"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-display font-semibold hover:scale-105 hover:shadow-neon transition-all inline-flex items-center gap-2 disabled:opacity-60"
            >
              {sending ? "Sending..." : (<>Send Message <Send size={16} /></>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
