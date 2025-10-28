# b0oda Portfolio Website

## Project Overview
A cybersecurity professional portfolio website for Abdelrahman Atef (b0oda), featuring a minimalist design with an animated binary (1 & 0) background inspired by 3ugen3.com.

## Personal Information
- **Name**: Abdelrahman Atef
- **Username**: b0oda
- **Location**: Alexandria, Egypt
- **Email**: mrrb0oda@gmail.com
- **Phone**: (20) 1289733296
- **Website**: b0oda.site
- **LinkedIn**: https://www.linkedin.com/in/abdelrahman-atef-787895318/

## Professional Background
Penetration Tester and Bug Bounty Hunter with 3+ years of experience specializing in:
- Web Application & API Penetration Testing (REST/GraphQL)
- Authentication & Authorization Vulnerabilities
- Business Logic Security Analysis
- Professional Security Reporting
- 100+ Security Vulnerabilities Discovered

## Project Structure
```
client/
├── src/
│   ├── pages/
│   │   ├── abdelrahman_atef_home.tsx      # Homepage with logo
│   │   ├── abdelrahman_atef_bio.tsx       # Professional bio page
│   │   └── abdelrahman_atef_contacts.tsx  # Contact information page
│   ├── components/
│   │   └── abdelrahman_atef_binary_rain.tsx  # Animated binary background
│   ├── App.tsx                            # Main routing
│   └── index.css                          # Terminal/matrix color scheme
```

## Design Features
- **Minimalist Style**: Clean design with simple floating binary digits (1s and 0s)
- **Binary Background**: Sparse, slow-moving binary digits creating subtle atmosphere
- **Terminal Green Theme**: Deep black background (#000000) with bright terminal green (#00ff00)
- **Monospace Typography**: JetBrains Mono for authentic terminal feel
- **Minimal Navigation**: Simple text links between pages
- **Responsive Design**: Mobile-first approach with fluid layouts
- **Glowing Effects**: Subtle text shadows on key elements

## Pages

### Home (`/`)
- Centered "b0oda" logo with glow effect
- "N33D H3LP? M33T M3" call-to-action link to bio
- Simple binary background (no trailing effect)

### Bio (`/bio`)
- Professional headline: "Because 'Impossible' is Just Another Algorithm"
- Detailed professional introduction
- Services offered list
- Navigation links to other pages

### Contacts (`/contacts`)
- Complete contact information
- QR code placeholder for vCard
- Social media links (LinkedIn)
- Direct contact methods (email, phone)

## Technical Stack
- **Frontend**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom terminal theme
- **Animations**: CSS keyframes and canvas-based binary animation
- **Build Tool**: Vite
- **Server**: Express.js for static file serving

## Color Scheme
- Background: Pure black (#000000)
- Primary Text: Terminal green (hsl(120 100% 50%))
- Secondary Text: Dimmed green (hsl(120 60% 40%))
- Binary Digits: Very subtle green (opacity 0.08-0.15)
- Borders: Dark green (hsl(120 100% 12%))
- Glow Effects: Green with varying opacity

## Recent Changes
- **2025-10-28**: Updated binary rain animation to simple floating 1s and 0s (matching 3ugen3.com style)
- Replaced matrix-style trailing effect with clean, sparse binary digits
- Simplified animation for better performance and cleaner aesthetic
- Maintained terminal green color scheme and monospace typography

## User Preferences
- Minimalist aesthetic inspired by 3ugen3.com
- Simple binary animation (no trailing/fading effects)
- File naming convention using "abdelrahman_atef" prefix
- Professional cybersecurity focus in content
- Clean design with strong visual impact
