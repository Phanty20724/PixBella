# PixBella - AI Business Solution

## Overview
PixBella is an AI SaaS platform for e-commerce, f-commerce, and garments industry. The platform provides AI-powered product photography and business intelligence tools.

**Theme:** Digital Elegance & Intelligent Growth  
**Tagline:** Unlocking Beauty, Empowering Business.

## Core Features (Planned)
1. **PixBella Studio** - AI Product-Model Combination Engine for generating studio-quality fashion imagery
2. **PixBella Planner AI** - Business planning and action plan generation
3. **PixBella Research AI** - Market intelligence and competitor analysis

## Tech Stack
- **Frontend:** React 18 with TypeScript
- **Styling:** Tailwind CSS with shadcn/ui components
- **Routing:** React Router DOM
- **Animation:** Framer Motion
- **Build Tool:** Vite

## Project Structure
```
src/
  components/     # UI components and sections
    ui/           # shadcn/ui components
  pages/          # Page components (Index, Studio, Docs, About, Terms, Privacy, Cookies, NotFound)
  hooks/          # Custom React hooks
  lib/            # Utility functions
  assets/         # Images and static assets
```

## Available Routes
- `/` - Home page with hero, features, and pricing
- `/studio` - PixBella Studio AI image generation tool
- `/docs` - Documentation, API guides, and tutorials
- `/about` - Company story and mission
- `/terms` - Terms of Service
- `/privacy` - Privacy Policy  
- `/cookies` - Cookie Policy

## Running the Project
The application runs on port 5000 with `npm run dev`.

## Recent Changes
- Dec 16, 2025: Added 6 new pages (Studio, Docs, About, Terms, Privacy, Cookies) with premium design
- Updated Navigation and Footer to use React Router Link components for SPA navigation
- Created premium Graphy-style footer with purple gradient CTA card and shimmer effect
- Enhanced hero section with bigger PixBella logo and improved visual hierarchy
