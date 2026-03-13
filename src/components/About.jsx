import { useState, useEffect } from 'react';
import { FiLinkedin } from 'react-icons/fi';
import { SiGithub, SiX, SiGmail } from "react-icons/si";
import ScrollReveal from './ScrollReveal';
import GlareHover from './GlareHover';
import TiltedCard from './TiltedCard';
import { CONFIG, GLARE_CONFIG, TILT_CONFIG } from '../config';

// ──────────────────────────────────────────────────────
// 📸 YOUR PHOTO: Uncomment the line below and replace
//    "your-photo.jpg" with your actual image filename.
//    Place your image in: src/assets/your-photo.jpg
// ──────────────────────────────────────────────────────
import profilePhoto from '../assets/photo.jpeg';
// const profilePhoto = null; // ← remove this line once you uncomment the import above

const socials = [
    { icon: SiGithub, href: 'https://github.com/KaushalrajPuwar', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/kaushalrajpuwar', label: 'LinkedIn' },
    { icon: SiX, href: 'https://x.com/kaushalrajpuwar', label: 'X' },
    { icon: SiGmail, href: 'mailto:kaushalrajpuwar@gmail.com', label: 'GMail' },
];

const About = () => {
    // Detect if device supports hover (disables effects on mobile/tablets)
    const [canHover, setCanHover] = useState(() => 
        window.matchMedia('(hover: hover) and (pointer: fine)').matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
        
        const handler = (e) => setCanHover(e.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    // Derived flags: only show effects if config allows AND device supports hover
    const showTilt = CONFIG.SHOW_ABOUT_TILT && canHover;
    const showGlare = CONFIG.SHOW_ABOUT_GLARE && canHover;
    // Helper to render decorative corners
    const decorativeCorners = (
        <>
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-gold/30 pointer-events-none z-20" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-gold/30 pointer-events-none z-20" />
        </>
    );

    // Helper to render the photo or placeholder
    const renderPhotoContent = () => (
        <div className="w-full h-full rounded-lg bg-surface border border-line overflow-hidden flex items-center justify-center">
            {profilePhoto ? (
                <img
                    src={profilePhoto}
                    alt="Kaushalraj Puwar"
                    className="w-full h-full object-cover"
                />
            ) : (
                <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                        <span className="font-heading text-3xl text-gold">KP</span>
                    </div>
                    <p className="text-muted text-sm font-body">Photo placeholder</p>
                </div>
            )}
        </div>
    );

    return (
        <section id="about" className="py-24 lg:py-32">
            <div className="section-container">
                <ScrollReveal>
                    <h2 className="section-heading">About Me</h2>
                    <div className="gold-line" />
                </ScrollReveal>

                <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
                    {/* Avatar / Photo */}
                    <ScrollReveal direction="left" delay={0.1} className="md:col-span-2">
                        <div className="relative aspect-[4/5] max-w-sm mx-auto md:mx-0 rounded-lg">
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-gold/20 to-transparent" />
                            
                            {showTilt ? (
                                <TiltedCard
                                    imageSrc={profilePhoto}
                                    altText="Kaushalraj Puwar"
                                    containerHeight="100%"
                                    containerWidth="100%"
                                    imageHeight="100%"
                                    imageWidth="100%"
                                    rotateAmplitude={TILT_CONFIG.rotateAmplitude}
                                    scaleOnHover={TILT_CONFIG.scaleOnHover}
                                    showTooltip={TILT_CONFIG.showTooltip}
                                    displayOverlayContent={true}
                                    className="w-full h-full"
                                    overlayContent={
                                        <>
                                            {showGlare && (
                                                <GlareHover
                                                    glareColor={GLARE_CONFIG.color}
                                                    glareOpacity={GLARE_CONFIG.opacity}
                                                    glareAngle={GLARE_CONFIG.angle}
                                                    glareSize={GLARE_CONFIG.size}
                                                    transitionDuration={GLARE_CONFIG.duration}
                                                    playOnce={GLARE_CONFIG.playOnce}
                                                    borderRadius="0.5rem"
                                                    className="w-full h-full absolute inset-0 z-10"
                                                />
                                            )}
                                            {decorativeCorners}
                                        </>
                                    }
                                />
                            ) : (
                                <>
                                    {showGlare ? (
                                        <GlareHover
                                            glareColor={GLARE_CONFIG.color}
                                            glareOpacity={GLARE_CONFIG.opacity}
                                            glareAngle={GLARE_CONFIG.angle}
                                            glareSize={GLARE_CONFIG.size}
                                            transitionDuration={GLARE_CONFIG.duration}
                                            playOnce={GLARE_CONFIG.playOnce}
                                            borderRadius="0.5rem"
                                            className="w-full h-full relative z-10"
                                        >
                                            {renderPhotoContent()}
                                        </GlareHover>
                                    ) : (
                                        <div className="w-full h-full relative z-10">
                                            {renderPhotoContent()}
                                        </div>
                                    )}
                                    {decorativeCorners}
                                </>
                            )}
                        </div>
                    </ScrollReveal>

                    {/* Bio text */}
                    <ScrollReveal direction="right" delay={0.2} className="md:col-span-3">
                        <div className="space-y-5">
                            <p className="font-body text-cream/100 text-base md:text-lg leading-relaxed">
                                I’m Kaushal, a Computer Science undergraduate at{' '} <span className="text-gold">IIIT Bangalore</span>. I enjoy building systems, experimenting with ideas, and understanding how software and models work beneath the surface.
                            </p>

                            <p className="font-body text-cream/90 text-base md:text-lg leading-relaxed">
                                I’m particularly interested in{' '} <span className="text-gold/80">Machine Learning</span>,{' '} <span className="text-gold/80">Cloud Computing</span>, and{' '}<span className="text-gold/80">DevOps</span>. I like working across the stack - from building low-level tools and training models to designing clean, interactive applications.
                            </p>

                            <p className="font-body text-cream/80 text-base md:text-lg leading-relaxed">
                                Outside of coding, I spend time reading about philosophy, exploring new tech, and experimenting with my macros. I believe the best way to learn is by building, iterating, and sharing the process along the way. I have recently started reading Dune by Frank Herbert.
                            </p>

                            {/* Social links */}
                            <div className="flex items-center gap-5 pt-4">
                                {socials.map(({ icon: SocialIcon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="text-muted hover:text-gold transition-colors duration-300"
                                    >
                                        <SocialIcon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default About;
