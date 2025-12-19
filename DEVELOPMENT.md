# Development Guide

This document provides detailed information for developers maintaining or extending the Quadrante USA website.

## Architecture Overview

### Component Loading System

The site uses a simple component loader defined in `index.html`:

```javascript
async function loadComponent(componentId, fileName) {
    const response = await fetch(`components/${fileName}`);
    const html = await response.text();
    document.getElementById(componentId).innerHTML = html;
}
```

Components are loaded in parallel on `DOMContentLoaded`, then icons are initialized via Lucide.

### JavaScript Structure (main.js)

The file is organized into numbered sections:

1. **INITIALIZATION** - DOMContentLoaded setup, icon initialization
2. **MOBILE MENU** - Toggle functionality with touch support
3. **DATA DEFINITIONS** - Content arrays (competencies, team, projects)
4. **SCROLL HEADER** - Header style changes on scroll
5. **HERO SLIDER** - Auto-advance carousel with swipe
6. **UNIVERSAL MODAL** - Reusable modal for all detail views
7. **LEAD CAPTURE MODAL** - Contact form popup
8. **COMPANY INFO MODAL** - About company popup
9. **PROJECT SLIDER** - Scrollable project rows
10. **EXPERTISE ROW SCROLLING** - Capabilities row scroll
11. **DRAG SCROLLING** - Mouse drag for horizontal scroll
12. **PROJECT MAP** - Leaflet map with markers

### CSS Structure (styles.css)

1. **FONT FACE DECLARATIONS** - Archivo font family
2. **TYPOGRAPHY STYLES** - Headings, body text
3. **NAVIGATION & HEADER** - Nav styles
4. **HERO SLIDER** - Slide transitions
5. **MODAL STYLES** - Modal animations
6. **SCROLLBAR CUSTOMIZATION** - Custom scrollbars
7. **GRADIENT EFFECTS** - Fade effects on scroll containers
8. **LOADING ANIMATION** - Initial load animation
9. **MAP MARKERS** - Leaflet marker styles
10. **UTILITY CLASSES** - Helper classes

## Data Structures

### competenciesData
Array of expertise panels shown in the "Our Core Capabilities" section.

```javascript
{
    image: "assets/images/media/example.jpg",
    title: "Panel Title",
    content: "<p>HTML content for modal</p>"
}
```

### teamData
Array of team members.

```javascript
{
    image: "assets/images/media/team-name.jpeg",
    title: "Person Name",
    subtitle: "Job Title",
    content: "<h4>...</h4><p>Bio HTML content</p>"
}
```

### projectModalData
Array of project details for the modal view.

```javascript
{
    title: "Project Name",
    client: "Client Name",
    image: "assets/images/media/project.jpg",
    content: "<p>Project description HTML</p>"
}
```

### Map Projects (inside initializeProjectMap)
Array of map marker data.

```javascript
{
    lat: 40.7128,
    lng: -74.0060,
    title: "Project Name",
    client: "Client Name",
    desc: "Short description",
    type: "grid" | "renew" | "study",
    image: "assets/images/media/project.jpg",
    region: "usa" | "europe" | "latam"
}
```

## Common Tasks

### Adding a New Team Member

1. Add photo to `assets/images/media/` named `team-firstname-lastname.jpeg`
2. Add entry to `teamData` array in `js/main.js`
3. Add card to `components/team.html` grid

### Adding a New Expertise Panel

1. Add image to `assets/images/media/`
2. Add entry to `competenciesData` array
3. Add card to appropriate row in `components/expertise.html`
4. Update the `onclick` index to match array position

### Adding a Map Project

1. Add image to `assets/images/media/`
2. Add entry to `projects` array inside `initializeProjectMap()`
3. Set correct `type` for filtering (grid/renew/study)
4. Set correct `region` for map focus (usa/europe/latam)

### Modifying the Hero Slider

Edit `components/hero-slider.html`. Each slide follows this structure:

```html
<div class="slide">
    <img src="assets/images/media/slide.jpg" class="..." />
    <div class="relative z-30 h-full flex items-end">
        <div class="container mx-auto px-6 md:px-12 pb-[15vh]">
            <div class="max-w-4xl slide-content">
                <h1>Slide Title</h1>
                <p>Slide description</p>
                <a href="#section">CTA Button</a>
            </div>
        </div>
    </div>
</div>
```

## Tailwind Configuration

Custom brand colors are defined in `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: '#1A2B4C',    // Deep Navy Blue
                    secondary: '#3b82f6',  // Bright Blue
                    accent: '#2563eb',     // Highlight Blue
                    dark: '#1A2B4C',
                    light: '#FFFFFF'
                }
            }
        }
    }
}
```

## Debugging

### Component Not Loading
- Check browser console for fetch errors
- Ensure running from a local server (not file://)
- Verify component file exists in `components/`

### Modal Not Opening
- Check if `openUniversalModal()` is being called
- Verify data array index matches the onclick parameter
- Check browser console for errors

### Map Not Showing
- Leaflet requires the container to have explicit dimensions
- Check if `initializeProjectMap()` is being called
- Verify Leaflet CSS and JS are loaded

### Slider Not Working
- Check if slides have the `slide` class
- Verify `initializeSlider()` is called after components load
- Check for JavaScript errors in console

## Performance Optimization

### Images
- Compress images before upload (TinyPNG, ImageOptim)
- Use appropriate formats: JPEG for photos, PNG for logos with transparency
- Consider WebP for modern browsers

### Loading
- Components load in parallel
- Slider initializes after DOM ready
- Map loads after components are mounted

## Browser Testing Checklist

- [ ] Desktop Chrome
- [ ] Desktop Firefox
- [ ] Desktop Safari
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)
- [ ] Tablet (iPad)
- [ ] Check all interactive elements
- [ ] Verify form submissions
- [ ] Test map interactions
