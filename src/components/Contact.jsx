import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { SiGithub, SiX, SiGmail } from 'react-icons/si';
import ScrollReveal from './ScrollReveal';

const socials = [
    { icon: SiGithub,   href: 'https://github.com/KaushalrajPuwar',        label: 'GitHub'   },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/kaushalrajpuwar',    label: 'LinkedIn' },
    { icon: SiX,        href: 'https://x.com/kaushalrajpuwar',              label: 'X'        },
    { icon: SiGmail,    href: 'mailto:kaushalrajpuwar@gmail.com',           label: 'GMail'    },
];

const MAX_MESSAGE_LENGTH = 1000;

// Validate email with a simple but solid regex
const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

const INITIAL_FORM  = { name: '', email: '', message: '' };
const INITIAL_ERRORS = { name: '', email: '', message: '' };

const Contact = () => {
    const [formState,  setFormState]  = useState(INITIAL_FORM);
    const [errors,     setErrors]     = useState(INITIAL_ERRORS);
    const [touched,    setTouched]    = useState({ name: false, email: false, message: false });
    const [status,     setStatus]     = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

    const firstFieldRef  = useRef(null);
    const statusRegionRef = useRef(null);

    // ── Inline validation ────────────────────────────────────────────────────
    const validate = (field, value) => {
        switch (field) {
            case 'name':
                return value.trim().length < 2 ? 'Name must be at least 2 characters.' : '';
            case 'email':
                return !isValidEmail(value) ? 'Please enter a valid email address.' : '';
            case 'message':
                if (value.trim().length < 10)  return 'Message must be at least 10 characters.';
                if (value.length > MAX_MESSAGE_LENGTH) return `Message must be under ${MAX_MESSAGE_LENGTH} characters.`;
                return '';
            default:
                return '';
        }
    };

    const validateAll = () => {
        const next = {
            name:    validate('name',    formState.name),
            email:   validate('email',   formState.email),
            message: validate('message', formState.message),
        };
        setErrors(next);
        setTouched({ name: true, email: true, message: true });
        return Object.values(next).every((e) => e === '');
    };

    // Re-validate a field whenever its value changes (only if already touched)
    useEffect(() => {
        setErrors((prev) => ({
            name:    touched.name    ? validate('name',    formState.name)    : prev.name,
            email:   touched.email   ? validate('email',   formState.email)   : prev.email,
            message: touched.message ? validate('message', formState.message) : prev.message,
        }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formState]);

    // ── Handlers ─────────────────────────────────────────────────────────────
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        setErrors((prev)  => ({ ...prev, [name]: validate(name, formState[name]) }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateAll()) {
            // Focus the first invalid field
            const firstInvalid = ['name', 'email', 'message'].find(
                (f) => validate(f, formState[f]) !== ''
            );
            if (firstInvalid) {
                document.getElementById(firstInvalid)?.focus();
            }
            return;
        }

        setStatus('loading');

        const data = {
            access_key: 'f072b624-fd87-4890-908a-c032a28d2fab',
            name:       formState.name.trim(),
            email:      formState.email.trim(),
            message:    formState.message.trim(),
            from_name: `${formState.name.trim()} - ${formState.email.trim()}`,
            to:         'web3formsportfolio.gotten403@passinbox.com',
            subject: `Portfolio Contact Message from ${formState.name.trim()}`,
            // Honeypot — Web3Forms ignores submissions where this is filled
            botcheck:   '',
        };

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormState(INITIAL_FORM);
                setTouched({ name: false, email: false, message: false });
                setErrors(INITIAL_ERRORS);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const handleReset = () => {
        setStatus('idle');
        setTimeout(() => firstFieldRef.current?.focus(), 50);
    };

    const isLoading = status === 'loading';

    // ── Helpers ───────────────────────────────────────────────────────────────
    const fieldClass = (field) =>
        `input-field${errors[field] && touched[field] ? ' border-red-500/60 focus:border-red-500' : ''}`;

    const charsLeft = MAX_MESSAGE_LENGTH - formState.message.length;

    return (
        <section id="contact" className="py-24 lg:py-32 relative">
            {/* Top gradient divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />

            <div className="section-container">
                <ScrollReveal>
                    <h2 className="section-heading">Get in Touch</h2>
                    <p className="section-subheading">Let&apos;s start a conversation</p>
                    <div className="gold-line" />
                </ScrollReveal>

                <div className="grid md:grid-cols-5 gap-12 lg:gap-16">
                    {/* ── Left — context + socials ─────────────────────────── */}
                    <ScrollReveal direction="left" delay={0.1} className="md:col-span-2">
                        <div className="space-y-6">
                            <p className="font-body text-cream/70 text-base leading-relaxed">
                                Whether you want to collaborate on a project, talk about research, or just say hi - I&apos;d love to hear from you. I&apos;m always open to interesting conversations and discussing new ideas.
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
                                    href="mailto:kaushalrajpuwar@gmail.com"
                                    className="font-body text-gold hover:text-gold-light transition-colors duration-300"
                                >
                                    kaushalrajpuwar@gmail.com
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* ── Right — form ─────────────────────────────────────── */}
                    <ScrollReveal direction="right" delay={0.2} className="md:col-span-3">
                        {/* Live region so screen readers announce state changes */}
                        <div
                            ref={statusRegionRef}
                            aria-live="polite"
                            aria-atomic="true"
                            className="sr-only"
                        >
                            {status === 'success' && 'Message sent successfully.'}
                            {status === 'error'   && 'There was an error sending your message. Please try again.'}
                        </div>

                        <AnimatePresence mode="wait">
                            {/* ── Success ── */}
                            {status === 'success' && (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.35 }}
                                    className="card flex flex-col items-center justify-center text-center py-16"
                                    role="status"
                                >
                                    <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-5">
                                        <FiCheck size={24} className="text-gold" />
                                    </div>
                                    <h3 className="font-heading text-2xl text-cream font-light mb-2">
                                        Message received
                                    </h3>
                                    <p className="font-body text-sm text-muted max-w-sm mb-6">
                                        Thank you for reaching out. I&apos;ll get back to you as soon as I can.
                                    </p>
                                    <button
                                        onClick={handleReset}
                                        className="font-body text-xs text-muted hover:text-gold underline underline-offset-4 transition-colors duration-200"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            )}

                            {/* ── Error banner + form ── */}
                            {status !== 'success' && (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    {/* Submission error banner */}
                                    <AnimatePresence>
                                        {status === 'error' && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -8 }}
                                                transition={{ duration: 0.25 }}
                                                role="alert"
                                                className="flex items-start gap-3 mb-5 px-4 py-3 rounded-lg border border-red-500/30 bg-red-500/5 text-red-400"
                                            >
                                                <FiAlertCircle size={16} className="mt-0.5 shrink-0" />
                                                <p className="font-body text-sm leading-relaxed">
                                                    Something went wrong — please try again in a moment, or reach
                                                    out directly via email.
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <form
                                        onSubmit={handleSubmit}
                                        noValidate
                                        className="space-y-5"
                                        aria-label="Contact form"
                                    >
                                        {/* Honeypot — hidden from real users, catches bots */}
                                        <input
                                            type="checkbox"
                                            name="botcheck"
                                            tabIndex={-1}
                                            aria-hidden="true"
                                            className="hidden"
                                        />

                                        {/* Name + Email row */}
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            {/* Name */}
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="block text-xs font-body text-muted tracking-wider uppercase mb-2"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    ref={firstFieldRef}
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    autoComplete="name"
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder="Your name"
                                                    required
                                                    aria-required="true"
                                                    aria-invalid={!!(errors.name && touched.name)}
                                                    aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                                                    disabled={isLoading}
                                                    className={fieldClass('name')}
                                                />
                                                <AnimatePresence>
                                                    {errors.name && touched.name && (
                                                        <FieldError id="name-error" message={errors.name} />
                                                    )}
                                                </AnimatePresence>
                                            </div>

                                            {/* Email */}
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block text-xs font-body text-muted tracking-wider uppercase mb-2"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder="you@example.com"
                                                    required
                                                    aria-required="true"
                                                    aria-invalid={!!(errors.email && touched.email)}
                                                    aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                                                    disabled={isLoading}
                                                    className={fieldClass('email')}
                                                />
                                                <AnimatePresence>
                                                    {errors.email && touched.email && (
                                                        <FieldError id="email-error" message={errors.email} />
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <label
                                                    htmlFor="message"
                                                    className="block text-xs font-body text-muted tracking-wider uppercase"
                                                >
                                                    Message
                                                </label>
                                                <span
                                                    className={`text-xs font-body tabular-nums transition-colors duration-200 ${
                                                        charsLeft < 50 ? 'text-red-400' : 'text-muted'
                                                    }`}
                                                    aria-live="polite"
                                                    aria-label={`${charsLeft} characters remaining`}
                                                >
                                                    {charsLeft}
                                                </span>
                                            </div>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formState.message}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="What's on your mind?"
                                                rows={5}
                                                required
                                                aria-required="true"
                                                aria-invalid={!!(errors.message && touched.message)}
                                                aria-describedby={
                                                    errors.message && touched.message ? 'message-error' : undefined
                                                }
                                                disabled={isLoading}
                                                className={`${fieldClass('message')} resize-none`}
                                            />
                                            <AnimatePresence>
                                                {errors.message && touched.message && (
                                                    <FieldError id="message-error" message={errors.message} />
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            aria-disabled={isLoading}
                                            className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            <AnimatePresence mode="wait" initial={false}>
                                                {isLoading ? (
                                                    <motion.span
                                                        key="loading"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        className="flex items-center gap-2"
                                                    >
                                                        <Spinner />
                                                        Sending…
                                                    </motion.span>
                                                ) : (
                                                    <motion.span
                                                        key="idle"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        className="flex items-center gap-2"
                                                    >
                                                        Send Message
                                                        <FiSend size={14} />
                                                    </motion.span>
                                                )}
                                            </AnimatePresence>
                                        </button>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

// ── Small sub-components ──────────────────────────────────────────────────────

const FieldError = ({ id, message }) => (
    <motion.p
        id={id}
        role="alert"
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.2 }}
        className="mt-1.5 flex items-center gap-1.5 text-xs font-body text-red-400"
    >
        <FiAlertCircle size={11} className="shrink-0" />
        {message}
    </motion.p>
);

const Spinner = () => (
    <svg
        className="animate-spin h-3.5 w-3.5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
    </svg>
);

export default Contact;
