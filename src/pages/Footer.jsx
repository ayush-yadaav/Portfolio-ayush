import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800 backdrop-blur-sm bg-black text-gray-400">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center gap-2"
        >
          <p className="text-sm flex items-center gap-2">
            © {new Date().getFullYear()} Ayush Yadav.
      
          </p>
          <p className="text-xs text-gray-500">
            Designed with passion and crafted for performance ⚡
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
