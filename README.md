# Quadrante USA Website

A modern, responsive website for Quadrante USA LLC - a joint venture between Quadrante Group and Right Analytics, specializing in power systems engineering, grid modernization, and renewable energy integration.

## Quick Start

1. Clone the repository
2. Open `index.html` in a browser (or use a local server)
3. No build step required - the site uses CDN dependencies

## Project Structure

```
quadrante-usa/
├── index.html              # Main entry point
├── css/
│   └── styles.css          # Custom styles (fonts, animations, utilities)
├── js/
│   └── main.js             # All JavaScript functionality
├── components/             # HTML components (loaded dynamically)
│   ├── header.html         # Navigation & header
│   ├── hero-slider.html    # Hero carousel
│   ├── about.html          # About section
│   ├── team.html           # Team members grid
│   ├── clients-marquee.html# Client logos carousel
│   ├── expertise.html      # Core capabilities (2 scrollable rows)
│   ├── portfolio-map.html  # Projects map with Leaflet
│   ├── contact.html        # Contact form
│   ├── modals.html         # Modal templates
│   └── footer.html         # Footer
└── assets/
    ├── Fonts/              # Archivo font family (5 weights)
    └── images/
        └── media/          # All images (logos, team, projects)
```

## Dependencies (via CDN)

- **Tailwind CSS** - Utility-first CSS framework
- **Lucide Icons** - SVG icon library
- **Leaflet.js** - Interactive maps
- **Formspree** - Form submission handling

## Key Features

### Component-Based Architecture
HTML components are loaded dynamically via JavaScript fetch, making it easy to update individual sections without touching the main file.

### Interactive Elements
- **Hero Slider**: Auto-advancing carousel with touch/swipe support
- **Scrollable Rows**: Horizontal scroll for expertise and project cards
- **Universal Modal**: Reusable modal for team, expertise, and project details
- **Interactive Map**: Leaflet-powered map with filterable project markers
- **Client Marquee**: Animated logo carousel

### Responsive Design
Mobile-first approach with Tailwind breakpoints:
- `sm:` 640px+
- `md:` 768px+
- `lg:` 1024px+

## Making Changes

### Content Updates

**Team Members**: Edit `teamData` array in `js/main.js` (line ~252)

**Expertise Panels**: Edit `competenciesData` array in `js/main.js` (line ~193)

**Projects**: Edit `projectModalData` array in `js/main.js` (line ~910)

**Map Projects**: Edit the `projects` array inside `initializeProjectMap()` in `js/main.js`

### Styling
- Global styles: `css/styles.css`
- Component-specific: Use Tailwind classes inline
- Brand colors defined in `index.html` Tailwind config

### Images
All images are in `assets/images/media/`. Naming conventions:
- Team photos: `team-[name].jpeg`
- Client logos: `client-logo-[number].png`
- Project images: descriptive names (e.g., `solar_wind.jpeg`)

## Form Handling (SETUP REQUIRED)

Contact forms use [Formspree](https://formspree.io) for submission handling. **You must configure your own Formspree endpoint before the forms will work.**

### Setup Instructions

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your form ID (looks like `xyzabcde`)
3. Open `components/modals.html` and find line 54
4. Replace `YOUR_FORMSPREE_ID` with your actual form ID:

```html
<!-- Before -->
<form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">

<!-- After (example) -->
<form action="https://formspree.io/f/xyzabcde" method="POST">
```

5. Test the form to ensure submissions are being received

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Performance Notes

- Images should be optimized before upload (recommended max 200KB)
- Hero slider images are the largest assets
- Leaflet map loads tiles on-demand

## Development Tips

1. Use a local server (e.g., `npx serve` or VS Code Live Server) to avoid CORS issues with component loading
2. Browser DevTools: Check Console for any loading errors
3. Component changes require page refresh (no hot reload)

## Contact

For technical questions about this codebase, contact soleymani.hamid@gmail/com.
