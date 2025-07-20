# Elegance - Wedding Website Template

## 📋 Overview
Elegance is a modern, responsive wedding website template built with HTML, Tailwind CSS, and vanilla JavaScript. Perfect for couples who want to create a beautiful wedding website without technical knowledge.

## 🚀 Quick Start Guide

### Prerequisites
- A computer with internet connection
- A text editor (we recommend Visual Studio Code - free download from https://code.visualstudio.com/)
- A web browser (Chrome, Firefox, Safari, or Edge)

### Installation Steps

#### Step 1: Download and Extract
1. Download the template files
2. Extract the ZIP file to a folder on your computer
3. Open the folder to see all the files

#### Step 2: Install Node.js (Required)
1. Go to https://nodejs.org/
2. Download the "LTS" version (recommended)
3. Run the installer and follow the installation steps
4. Restart your computer

#### Step 3: Setup the Project
1. Open Command Prompt (Windows) or Terminal (Mac/Linux)
2. Navigate to your project folder:
   ```bash
   cd path/to/your/wedding-website-folder
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

#### Step 4: Run the Website
1. In the same terminal, run:
   ```bash
   npm run dev
   ```
2. Open your browser and go to: `http://localhost:5173`
3. You should see your wedding website!

## ✏️ How to Customize Your Website

### Basic Customization (No Coding Required)

#### 1. Change Couple Names
- Open `index.html` in a text editor
- Find and replace "Sarah & Michael" with your names
- Save the file and refresh your browser

#### 2. Update Wedding Date
- In `index.html`, find the countdown section
- Change the date in the JavaScript section
- Look for: `const weddingDate = new Date('2024-06-15T16:00:00');`
- Replace with your wedding date

#### 3. Change Wedding Location
- Find the venue information in the Details section
- Update the venue name and address
- Update the Google Maps link

#### 4. Replace Photos
- Place your photos in the `production/` folder
- Update image URLs in `index.html`
- Recommended image sizes:
  - Hero background: 1920x1080px
  - Gallery images: 800x600px
  - Profile photos: 400x400px

#### 5. Update Love Story
- Find the "Our Story" section
- Replace the story content with your own
- Update dates and locations
- Add your own photos

#### 6. Customize Colors
- Open `style.css`
- Find the color variables at the top
- Change the hex color codes to your preferred colors

### Advanced Customization

#### 1. Adding New Sections
- Copy an existing section in `index.html`
- Modify the content and styling
- Add navigation links

#### 2. Changing Fonts
- Go to Google Fonts (https://fonts.google.com/)
- Select your preferred fonts
- Update the font links in the `<head>` section

#### 3. Adding Animations
- The template uses AOS (Animate On Scroll)
- Add `data-aos="fade-up"` to any element
- Available animations: fade, slide, zoom, flip

## 📁 File Structure

```
wedding-landing/
├── index.html          # Main website file
├── style.css           # Custom styles
├── main.js             # JavaScript functionality
├── package.json        # Project configuration
├── vite.config.js      # Build configuration
├── production/         # Image folder
│   ├── all.png
│   ├── c-1.png
│   └── ...
└── README.md          # This file
```

## 🎨 Customization Guide

### Colors
The template uses these main colors:
- Dusty Rose: #d4a574
- Sage: #9caf88
- Gold: #d4af37
- Ivory: #fff8f0
- Charcoal: #2d3748

### Fonts
- Headings: Playfair Display
- Body text: Inter

### Sections Available
1. **Hero Section** - Main landing area with countdown
2. **Love Story** - Timeline of your relationship
3. **Wedding Details** - Ceremony and reception info
4. **Event Timeline** - Day-of schedule
5. **Wedding Party** - Bridesmaids and groomsmen
6. **Photo Gallery** - Image showcase
7. **RSVP Form** - Guest response system
8. **Contact** - Location and contact info

## 🔧 Technical Features

### Built With
- **HTML5** - Structure
- **Tailwind CSS** - Styling
- **Vanilla JavaScript** - Interactivity
- **Vite** - Build tool
- **AOS** - Scroll animations
- **GLightbox** - Photo gallery
- **EmailJS** - Contact form

### Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge

### Mobile Responsive
- Works on all screen sizes
- Touch-friendly navigation
- Optimized for mobile viewing

## 📧 Contact Form Setup

### EmailJS Configuration
1. Go to https://www.emailjs.com/
2. Create a free account
3. Set up an email service
4. Update the EmailJS configuration in `main.js`

### Alternative: Simple Email
Replace the contact form with a simple mailto link:
```html
<a href="mailto:your-email@example.com">Contact Us</a>
```

## 🚀 Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub account
2. Upload your files to a new repository
3. Enable GitHub Pages in repository settings
4. Your website will be live at: `https://yourusername.github.io/repositoryname`

### Option 2: Netlify (Free)
1. Go to https://netlify.com/
2. Drag and drop your project folder
3. Your website will be live instantly

### Option 3: Traditional Web Hosting
1. Purchase web hosting (GoDaddy, HostGator, etc.)
2. Upload files via FTP
3. Point your domain to the hosting

## 🛠️ Troubleshooting

### Common Issues

#### Website Not Loading
- Check if Node.js is installed: `node --version`
- Make sure you're in the correct folder
- Try running `npm install` again

#### Images Not Showing
- Check if image files exist in the correct folder
- Verify image file names match the code
- Ensure image files are not corrupted

#### Styling Issues
- Clear browser cache (Ctrl+F5)
- Check if all CSS files are loaded
- Verify Tailwind CSS is properly installed

#### Contact Form Not Working
- Check EmailJS configuration
- Verify email service is set up
- Test with a simple email link first

### Getting Help
1. Check this README file
2. Look at the code comments in the files
3. Search for solutions online
4. Contact support if needed

## 📝 License
This template is for personal and commercial use. Please read the license file for details.

## 🙏 Support
If you need help with customization or have questions:
1. Check the documentation above
2. Look at the code comments
3. Search online for solutions
4. Contact the template provider

---

**Happy Wedding Planning! 💕**