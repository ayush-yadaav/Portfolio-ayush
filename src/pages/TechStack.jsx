import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const technologies = [
  { name: "MongoDB", icon: "🍃", color: "from-green-400 to-green-600" },
  { name: "Express", icon: "⚡", color: "from-gray-400 to-gray-600" },
  { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-600" },
  { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-700" },
  { name: "TypeScript", icon: "📘", color: "from-blue-400 to-blue-600" },
  { name: "Tailwind", icon: "🎨", color: "from-cyan-300 to-cyan-500" },
  { name: "Git", icon: "🔧", color: "from-orange-400 to-red-600" },
  { name: "Vercel", icon: "▲", color: "from-zinc-500 to-zinc-700" },
  { name: "Framer Motion", icon: "🎞️", color: "from-pink-400 to-purple-600" },
  { name: "RESTful APIs", icon: "🌐", color: "from-blue-400 to-indigo-500" },
  { name: "JWT Auth", icon: "🔒", color: "from-amber-500 to-orange-600" },
  { name: "Postman", icon: "📮", color: "from-orange-400 to-orange-600" },
];

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px]" />
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
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Grid of Technologies */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.15, y: -8 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="group relative p-6 rounded-2xl bg-gray-900 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden cursor-pointer"
              >
                {/* Gradient Hover Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(59,130,246,0)",
                      "0 0 30px rgba(59,130,246,0.4)",
                      "0 0 0px rgba(59,130,246,0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Floating Sparkles */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      left: `${25 + i * 20}%`,
                      top: `${25 + (i % 2) * 50}%`,
                    }}
                    animate={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}

                {/* Icon + Name */}
                <div className="relative z-10 text-center">
                  <motion.div
                    className="text-4xl mb-3"
                    whileHover={{
                      rotate: [0, -15, 15, -15, 15, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <h3 className="font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
                    {tech.name}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default TechStack;
