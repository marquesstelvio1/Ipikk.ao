# IPIKK Modern Website Design Guidelines

## Design Approach

**Reference-Based Approach**: Inspired by modern educational institutions like MIT, Stanford, and the provided Figma school homepage design. Focus on professionalism, accessibility, and institutional credibility while maintaining visual appeal for prospective students.

## Core Design Elements

### A. Typography
- **Headings**: Inter or Poppins (Bold 600-700)
  - H1: 3.5rem (56px) desktop / 2.25rem (36px) mobile
  - H2: 2.5rem (40px) desktop / 1.875rem (30px) mobile
  - H3: 1.875rem (30px) desktop / 1.5rem (24px) mobile
- **Body**: Inter or Open Sans (Regular 400, Medium 500)
  - Large: 1.125rem (18px)
  - Base: 1rem (16px)
  - Small: 0.875rem (14px)
- **Buttons/CTAs**: Semi-bold 600, uppercase tracking

### B. Layout System
**Spacing Units**: Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Container max-width: max-w-7xl
- Content max-width: max-w-6xl
- Grid gaps: gap-8 (desktop), gap-6 (mobile)

### C. Component Library

**Navigation**
- Sticky header with backdrop blur
- Multi-level dropdown menus for course categories (hover on desktop, click on mobile)
- Logo left, main nav center, CTA button + language selector right
- Mobile: hamburger menu with slide-in drawer

**Hero Section**
- Full-width image carousel (5 slides minimum)
- Height: 80vh to 90vh
- Overlay: dark gradient (rgba(0,0,0,0.4) to rgba(0,0,0,0.6))
- Content: Centered with large heading, subheading, dual CTAs
- Carousel controls: Subtle arrow buttons and dot indicators
- Auto-advance: 5 seconds with smooth fade transitions (1.2s duration)

**Course Cards**
- Grid layout: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Card structure: Icon/image top, title, brief description, "Saiba Mais" link
- Hover: Subtle lift (translateY -4px) with shadow increase
- Border radius: rounded-xl (12px)

**News/Events Section**
- Grid: 3 columns (desktop), stacking to 1 (mobile)
- Card format: Featured image, date badge, title, excerpt, read more link
- "Ver Mais" button at section bottom

**Carousels (Schools & Partners)**
- Schools: 4 items visible (desktop), 2 (tablet), 1 (mobile)
- Partners: 3 items visible (desktop), 2 (tablet), 1 (mobile)
- Auto-advance with manual navigation
- Cards: White background, shadow on hover, centered content

**Footer**
- Multi-column layout: Contact info, quick links, social media, map/location
- Carousels for affiliated schools and partners above footer content
- Newsletter signup form
- Bottom bar: Copyright, privacy links

**Modals/Overlays**
- Language selector dropdown
- Dark/light mode toggle (sun/moon icon with smooth transition)
- Course detail modals (if needed)

### D. Animations
Use sparingly with Framer Motion:
- **Page load**: Logo intro animation (optional, skippable)
- **Scroll animations**: Fade-up on course cards and sections (stagger 0.1s)
- **Hover states**: Scale 1.02-1.05 on cards, buttons
- **Transitions**: All durations 300-500ms with ease-in-out
- **Carousel**: Opacity fade only, no slide/scale effects

## Images

**Hero Carousel (5 images minimum)**
- Students in technical workshops/labs
- Campus building exterior
- Graduation ceremony
- Modern classrooms with technology
- Students collaborating on projects
- Size: 1920x1080px minimum, optimized for web
- Treatment: Slight darkening overlay for text readability

**Course Icons/Images**
- Illustrated icons or authentic photos for each course area
- Size: 400x300px or 1:1 square format
- Style: Modern, clean, educational context

**Affiliated Schools**
- Building facades or logos (150x150px square)

**Partners**
- Company/institution logos on white background (200x100px)

**News/Events**
- Featured images for each article (600x400px)

## Accessibility
- WCAG AA contrast ratios minimum
- Focus indicators on all interactive elements
- Skip navigation link
- Alt text for all images
- Keyboard navigation for dropdowns and carousels
- ARIA labels for icon-only buttons

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (3-4 columns, full layouts)

## Key Sections Structure
1. **Hero Carousel** with main CTA
2. **Quem Somos** (About) - 2-column layout with image + text
3. **Cursos Ministrados** (Courses) - Grid of course cards
4. **Notícias e Eventos** (News) - Latest 6 articles
5. **Faça Sua Matrícula** (Enrollment CTA) - Full-width banner with image background
6. **Escolas Filiadas** (Affiliated Schools) - Carousel
7. **Parceiros** (Partners) - Carousel
8. **Footer** - Comprehensive with all links and contact

## Critical Notes
- Minimize distracting animations - prioritize smooth, professional transitions
- Maintain institutional credibility through clean, organized layouts
- Use authentic imagery of technical education environments
- Implement Portuguese as primary language with multi-language support
- Dark mode optional but recommended for modern feel