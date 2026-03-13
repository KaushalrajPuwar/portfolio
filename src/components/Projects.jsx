import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiClock } from 'react-icons/fi';
import { SiGithub } from "react-icons/si";
import ScrollReveal from './ScrollReveal';
import { projects, categories } from '../data/projects';

const ProjectCard = ({ project }) => {
  const isInProgress = project.status === 'in-progress';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
        opacity: { duration: 0.3 },
        y: { duration: 0.3 },
      }}
      className="card group relative h-full flex flex-col"
    >
      {/* Status badge */}
      {isInProgress && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold/10 border border-gold/20">
          <FiClock size={12} className="text-gold" />
          <span className="text-xs text-gold font-body">In Progress</span>
        </div>
      )}

      {/* Title */}
      <h3 className="font-heading text-2xl md:text-[1.65rem] text-cream font-normal mb-3 pr-24 group-hover:text-gold transition-colors duration-300">
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-cream/60 leading-relaxed mb-5 flex-grow">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-0.5 text-xs font-body text-muted bg-surface-light rounded border border-line"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-2 border-t border-line">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted hover:text-gold transition-colors duration-300 font-body"
          >
            <SiGithub size={15} />
            <span>Source</span>
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted hover:text-gold transition-colors duration-300 font-body"
          >
            <FiExternalLink size={15} />
            <span>Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-heading">Projects</h2>
          <p className="section-subheading">Things I&apos;ve built and things I&apos;m building</p>
          <div className="gold-line" />
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-5 py-2 rounded-full text-sm font-body tracking-wide transition-all duration-300 ${
                  activeFilter === cat.key
                    ? 'bg-gold text-dark'
                    : 'bg-surface text-muted border border-line hover:border-gold/30 hover:text-cream'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Project grid */}
        <motion.div
          layout
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="sync">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
