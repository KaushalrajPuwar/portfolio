import { CONFIG } from '../config';
import ScrollReveal from './ScrollReveal';

const Publications = () => {
  // This section can be toggled off entirely via CONFIG.SHOW_PUBLICATIONS
  if (!CONFIG.SHOW_PUBLICATIONS) return null;

  return (
    <section id="publications" className="py-24 lg:py-32">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-heading">Publications</h2>
          <p className="section-subheading">Research & writing</p>
          <div className="gold-line" />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="max-w-2xl">
            <div className="card relative overflow-hidden">
              {/* Decorative background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03]">
                <svg viewBox="0 0 100 100" fill="currentColor" className="text-gold">
                  <circle cx="20" cy="20" r="2" />
                  <circle cx="40" cy="20" r="2" />
                  <circle cx="60" cy="20" r="2" />
                  <circle cx="80" cy="20" r="2" />
                  <circle cx="20" cy="40" r="2" />
                  <circle cx="40" cy="40" r="2" />
                  <circle cx="60" cy="40" r="2" />
                  <circle cx="80" cy="40" r="2" />
                  <circle cx="20" cy="60" r="2" />
                  <circle cx="40" cy="60" r="2" />
                  <circle cx="60" cy="60" r="2" />
                  <circle cx="80" cy="60" r="2" />
                  <circle cx="20" cy="80" r="2" />
                  <circle cx="40" cy="80" r="2" />
                  <circle cx="60" cy="80" r="2" />
                  <circle cx="80" cy="80" r="2" />
                </svg>
              </div>

              <div className="relative z-10 py-4">
                <p className="font-heading text-2xl md:text-3xl text-cream/80 font-light leading-relaxed">
                  Nothing here yet -
                  <br />
                  <span className="text-gold italic">but watch this space.</span>
                </p>
                <p className="font-body text-sm text-muted mt-4 leading-relaxed max-w-md">
                  I&apos;m currently exploring research directions in machine learning and
                  distributed systems. Publications will appear here as they come.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Publications;
