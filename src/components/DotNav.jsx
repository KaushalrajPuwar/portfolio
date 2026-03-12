import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG, SECTIONS } from '../config';

const DotNav = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  const filteredSections = SECTIONS.filter(
    (s) => s.id !== 'publications' || CONFIG.SHOW_PUBLICATIONS
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.3);

      const sections = filteredSections.map((s) => document.getElementById(s.id));
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActiveSection(filteredSections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredSections]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.4 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-4"
          aria-label="Section navigation"
        >
          {filteredSections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className="group flex items-center gap-3"
              aria-label={`Navigate to ${section.label}`}
            >
              <span
                className={`text-xs font-body tracking-wider uppercase transition-all duration-300 ${
                  activeSection === section.id
                    ? 'text-gold opacity-100 translate-x-0'
                    : 'text-muted opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                }`}
              >
                {section.label}
              </span>
              <span
                className={`block rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'w-3 h-3 bg-gold shadow-[0_0_10px_rgba(201,169,110,0.4)]'
                    : 'w-2 h-2 bg-muted/40 group-hover:bg-gold/60'
                }`}
              />
            </button>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default DotNav;
