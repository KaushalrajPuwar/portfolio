// ============================================
// Site Configuration - Single source of truth
// ============================================

export const CONFIG = {
    SHOW_PUBLICATIONS: false, // Toggle to hide/show the Publications section
    SHOW_ABOUT_GLARE: true,  // Toggle the glare hover effect on About photo
    SHOW_ABOUT_TILT: true,    // Toggle the 3D parallax tilt effect on About photo
};

export const SECTIONS = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    ...(CONFIG.SHOW_PUBLICATIONS ? [{ id: 'publications', label: 'Publications' }] : []),
    { id: 'contact', label: 'Contact' },
];

// ============================================
// Galaxy Background Settings
// Tweak these to adjust the star field effect
// ============================================
export const GALAXY_CONFIG = {
    // Star appearance
    density: 0.8,             // Star density (0.3 = sparse, 1.5 = thick, default 1)
    glowIntensity: 0.25,      // Star glow strength (0.1 = faint, 0.6 = bright, default 0.3)
    saturation: 0.6,          // Color saturation (0 = white, 1 = vivid)
    hueShift: 40,             // Hue rotation in degrees (40 = gold/amber, 140 = green, 220 = blue)
    twinkleIntensity: 0.4,    // Twinkle amount (0 = steady, 1 = maximum)

    // Movement & interaction
    speed: 0.6,               // Overall animation speed (0.3 = slow, 2 = fast)
    rotationSpeed: 0.03,      // Star field rotation (0 = still, 0.2 = fast spin)
    starSpeed: 0.4,           // Speed of star parallax layers
    mouseInteraction: true,   // Enable cursor interaction
    mouseRepulsion: true,     // Stars push away from cursor
    repulsionStrength: 1.5,   // How strongly stars repel (1 = gentle, 4 = strong)

    // Camera
    focal: [0.5, 0.5],        // Focal point [x, y] - center of star field
    rotation: [1.0, 0.0],     // Camera rotation [cos, sin]

    // Rendering
    transparent: true,         // Transparent canvas (stars float over dark bg)
};

// ============================================
// Glare Hover Settings (About Section Photo)
// Tweak these to adjust the shimmer effect
// ============================================
export const GLARE_CONFIG = {
    angle: -45,            // Angle of the light sweep
    color: '#C9A96E',      // Gold color for the glare
    duration: 4000,         // Animation speed in ms (lower = faster)
    opacity: 0.4,          // Opacity of the glare (0 to 1)
    playOnce: false,       // If true, glare only happens once per hover
    size: 300,             // Size of the glare gradient block (100+ is good)
};

// ============================================
// Tilted Card Settings (About Section Photo)
// Tweak these to adjust the 3D parallax hover effect
// ============================================
export const TILT_CONFIG = {
  rotateAmplitude: 25,     // How much the card tilts (higher = more extreme tilt)
  scaleOnHover: 1.075,      // Scale factor on hover (1.0 = no scale, 1.1 = 10% larger)
  showTooltip: false,      // Whether to show a floating tooltip on hover
};
