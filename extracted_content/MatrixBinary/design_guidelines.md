# Design Guidelines: Bio/Portfolio with Binary Background

## Design Approach
**Reference-Based:** Inspired by 3ugen3.com's minimalist, technical aesthetic - clean monospace typography with animated binary background creating a sophisticated developer/tech portfolio vibe.

## Core Design Elements

### Typography
**Primary Font:** Monospace font family (JetBrains Mono, Fira Code, or Source Code Pro via Google Fonts)
- Headings: Bold weight, uppercase for emphasis
- Body Text: Regular weight, 16-18px base size
- Code/Technical Details: Same monospace family, slightly smaller (14-16px)
- Hierarchy: Large (48-64px) → Medium (32-40px) → Body (16-18px) → Small (14px)

### Layout System
**Spacing Units:** Tailwind units of 4, 8, 12, 16, 24, 32
- Section padding: py-24 to py-32 on desktop, py-12 on mobile
- Component spacing: gap-8 to gap-12
- Container: max-w-6xl centered with px-6 padding
- Single column layout for readability with max-w-3xl for text content

### Color Palette
**Primary Scheme:** Grayscale with green accent
- Background: Very dark gray/near black (#0a0a0a to #1a1a1a)
- Text Primary: Light gray/white (#e5e5e5 to #ffffff)
- Text Secondary: Medium gray (#9ca3af to #a0a0a0)
- Accent: Matrix green (#00ff41 or #10b981) for links, highlights, and CTAs
- Binary Background: Dark gray (opacity 0.1-0.15) for subtle presence

### Binary Background Animation
**Implementation Specs:**
- Randomly positioned 1s and 0s across the viewport
- Slow, continuous downward float animation (20-40s duration)
- Multiple layers at different speeds for depth
- Opacity: 0.08-0.15 for subtle, non-distracting effect
- Font size variation: 14px to 24px for visual interest
- Z-index: Behind all content
- Color: Same as text secondary but with reduced opacity

### Component Library

**Header/Navigation**
- Fixed or sticky positioning
- Logo/name on left in monospace uppercase
- Simple text links on right (no buttons in nav)
- Minimal padding (py-6)
- Subtle border-bottom or no border
- Green hover state on links

**Hero Section**
- Full viewport height (min-h-screen) with centered content
- Large monospace name/title (text-5xl to text-7xl)
- Subtitle/tagline in lighter gray
- Single prominent CTA button with green background
- Binary background visible behind
- No hero image - pure typography focus

**About/Bio Section**
- Single column text layout (max-w-3xl)
- Paragraph spacing with mb-6
- Green accent on key terms or links
- Optional terminal-style bordered container

**Skills/Technologies**
- Grid layout: 2-3 columns on desktop, 1 on mobile
- Monospace text labels
- Optional green bracket or chevron prefixes (> or [ ])
- Minimal card styling with subtle borders

**Projects/Portfolio**
- Card grid: 2 columns on desktop, 1 on mobile
- Each card with title, description, tech stack
- Green "View Project →" links
- Subtle border on hover
- Optional small project thumbnails (if images used)

**Contact Section**
- Centered layout
- Email/social links in monospace
- Green accent on hover
- Terminal-style "connect" header
- Links with arrow indicators (→)

**Footer**
- Minimal single line or two-line layout
- Copyright in small monospace
- Social icons or text links
- Green accent on interaction

### Interactive Elements

**Links**
- Underline on hover with green color
- Smooth color transition (0.2s)
- Monospace font consistency

**Buttons**
- Primary: Green background (#00ff41), black text, bold
- Ghost: Green border, green text, transparent background
- Padding: px-8 py-3
- Uppercase text
- No rounded corners or minimal (rounded-sm)
- Hover: Slightly lighter green or opacity change

**Cards/Containers**
- Thin border (border-gray-800)
- Subtle background (bg-gray-900/50)
- No shadows - flat design
- Hover: Border color shift to green

### Animations
**Minimal Animation Strategy:**
- Binary background: Continuous slow float
- Links/buttons: Simple color transitions (0.2s-0.3s)
- NO scroll animations
- NO elaborate hover effects
- Focus on content, not motion

### Images
**Strategic Use:**
- NO large hero image (typography-focused hero)
- Project thumbnails: Small, bordered, grayscale or green-tinted
- Profile photo: Optional, small, rounded or square with green border
- All images should feel technical/minimal, avoid colorful photos

**Image Specifications:**
- Max width constraints for consistency
- Subtle border treatments
- Grayscale filter or green overlay on hover
- Loading states in monospace text

### Responsive Behavior
- Mobile: Single column, reduced font sizes, full-width components
- Tablet: Maintain simplicity, 2-column grids where appropriate
- Desktop: Max-width containers, generous whitespace
- Binary background scales appropriately across viewports

### Accessibility
- High contrast maintained (WCAG AAA where possible)
- Monospace fonts at readable sizes (16px minimum for body)
- Focus states with green outline
- Semantic HTML structure
- Screen reader friendly labels

### Overall Aesthetic
Minimalist developer portfolio with technical sophistication - clean typography hierarchy, restrained color palette, subtle binary animation creating atmosphere without distraction. Every element purposeful, nothing decorative. Professional, modern, and distinctly technical.