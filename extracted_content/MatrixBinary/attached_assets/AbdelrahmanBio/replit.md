# b0oda Portfolio Website

## Project Overview
A cybersecurity professional portfolio website for Abdelrahman Atef (b0oda), replicating the design aesthetic of 3ugen3.com with an animated binary matrix background.

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
│   │   └── abdelrahman_atef_binary_rain.tsx  # Animated matrix background
│   ├── App.tsx                            # Main routing
│   └── index.css                          # Matrix/terminal color scheme
```

## Design Features
- **Matrix Theme**: Deep black background (#000000) with bright terminal green (#00ff00)
- **Binary Rain Animation**: Continuous falling 1s and 0s creating depth and atmosphere
- **Monospace Typography**: JetBrains Mono, Fira Code, Roboto Mono for authentic terminal feel
- **Minimalist Navigation**: Simple text links between pages
- **Responsive Design**: Mobile-first approach with fluid layouts
- **Glowing Effects**: Text shadows on key elements for matrix aesthetic

## Pages

### Home (`/`)
- Centered "b0oda" logo with glow effect
- "N33D H3LP? M33T M3" call-to-action link to bio
- Full-screen binary rain background

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
- **Styling**: Tailwind CSS with custom matrix theme
- **Animations**: CSS keyframes for binary rain and fade-in effects
- **Build Tool**: Vite
- **Server**: Express.js for static file serving

## Color Scheme
- Background: Pure black (#000000)
- Primary Text: Terminal green (hsl(120 100% 50%))
- Secondary Text: Dimmed green (hsl(120 60% 40%))
- Borders: Dark green (hsl(120 100% 12%))
- Glow Effects: Green with varying opacity

## Recent Changes
- **2025-10-28**: Initial project setup with matrix theme
- Created all three pages with binary rain animation
- Implemented responsive navigation
- Configured terminal green color scheme
- Added text glow effects and animations

## User Preferences
- Matrix/terminal aesthetic inspired by 3ugen3.com
- File naming convention using "abdelrahman_atef" prefix
- Professional cybersecurity focus in content
- Minimalist design with strong visual impact
