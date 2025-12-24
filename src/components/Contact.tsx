import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "dileepkumar@email.com",
    href: "mailto:dileepkumar@email.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: "#",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent! ✨",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-accent mb-4">
            Contact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let's{" "}
            <span className="text-gradient-accent">Work Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Get in touch 
            and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-center gap-4 glass rounded-xl p-5 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center 
                                group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  <p className="font-display font-medium">{info.value}</p>
                </div>
              </a>
            ))}

            <div className="glass rounded-xl p-6 mt-8">
              <h3 className="font-display font-semibold mb-3">Availability</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Currently accepting new freelance projects. Response time: within 24 hours.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-green-400">Available for work</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 glass rounded-2xl p-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground 
                             placeholder:text-muted-foreground focus:outline-none focus:ring-2 
                             focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground 
                             placeholder:text-muted-foreground focus:outline-none focus:ring-2 
                             focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground 
                           placeholder:text-muted-foreground focus:outline-none focus:ring-2 
                           focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground 
                           placeholder:text-muted-foreground focus:outline-none focus:ring-2 
                           focus:ring-primary/50 focus:border-primary transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-primary text-primary-foreground 
                         font-display font-semibold hover:opacity-90 transition-all duration-300 
                         flex items-center justify-center gap-2 disabled:opacity-50 glow"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
