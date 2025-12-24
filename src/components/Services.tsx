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
    <section id="services" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass text-xs sm:text-sm font-medium text-primary mb-3 sm:mb-4">
            Services
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            What I Can{" "}
            <span className="text-gradient">Do For You</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Offering comprehensive web development services to help bring 
            your digital vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 
                                flex items-center justify-center shrink-0
                                group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-muted text-[10px] sm:text-xs font-medium text-muted-foreground"
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
        <div className="mt-10 sm:mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-6 items-center glass rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
            <div className="text-center sm:text-left">
              <h3 className="font-display text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Have a project in mind?</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">Let's discuss how I can help you achieve your goals.</p>
            </div>
            <a
              href="#contact"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-accent text-accent-foreground font-display font-semibold 
                         hover:opacity-90 transition-all duration-300 whitespace-nowrap text-sm sm:text-base"
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
