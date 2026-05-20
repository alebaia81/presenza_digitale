import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { m, AnimatePresence } from 'motion/react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-full bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-amber/40 shadow-md backdrop-blur-md flex items-center justify-center cursor-pointer group"
      aria-label={theme === 'dark' ? 'Passa al tema chiaro' : 'Passa al tema scuro'}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <m.div
            key="sun"
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="text-gold-amber flex items-center justify-center"
          >
            <Sun className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </m.div>
        ) : (
          <m.div
            key="moon"
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="text-stone-800 flex items-center justify-center"
          >
            <Moon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </m.div>
        )}
      </AnimatePresence>
    </button>
  );
}
