import { motion } from "framer-motion";

const SectionDivider = ({ variant = "default" }) => {
  if (variant === "dots") {
    return (
      <div className="relative py-16 overflow-hidden">
        <div className="flex justify-center items-center gap-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              style={{
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div className="relative py-16 overflow-hidden">
        <svg
          className="w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,50 Q300,0 600,50 T1200,50"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="50%" stopColor="hsl(var(--secondary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div className="relative py-16 overflow-hidden">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            whileInView={{ scale: 1, rotate: 180 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full opacity-50"
            animate={{
              rotate: [180, 540],
              scale: [1, 1.2, 1],
            }}
            style={{
              animationDuration: "4s",
              animationIterationCount: "infinite",
            }}
          />
        </div>
      </div>
    );
  }

  // Default variant - particles
  return (
    <div className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${(i / 15) * 100}%`,
            }}
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: [-20, 20], opacity: [0, 1, 0] }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        ))}
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent"
      />
    </div>
  );
};

export default SectionDivider;
