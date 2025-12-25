import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "dileepumar75@gmail.com",
    href: "mailto:dileepumar75@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 XXXXX XXXXX",
    href: "tel:+92XXXXXXXXXX",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan",
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

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
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
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass text-xs sm:text-sm font-medium text-accent mb-3 sm:mb-4">
            Contact
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Let's{" "}
            <span className="text-gradient-accent">Work Together</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Get in touch 
            and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-center gap-3 sm:gap-4 glass rounded-lg sm:rounded-xl p-4 sm:p-5 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center 
                                group-hover:bg-primary/20 transition-colors shrink-0">
                  <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">{info.label}</p>
                  <p className="font-display font-medium text-sm sm:text-base truncate">{info.value}</p>
                </div>
              </a>
            ))}

            <div className="glass rounded-lg sm:rounded-xl p-4 sm:p-6 mt-6 sm:mt-8">
              <h3 className="font-display font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Availability</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                Currently accepting new freelance projects. Response time: within 24 hours.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-green-500 dark:text-green-400">Available for work</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 glass rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-muted border border-border text-foreground 
                             placeholder:text-muted-foreground focus:outline-none focus:ring-2 
                             focus:ring-primary/50 focus:border-primary transition-all text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-muted border border-border text-foreground 
                             placeholder:text-muted-foreground focus:outline-none focus:ring-2 
                             focus:ring-primary/50 focus:border-primary transition-all text-sm sm:text-base"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-4 sm:mb-6">
              <label htmlFor="subject" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-muted border border-border text-foreground 
                           placeholder:text-muted-foreground focus:outline-none focus:ring-2 
                           focus:ring-primary/50 focus:border-primary transition-all text-sm sm:text-base"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="mb-4 sm:mb-6">
              <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-muted border border-border text-foreground 
                           placeholder:text-muted-foreground focus:outline-none focus:ring-2 
                           focus:ring-primary/50 focus:border-primary transition-all resize-none text-sm sm:text-base"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-primary text-primary-foreground 
                         font-display font-semibold hover:opacity-90 transition-all duration-300 
                         flex items-center justify-center gap-2 disabled:opacity-50 glow text-sm sm:text-base"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
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
