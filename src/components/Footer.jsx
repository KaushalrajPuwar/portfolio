import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiHeart } from 'react-icons/fi';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: FiGithub, href: '#', label: 'GitHub' },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiTwitter, href: '#', label: 'Twitter' },
  { icon: FiMail, href: 'mailto:hello@kaushalraj.dev', label: 'Email' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-line">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <button
              onClick={scrollToTop}
              className="font-heading text-2xl text-cream hover:text-gold transition-colors duration-300"
            >
              Kaushalraj Puwar
            </button>
            <p className="font-body text-sm text-muted mt-2 leading-relaxed max-w-xs">
              Computer science student, builder, and lifelong learner. This is my corner of the web.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col items-start md:items-center">
            <p className="font-body text-xs text-muted tracking-widest uppercase mb-4">
              Navigate
            </p>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-sm text-cream/60 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="flex flex-col items-start md:items-end">
            <p className="font-body text-xs text-muted tracking-widest uppercase mb-4">
              Connect
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted/60 hover:text-gold transition-colors duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-line/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted/50">
            © {new Date().getFullYear()} Kaushalraj Puwar. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted/40 flex items-center gap-1">
            Built with <FiHeart size={11} className="text-gold/50" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
