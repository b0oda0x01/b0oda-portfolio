# Portfolio Website - Abdelrahman Atef (b0oda)

## Overview

A cybersecurity professional portfolio website featuring a cyberpunk/hacker aesthetic inspired by 3ugen3.com. The site showcases Abdelrahman Atef's work as a Penetration Tester and Bug Bounty Hunter with over 3 years of experience. The design employs a minimalist approach with a dark background, bright green terminal-style text, monospace typography, and an animated binary background effect.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript
- Single Page Application (SPA) using Vite as the build tool
- Client-side routing via Wouter (lightweight routing library)
- Component-based architecture with reusable UI components

**Styling Approach**:
- Tailwind CSS for utility-first styling with custom theme configuration
- shadcn/ui component library (New York style variant) for pre-built accessible components
- Custom CSS variables for consistent theming across dark/light modes
- Monospace fonts (JetBrains Mono, Fira Code, Source Code Pro) for terminal aesthetic

**Design System**:
- Color scheme: Dark navy/black background (#0d1117) with bright green foreground (#00ff41)
- Neon glow effects using CSS text-shadow
- Static binary rain background component for atmospheric effect
- Terminal/matrix aesthetic with glowing green text on dark backgrounds

**State Management**:
- TanStack Query (React Query) for server state management
- Local component state with React hooks
- No global state management library (keeping it simple)

**Key Pages**:
1. Home (`/`) - Landing page with logo and call-to-action
2. Bio (`/bio`) - Professional background and expertise
3. Contacts (`/contacts`) - Contact information with QR code
4. 404 Not Found - Error page

**Custom Components**:
- `BinaryRain` - Canvas-based animated background with falling binary digits
- `LogoSvg` - SVG-based logo with green glow effects
- `AnimatedText` - Text component with oscillating animation on "3" characters

### Backend Architecture

**Server Framework**: Express.js with TypeScript
- HTTP server for serving the React application
- Middleware for JSON parsing and request logging
- Development mode with Vite integration for HMR (Hot Module Replacement)
- Production mode serves pre-built static files

**Development Setup**:
- Custom Vite middleware integration for development
- Runtime error overlay plugin for better debugging
- Replit-specific plugins for cartographer and dev banner

**Storage Layer**:
- In-memory storage implementation (`MemStorage` class)
- Interface-based design (`IStorage`) for potential database swap
- Currently implements basic user CRUD operations
- Uses UUID for unique identifiers

**Database Schema** (Drizzle ORM):
- PostgreSQL as target database (via Neon serverless)
- `users` table with id, username, and password fields
- Schema validation using Zod for type safety
- Migration support via Drizzle Kit

**Rationale**: The in-memory storage is a starting point. The interface pattern allows easy migration to a real database (PostgreSQL via Drizzle ORM is configured) without changing the API contract.

### Build and Deployment

**Build Process**:
- Frontend: Vite builds React app to `dist/public`
- Backend: esbuild bundles Express server to `dist/index.js`
- ESM module format throughout (type: "module" in package.json)

**Development Workflow**:
- `npm run dev` - Starts development server with Vite HMR
- `npm run build` - Production build for both frontend and backend
- `npm run start` - Runs production server
- `npm run db:push` - Pushes schema changes to database

### External Dependencies

**UI Component Library**:
- shadcn/ui with Radix UI primitives (accordion, alert-dialog, avatar, button, calendar, card, carousel, checkbox, collapsible, command, context-menu, dialog, dropdown-menu, form, hover-card, input, label, menubar, navigation-menu, pagination, popover, progress, radio-group, scroll-area, select, separator, sheet, sidebar, slider, switch, tabs, toast, toggle, tooltip)
- Lucide React for icons
- class-variance-authority for component variants
- tailwind-merge and clsx for className utilities

**Data Fetching**:
- TanStack Query v5 for server state management
- Custom query client configuration with infinite stale time

**Database & ORM**:
- Drizzle ORM for type-safe database queries
- @neondatabase/serverless for PostgreSQL connection
- drizzle-zod for schema validation
- PostgreSQL dialect configuration

**Form Handling**:
- React Hook Form for form state management
- @hookform/resolvers for validation
- Zod for schema validation

**Styling**:
- Tailwind CSS with PostCSS and Autoprefixer
- Custom theme with CSS variables for dark mode support
- Google Fonts integration (JetBrains Mono, Geist Mono, Architects Daughter, DM Sans, Fira Code)

**Development Tools**:
- TypeScript for type safety
- Vite plugins: @replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer, @replit/vite-plugin-dev-banner
- tsx for running TypeScript files directly

**Utilities**:
- date-fns for date manipulation
- nanoid for generating unique IDs
- adm-zip for handling zip files

**Session Management** (configured but not actively used):
- connect-pg-simple for PostgreSQL session store
- express-session for session handling