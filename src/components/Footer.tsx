import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-primary border-t border-secondary mt-12 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
        <p>&copy; 2024 Football Wallpaper App. All rights reserved.</p>
        <p className="mt-2 text-sm">Admin Email: footemjid@gmail.com</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
