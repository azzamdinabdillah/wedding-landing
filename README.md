# Wedding Website Landing Page Template

A beautiful, romantic wedding website template built with Vite, HTML5, Tailwind CSS, and modern JavaScript libraries.

## Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with optimized layouts for all devices
- **Interactive Hero Section**: Full-screen hero with couple's names, date, and live countdown timer
- **Smooth Navigation**: Sticky navigation with smooth scrolling to sections
- **Photo Gallery**: Interactive gallery with lightbox functionality
- **RSVP System**: Complete form with email integration via EmailJS
- **Wedding Details**: Ceremony and reception information with map integration
- **Timeline**: Beautiful event timeline for the wedding day

### Technical Features
- **Advanced Animations**: GSAP-powered animations with scroll triggers
- **Modern Libraries**: Utilizes industry-standard NPM packages
- **Performance Optimized**: Lazy loading, image optimization, and code splitting
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation support
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Design Elements

### Color Palette
- **Primary**: Soft blush pink (#F8E8E8) and warm ivory (#FFF8F0)
- **Secondary**: Dusty rose (#D4A574) and sage green (#9CAF88)
- **Accent**: Gold (#D4AF37) for highlights and CTAs
- **Neutral**: Charcoal gray (#2D3748) for text, light gray (#F7FAFC) for backgrounds

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body Text**: Inter (clean sans-serif)
- **Font Weights**: 3 weights maximum for optimal performance

### Animations
- **Scroll Animations**: AOS (Animate On Scroll) for reveal effects
- **Advanced Animations**: GSAP with ScrollTrigger for complex interactions
- **Micro-interactions**: Hover effects, transitions, and subtle animations

## NPM Libraries Used

### Core Libraries
- **GSAP**: Advanced animations and scroll effects
- **Swiper**: Touch-friendly carousels and sliders
- **GLightbox**: Modern lightbox for photo gallery
- **CountUp.js**: Animated countdown timer
- **EmailJS**: Contact form and RSVP submissions
- **Vanilla-tilt**: Subtle tilt effects on cards
- **date-fns**: Date formatting and calculations
- **AOS**: Animate on scroll library

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **@tailwindcss/forms**: Form styling plugins
- **@tailwindcss/typography**: Typography enhancements

## Setup Instructions

### 1. Installation
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

## Customization Guide

### EmailJS Configuration
1. Sign up for EmailJS at https://www.emailjs.com/
2. Create a service and template
3. Replace the following in `main.js`:
   - `YOUR_USER_ID` with your EmailJS user ID
   - `YOUR_SERVICE_ID` with your service ID
   - `YOUR_TEMPLATE_ID` with your template ID

### Content Customization
1. **Couple Names**: Update in `index.html` throughout the document
2. **Wedding Date**: Change date in countdown and content sections
3. **Venue Information**: Update ceremony and reception details
4. **Photos**: Replace Pexels URLs with your own photos
5. **Colors**: Modify color palette in `tailwind.config.js`

### Photo Guidelines
- **Hero Image**: 1920x1080px minimum, landscape orientation
- **Gallery Images**: 800x600px minimum, various orientations
- **Wedding Party**: 300x300px, square format
- **Format**: Use WebP for better performance with JPG fallbacks

## Performance Optimization

### Image Optimization
- Use WebP format with JPG fallbacks
- Implement lazy loading for below-fold images
- Compress images to reduce file size
- Use appropriate image dimensions

### Code Optimization
- Tree-shaking for unused CSS/JS
- Code splitting for vendor libraries
- Minification in production build
- Gzip compression enabled

### Loading Performance
- Critical CSS inlined
- Non-critical resources deferred
- Preload important fonts
- Optimize third-party scripts

## Browser Support

### Modern Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Progressive Enhancement
- Graceful degradation for older browsers
- Fallbacks for unsupported features
- Polyfills for critical functionality

## Accessibility Features

### WCAG 2.1 AA Compliance
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Screen reader compatibility
- High contrast color ratios
- Focus indicators
- Reduced motion support

### Keyboard Navigation
- Tab order optimization
- Skip links for screen readers
- Escape key functionality
- Enter key activation

## SEO Optimization

### Meta Tags
- Title and description optimization
- Open Graph tags for social sharing
- Schema markup for events
- Proper canonical URLs

### Content Structure
- Semantic HTML5 elements
- Proper heading hierarchy
- Alt text for images
- Descriptive link text

## Deployment

### Static Hosting
- Netlify (recommended)
- Vercel
- GitHub Pages
- Firebase Hosting

### Build Process
1. Run `npm run build`
2. Upload `dist` folder to hosting provider
3. Configure redirects if needed
4. Set up SSL certificate

## Maintenance

### Regular Updates
- Keep NPM packages updated
- Monitor for security vulnerabilities
- Update content as needed
- Test across browsers regularly

### Performance Monitoring
- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Track loading times
- Optimize based on analytics

## Support

For questions or issues:
- Check the documentation
- Review example implementations
- Test with different browsers
- Validate HTML and CSS

## License

This template is provided as-is for personal and commercial use. Please ensure you have proper licensing for any photos or assets used.