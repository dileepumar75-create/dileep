const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3 / Tailwind", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "Git / GitHub", level: 85 },
  { name: "Responsive Design", level: 95 },
];

const technologies = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", 
  "Tailwind CSS", "Node.js", "Git", "Figma", "REST APIs", "MongoDB"
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-accent mb-4">
            My Skills
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Technologies I{" "}
            <span className="text-gradient-accent">Work With</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Constantly learning and mastering the latest web technologies 
            to deliver cutting-edge solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skill Bars */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-display font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      background: index % 2 === 0 
                        ? 'linear-gradient(90deg, hsl(210 76% 55%), hsl(222 76% 45%))'
                        : 'linear-gradient(90deg, hsl(12 76% 65%), hsl(25 90% 55%))',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Technology Tags */}
          <div className="glass rounded-2xl p-8">
            <h3 className="font-display text-xl font-semibold mb-6">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-muted text-sm font-medium text-foreground
                             hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="font-display font-semibold mb-3">Currently Learning</h4>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "GraphQL", "Docker"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg border border-accent/50 text-accent text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
