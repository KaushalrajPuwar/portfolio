import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFileText, FiCode, FiCpu } from 'react-icons/fi';

// Public options on the main site only. Viewer (resume.html) also supports `ui`.
const RESUMES = [
    {
        key: 'sde',
        label: 'SDE Resume',
        short: 'SDE',
        href: '/resume.html?type=sde',
        Icon: FiCode,
    },
    {
        key: 'ml',
        label: 'ML Resume',
        short: 'ML',
        href: '/resume.html?type=ml',
        Icon: FiCpu,
    },
];

// Keys the resume viewer can open. Includes `ui` so a preference set in the
// viewer still deep-links correctly from "View Resume" without exposing UI here.
const VALID_PREF_KEYS = new Set(['sde', 'ml', 'ui']);
const PREF_KEY = 'preferred-resume';
const DEFAULT_PREF = 'sde';

const getPreferred = () => {
    if (typeof window === 'undefined') return DEFAULT_PREF;
    try {
        const stored = window.localStorage.getItem(PREF_KEY);
        return VALID_PREF_KEYS.has(stored) ? stored : DEFAULT_PREF;
    } catch {
        return DEFAULT_PREF;
    }
};

const setPreferred = (key) => {
    if (!VALID_PREF_KEYS.has(key)) return;
    try {
        window.localStorage.setItem(PREF_KEY, key);
    } catch {
        // Storage unavailable — silently ignore
    }
};

// ── Dropdown menu panel (shared) ────────────────────────────────────────────

const ResumeDropdown = ({ onSelect, align = 'left' }) => (
    <motion.div
        initial={{ opacity: 0, y: -6, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -6, scale: 0.97 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        role="menu"
        aria-label="Choose resume"
        className={`absolute top-full mt-2 min-w-[180px] z-50
            bg-surface-light border border-line rounded-md
            shadow-xl shadow-black/40 overflow-hidden
            ${align === 'right' ? 'right-0' : 'left-0'}`}
    >
        {RESUMES.map((resume) => {
            const IconComp = resume.Icon;
            return (
                <a
                    key={resume.key}
                    href={resume.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                    onClick={() => {
                        setPreferred(resume.key);
                        onSelect?.();
                    }}
                    className="flex items-center gap-3 px-4 py-3
                        font-body text-sm text-cream/80
                        hover:bg-gold/10 hover:text-gold
                        transition-colors duration-200
                        border-b border-line/50 last:border-b-0"
                >
                    <IconComp size={15} className="shrink-0 text-muted group-hover:text-gold" />
                    <span>{resume.label}</span>
                </a>
            );
        })}
    </motion.div>
);

// ── Split button mode (used in Hero) ────────────────────────────────────────

const ExternalIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16" height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ml-1"
    >
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
);

const SplitResumeButton = () => {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    // Close on outside click / Escape
    useEffect(() => {
        if (!open) return;
        const handleClick = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        const handleKey = (e) => {
            if (e.key === 'Escape') setOpen(false);
        };
        document.addEventListener('mousedown', handleClick);
        document.addEventListener('keydown', handleKey);
        return () => {
            document.removeEventListener('mousedown', handleClick);
            document.removeEventListener('keydown', handleKey);
        };
    }, [open]);

    const preferred = getPreferred();
    const mainHref = `/resume.html?type=${preferred}`;

    return (
        <div ref={wrapperRef} className="relative inline-flex">
            <a
                href={mainHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-r-none -mr-px flex items-center"
            >
                View Resume
                <ExternalIcon />
            </a>
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-label="Choose resume"
                aria-haspopup="menu"
                aria-expanded={open}
                className="btn-primary rounded-l-none px-3 flex items-center justify-center"
            >
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14" height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <path d="m6 9 6 6 6-6" />
                </motion.svg>
            </button>

            <AnimatePresence>
                {open && <ResumeDropdown onSelect={() => setOpen(false)} align="right" />}
            </AnimatePresence>
        </div>
    );
};

// ── Icon mode (used in About social row) ────────────────────────────────────

const IconResumeButton = () => {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        if (!open) return;
        const handleClick = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        const handleKey = (e) => {
            if (e.key === 'Escape') setOpen(false);
        };
        document.addEventListener('mousedown', handleClick);
        document.addEventListener('keydown', handleKey);
        return () => {
            document.removeEventListener('mousedown', handleClick);
            document.removeEventListener('keydown', handleKey);
        };
    }, [open]);

    return (
        <div ref={wrapperRef} className="relative inline-block">
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-label="Resume"
                aria-haspopup="menu"
                aria-expanded={open}
                className="text-muted hover:text-gold transition-colors duration-300"
            >
                <FiFileText size={25} />
            </button>

            <AnimatePresence>
                {open && <ResumeDropdown onSelect={() => setOpen(false)} align="left" />}
            </AnimatePresence>
        </div>
    );
};

// ── Public exports ──────────────────────────────────────────────────────────

export const ResumeMenu = SplitResumeButton;
export const ResumeIconMenu = IconResumeButton;
export default SplitResumeButton;
