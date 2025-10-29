import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "../assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#0b0b13]"
    >
      {/* ---------- Animated Background ---------- */}
      <div className="absolute inset-0 z-0">
        {/* optional background image */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* gradient fade layer for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b13] via-[#0b0b13]/80 to-[#0b0b13]" />

        {/* floating dots */}
        {[...Array(60)].map((_, i) => {
          const colors = ["bg-cyan-400", "bg-purple-500", "bg-fuchsia-500"];
          const sizes = ["w-1 h-1", "w-1.5 h-1.5", "w-0.5 h-0.5"];
          return (
            <motion.div
              key={i}
              className={`absolute ${colors[i % 3]} ${sizes[i % 3]} rounded-full`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: "blur(1px)",
              }}
              animate={{
                y: [0, -80 - Math.random() * 100, 0],
                x: [0, Math.random() * 60 - 30, 0],
                opacity: [0, 0.8, 0],
                scale: [0.2, 1.5, 0.2],
              }}
              transition={{
                duration: 5 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* faint horizontal lines */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent"
            style={{ top: `${15 + i * 12}%`, left: 0, right: 0 }}
            animate={{ opacity: [0, 0.5, 0], scaleX: [0.5, 1, 0.5] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* ---------- Foreground Content ---------- */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-lg font-mono text-purple-300 mb-4">
            {"<"}Hello World {" />"}
          </span>

          {/* main heading */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-500 bg-[length:200%_100%] bg-clip-text text-transparent">
              Hi, I'm Ayush Yadav
            </span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            I build{" "}
            <span className="text-cyan-400 font-semibold">
              clever web experiences
            </span>{" "}
            with the MERN stack
          </motion.p>

          {/* buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            {/* gradient "View My Work" button */}
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center justify-center px-8 py-4 rounded-lg text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 text-lg font-medium"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* outline "Get In Touch" button */}
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 text-lg font-medium"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* social icons + scroll indicator below */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-col items-center gap-8"
          >
            {/* icon row */}
            <div className="flex justify-center gap-6">
              {[
                { Icon: Github, href: "https://github.com/ayush-yadaav", label: "GitHub" },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/ayush-yadaav/",
                  label: "LinkedIn",
                },
                { Icon: Mail, href: "mailto:csayush27@email.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-cyan-400/40 hover:border-cyan-400 hover:shadow-[0_0_10px_#00ffff] transition-all duration-300 hover:scale-110"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-6 w-6 text-gray-300 hover:text-cyan-400 transition-colors" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </div>

            {/* scroll indicator under icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-8"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center pt-2 mx-auto"
              >
                <motion.div className="w-1.5 h-3 bg-cyan-400 rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;