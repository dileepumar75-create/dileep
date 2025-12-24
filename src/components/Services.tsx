import { Globe, Layout, Smartphone, Zap } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Website Development",
    description: "Custom, responsive websites built with modern technologies that look great on all devices.",
    features: ["Custom Design", "SEO Optimized", "Fast Loading"],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first approach ensuring your website works flawlessly across all screen sizes.",
    features: ["Mobile First", "Cross-Browser", "Retina Ready"],
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Interactive web applications with modern frameworks for enhanced user experience.",
    features: ["React/Next.js", "API Integration", "Real-time Features"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your existing website for better user experience and SEO rankings.",
    features: ["Core Web Vitals", "Image Optimization", "Code Splitting"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
            Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What I Can{" "}
            <span className="text-gradient">Do For You</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Offering comprehensive web development services to help bring 
            your digital vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 
                                flex items-center justify-center shrink-0
                                group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center glass rounded-2xl p-8">
            <div className="text-center sm:text-left">
              <h3 className="font-display text-xl font-semibold mb-2">Have a project in mind?</h3>
              <p className="text-muted-foreground text-sm">Let's discuss how I can help you achieve your goals.</p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-semibold 
                         hover:opacity-90 transition-all duration-300 whitespace-nowrap"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
