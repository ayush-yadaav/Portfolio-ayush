import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code2, Rocket, Sparkles } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building scalable applications with MongoDB, Express, React, and Node.js",
    color: "from-primary to-secondary",
  },
  {
    icon: Brain,
     title: "AI Integration",
  description: "Enhancing user experiences by integrating AI-powered tools and APIs into applications.",
    color: "from-secondary to-accent",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency",
    color: "from-accent to-primary",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Always exploring new technologies and best practices",
    color: "from-primary to-accent",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate MERN-stack developer who loves turning ideas into
            elegant, functional web applications. With a keen eye for design and
            a commitment to clean code, I create digital experiences that matter.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Floating Particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-2 h-2 rounded-full bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-40`}
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${30 + i * 20}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      scale: [1, 1.5, 1],
                      opacity: [0, 0.4, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}

                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.color} mb-4 group-hover:shadow-[var(--glow-primary)] transition-all duration-300`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <skill.icon className="h-6 w-6 text-background" />
                  </motion.div>

                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>

                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default About;
