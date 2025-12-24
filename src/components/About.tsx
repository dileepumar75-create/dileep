import { Code2, Palette, Rocket, Users } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Happy Clients", value: "10+" },
  { label: "Technologies", value: "12+" },
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code following best practices.",
  },
  {
    icon: Palette,
    title: "Modern Design",
    description: "Creating visually stunning interfaces with attention to every detail.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Delivering high-quality projects on time, every time.",
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Understanding your vision and bringing it to life perfectly.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
            About Me
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Passionate About Creating{" "}
            <span className="text-gradient">Digital Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm a dedicated freelance web developer with over a year of experience 
            in building modern, responsive, and user-centric web applications.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 
                              group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
