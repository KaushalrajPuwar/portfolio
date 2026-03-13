// ============================================
// Site Configuration - Single source of truth
// ============================================

export const CONFIG = {
  SHOW_PUBLICATIONS: false, // Toggle to hide/show the Publications section
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
// Splash Cursor Settings (Fluid Simulation)
// Tweak these to adjust the cursor trail effect
// ============================================
export const SPLASH_CONFIG = {
  // Simulation quality
  SIM_RESOLUTION: 128,       // Sim grid resolution (64 = fast, 256 = detailed)
  DYE_RESOLUTION: 1024,      // Dye texture resolution (512 = fast, 2048 = crisp)

  // Fluid behavior
  DENSITY_DISSIPATION: 3.5,  // How fast trails fade (1 = slow fade, 5 = fast fade)
  VELOCITY_DISSIPATION: 2,   // Velocity decay speed
  PRESSURE: 0.1,             // Pressure correction
  PRESSURE_ITERATIONS: 20,   // Solver iterations (more = accurate, slower)
  CURL: 3,                   // Vorticity / swirl amount

  // Splat (color burst) settings
  SPLAT_RADIUS: 0.15,        // Size of color splats (0.05 = tiny, 0.5 = large)
  SPLAT_FORCE: 5000,         // Force of splats (2000 = gentle, 10000 = intense)

  // Visual
  SHADING: true,             // 3D lighting effect on fluid
  COLOR_UPDATE_SPEED: 10,    // Color cycling speed
  BACK_COLOR: { r: 0, g: 0, b: 0 },  // Background (transparent overrides this)
  TRANSPARENT: true,         // Let site background show through

  // Theme color palette (gold/amber tones matching the site)
  // Format: { hueMin, hueMax, satMin, satMax, valMin, valMax }
  COLOR_PALETTE: {
    hueMin: 0.06,    // Gold-amber start (~22 degrees)
    hueMax: 0.14,    // Gold-amber end (~50 degrees)
    satMin: 0.5,     // Minimum saturation
    satMax: 0.85,    // Maximum saturation
    valMin: 0.7,     // Minimum brightness
    valMax: 1.0,     // Maximum brightness
    intensity: 0.12, // Color multiplier (lower = more subtle)
  },
};
