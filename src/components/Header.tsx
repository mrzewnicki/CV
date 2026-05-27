import { motion } from 'framer-motion';
import { cvData } from '../data/cv';

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-cv-surface to-cv-main px-6 py-6 border-b border-cv-accent/30">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-5xl font-black tracking-tight text-white leading-none"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="block text-gray-400 text-2xl font-light tracking-[0.15em] uppercase mb-1">
            {cvData.name.first}
          </span>
          <span className="text-cv-accent">{cvData.name.last.toUpperCase()}</span>
        </motion.h1>
      </motion.div>
    </div>
  );
}
