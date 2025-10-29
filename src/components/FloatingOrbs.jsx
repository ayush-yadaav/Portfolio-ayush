import React from "react";
import { motion } from "framer-motion";

const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large Orb 1 */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Large Orb 2 */}
      <motion.div
        className="absolute top-1/3 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Large Orb 3 */}
      <motion.div
        className="absolute bottom-20 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px]"
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default FloatingOrbs;
