import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiSend, FiCheck } from 'react-icons/fi';
import ScrollReveal from './ScrollReveal';

const socials = [
  { icon: FiGithub, href: '#', label: 'GitHub' },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiTwitter, href: '#', label: 'Twitter' },
  { icon: FiMail, href: 'mailto:hello@kaushalraj.dev', label: 'Email' },
];

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Currently a visual placeholder.
    // To make this functional, integrate with one of:
    //   • EmailJS (https://emailjs.com)     — sends email directly from the browser
    //   • Formspree (https://formspree.io)  — form backend, no server needed
    //   • Web3Forms (https://web3forms.com) — free, simple API
    // Each just requires adding your service key and hitting their API in this handler.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      {/* Subtle top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />

      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-heading">Get in Touch</h2>
          <p className="section-subheading">Let&apos;s start a conversation</p>
          <div className="gold-line" />
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — context + socials */}
          <ScrollReveal direction="left" delay={0.1} className="md:col-span-2">
            <div className="space-y-6">
              <p className="font-body text-cream/70 text-base leading-relaxed">
                Whether you want to collaborate on a project, talk about research, or just
                say hi — I&apos;d love to hear from you. I&apos;m always open to interesting
                conversations and new ideas.
              </p>

              <div className="space-y-3">
                <p className="font-body text-sm text-muted tracking-wider uppercase">
                  Find me elsewhere
                </p>
                <div className="flex items-center gap-4">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-muted hover:text-gold hover:border-gold/40 transition-all duration-300"
                    >
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <p className="font-body text-sm text-muted">
                  Or email me directly at
                </p>
                <a
                  href="mailto:hello@kaushalraj.dev"
                  className="font-body text-gold hover:text-gold-light transition-colors duration-300"
                >
                  hello@kaushalraj.dev
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal direction="right" delay={0.2} className="md:col-span-3">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="card flex flex-col items-center justify-center text-center py-16"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-5">
                    <FiCheck size={24} className="text-gold" />
                  </div>
                  <h3 className="font-heading text-2xl text-cream font-light mb-2">
                    Message received
                  </h3>
                  <p className="font-body text-sm text-muted max-w-sm">
                    Thank you for reaching out. I&apos;ll get back to you as soon as I can.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-body text-muted tracking-wider uppercase mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-body text-muted tracking-wider uppercase mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-body text-muted tracking-wider uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="What's on your mind?"
                      rows={5}
                      required
                      className="input-field resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary">
                    <span>Send Message</span>
                    <FiSend size={14} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
