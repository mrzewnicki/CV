import { motion } from 'framer-motion';
import { cvData } from '../data/cv';

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-[#0f3460] to-[#16213e] px-10 py-10 border-b border-[#e94560]/30">
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
          <span className="text-[#e94560]">{cvData.name.last.toUpperCase()}</span>
        </motion.h1>

        <motion.div
          className="mt-3 flex gap-3 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {['Full-Stack Developer', 'Lead Developer', '.NET · React · Azure'].map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full border border-[#e94560]/50 text-[#e94560] font-medium tracking-wider"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
