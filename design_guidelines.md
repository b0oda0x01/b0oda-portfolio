# Design Guidelines: 3ugen3-Inspired Website Styling

## Design Approach

**Reference-Based Approach**: This project draws direct inspiration from https://www.3ugen3.com/, adapting its distinctive cyberpunk/hacker aesthetic while maintaining the existing content structure. The visual style emphasizes technical sophistication through monospace typography, neon glow effects, and binary code motifs.

## Core Visual Identity

### Color Palette
- **Primary Text Color**: Bright green `#00ff41` / `rgb(0, 255, 65)`
- **Background Color**: Dark navy/black `#0d1117` / `rgb(13, 17, 23)`
- **Glow Effect Color**: Same as primary text with varying opacity for depth

### Typography System

**Font Family**: Monospace fonts exclusively
- Primary: Source Code Pro (Google Fonts)
- Fallback: Courier New, Consolas, monospace

**Font Weights**:
- Body text: 400-500
- Headings: 600-700
- Special emphasis: 700

**Font Sizing**: Maintain existing size hierarchy from current website

## Layout & Structure

**Constraint**: Preserve all existing website content and structure. Only visual styling changes are permitted.

**Container**: Centered square/rectangular bordered container matching 3ugen3.com proportions
- Green border with subtle glow
- Maintains responsive behavior of existing layout

**Spacing**: Use existing Tailwind spacing primitives (p-4, p-8, m-4, etc.) from current implementation

## Background Treatment

**Static Binary Code Pattern**:
- Scattered "1" and "0" characters across background
- No animation or falling effect
- Low opacity (10-20%) to avoid competing with content
- Random positioning across viewport
- Fixed/absolute positioning to stay in background layer

## Text Effects

### Neon Glow Implementation
All text should feature green neon glow using CSS text-shadow:
- Primary glow: 0 0 10px rgba(0, 255, 65, 0.8)
- Secondary glow: 0 0 20px rgba(0, 255, 65, 0.6)
- Tertiary glow: 0 0 30px rgba(0, 255, 65, 0.4)

### Pulsing Animation
Subtle glow pulsing on emphasized elements:
- Duration: 2-3 seconds
- Easing: ease-in-out
- Intensity variation: 50-100%

## Hero/Featured Text

**Animated Phrase**: "N33D H3LP? M33T M3"

**Text Treatment**:
- Larger font size (hero-level sizing)
- Maximum glow intensity
- Blinking cursor effect at the end ("|" character)
- Typewriter reveal animation on page load (optional based on existing behavior)

**"3" Character Animation**:
- All instances of "3" in the phrase animate horizontally
- Smooth oscillating motion left and right
- Animation range: ±5-10px from original position
- Duration: 1.5-2 seconds per cycle
- Easing: ease-in-out for smooth motion
- Continuous loop
- Each "3" can have slightly offset timing for organic feel

## Component Styling

### Navigation/Header
- Green text with glow on dark background
- Logo maintains "3ugen3" branding style if present
- Monospace font throughout

### Buttons/Links
- Green bordered buttons with glow
- Hover state: increased glow intensity
- Text remains green on all states
- If buttons appear over any backgrounds, use backdrop blur for legibility

### Content Sections
- Maintain existing section structure
- Apply green/dark color scheme throughout
- Ensure all text has appropriate glow effect
- Keep current responsive grid layouts

### Footer
- Consistent green text on dark background
- Subtle binary code pattern can extend here
- Maintain existing footer content and links

## Accessibility Considerations

- Ensure green text has sufficient contrast against dark background (already high with #00ff41 on #0d1117)
- Glow effects should enhance, not obscure readability
- Animated "3" characters should not cause motion sickness (keep movement subtle)
- Maintain keyboard navigation from existing implementation

## Animation Guidelines

**Use Sparingly**:
- "3" character horizontal movement (required)
- Subtle text glow pulsing (on emphasis elements only)
- Blinking cursor effect on hero text
- Optional: Typewriter effect on page load

**Avoid**:
- Matrix-style raining code
- Excessive background animations
- Distracting particle effects

## Responsive Behavior

- Maintain existing responsive breakpoints and layout adjustments
- Ensure glow effects scale appropriately on smaller screens
- Binary background pattern should adapt to viewport size
- Hero text remains readable and properly centered across all devices

## Performance Notes

- Use CSS animations over JavaScript where possible
- Binary background should be CSS-generated or lightweight SVG
- Minimize glow shadow layers for performance
- Ensure animations don't cause layout shifts