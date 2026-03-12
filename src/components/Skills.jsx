import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { skillCategories } from '../data/skills';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <h2 className="section-heading">Skills & Stack</h2>
          <p className="section-subheading">Technologies I work with</p>
          <div className="gold-line" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, catIdx) => (
            <ScrollReveal key={category.name} delay={catIdx * 0.1}>
              <div className="card group h-full">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-gold text-xl">{category.icon}</span>
                  <h3 className="font-heading text-2xl text-cream font-light">
                    {category.name}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`px-3.5 py-1.5 rounded-full text-sm font-body transition-all duration-300 cursor-default
                        ${
                          hoveredSkill === skill
                            ? 'bg-gold/20 text-gold border border-gold/40 shadow-[0_0_15px_rgba(201,169,110,0.15)]'
                            : 'bg-surface-light text-cream/70 border border-line hover:border-gold/30'
                        }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
