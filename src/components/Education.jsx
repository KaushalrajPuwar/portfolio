import ScrollReveal from './ScrollReveal';
import { education } from '../data/education';

const Education = () => {
  return (
    <section id="education" className="py-24 lg:py-32">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-heading">Education</h2>
          <p className="section-subheading">The path so far</p>
          <div className="gold-line" />
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold/30 via-gold/10 to-transparent" />

          <div className="space-y-12">
            {education.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.12}>
                <div className="relative pl-12 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-8 top-2 -translate-x-1/2">
                    <div className="w-3 h-3 rounded-full bg-gold shadow-[0_0_12px_rgba(201,169,110,0.4)]" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-gold/30 animate-ping" style={{ animationDuration: '3s' }} />
                  </div>

                  {/* Content */}
                  <div className="card">
                    <span className="inline-block text-xs font-body text-gold tracking-widest uppercase mb-3">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-2xl md:text-[1.65rem] text-cream font-normal mb-1">
                      {item.title}
                    </h3>
                    <p className="font-heading text-base text-muted italic mb-4">
                      {item.institution}
                    </p>
                    <p className="font-body text-sm text-cream/60 leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Course / Highlight tags */}
                    {item.highlights && (
                      <div className="flex flex-wrap gap-1.5">
                        {item.highlights.map((h) => (
                          <span
                            key={h}
                            className="px-2.5 py-0.5 text-xs font-body text-muted bg-surface-light rounded border border-line"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
