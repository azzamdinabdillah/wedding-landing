import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import GLightbox from 'glightbox'
import { CountUp } from 'countup.js'
import emailjs from 'emailjs-com'
import VanillaTilt from 'vanilla-tilt'
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Initialize AOS
AOS.init({
  duration: 500,
  easing: 'ease-in-out',
  // once: true,
  // mirror: false
})

// Initialize EmailJS
emailjs.init("YOUR_USER_ID") // Replace with your EmailJS user ID

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation()
  // initializeHero()
  initializeCountdown()
  initializeGallery()
  initializeRSVP()
  initializeTilt()
  // initializeAnimations()
  initializeScrollEffects()
})

// Navigation functionality
function initializeNavigation() {
  const navbar = document.getElementById('navbar')
  const mobileMenuBtn = document.getElementById('mobile-menu-btn')
  const mobileMenu = document.getElementById('mobile-menu')
  const navLinks = document.querySelectorAll('.nav-link, .nav-link-new, .mobile-nav-link')
  
  // Mobile menu toggle with animation
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenuBtn.classList.toggle('active')
    
    // Add slide animation
    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('active')
    } else {
      mobileMenu.classList.remove('active')
    }
  })
  
  // Close mobile menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden')
      mobileMenu.classList.remove('active')
      mobileMenuBtn.classList.remove('active')
    })
  })
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add('hidden')
      mobileMenu.classList.remove('active')
      mobileMenuBtn.classList.remove('active')
    }
  })
  
  // Enhanced navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled')
      navbar.classList.remove('navbar-transparent')
    } else {
      navbar.classList.remove('navbar-scrolled')
      navbar.classList.add('navbar-transparent')
    }
  })
  
  // Set initial state
  if (window.scrollY <= 50) {
    navbar.classList.add('navbar-transparent')
  }
  
  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    })
  })
  
  // Add hover effects for desktop nav links
  const desktopNavLinks = document.querySelectorAll('.nav-link-new')
  desktopNavLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'translateY(-2px)'
    })
    
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'translateY(0)'
    })
  })
}

// Hero section animations
// function initializeHero() {
//   const heroTitle = document.querySelector('#home h1')
//   const heroSubtitle = document.querySelector('#home p')
  
//   if (heroTitle && heroSubtitle) {
//     gsap.fromTo(heroTitle, 
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
//     )
    
//     gsap.fromTo(heroSubtitle, 
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: "power2.out" }
//     )
//   }
// }

// Countdown timer using countdown.js
function initializeCountdown() {
  // Set the countdown target to 10 days from now
  const now = new Date();
  const targetDate = new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000);
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  function updateCountdown() {
    const timespan = countdown(null, targetDate, countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);
    if (daysElement) daysElement.textContent = String(timespan.days).padStart(2, '0');
    if (hoursElement) hoursElement.textContent = String(timespan.hours).padStart(2, '0');
    if (minutesElement) minutesElement.textContent = String(timespan.minutes).padStart(2, '0');
    if (secondsElement) secondsElement.textContent = String(timespan.seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Gallery with lightbox
function initializeGallery() {
  const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    plyr: {
      config: {
        ratio: '16:9',
        youtube: {
          noCookie: true,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3
        }
      }
    }
  })
}

// RSVP form handling
function initializeRSVP() {
  const form = document.getElementById('rsvp-form')
  const successMessage = document.getElementById('rsvp-success')
  
  // Initialize custom radio buttons
  initializeCustomRadioButtons()
  
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      
      const formData = new FormData(form)
      const data = Object.fromEntries(formData.entries())
      
      try {
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]')
        const originalText = submitBtn.textContent
        submitBtn.textContent = 'Sending...'
        submitBtn.disabled = true
        
        // Send email using EmailJS
        const result = await emailjs.send(
          'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
          'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
          {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            attending: data.attending,
            guests: data.guests,
            dietary: data.dietary,
            songs: data.songs,
            message: data.message
          }
        )
        
        // Show success message
        form.style.display = 'none'
        successMessage.classList.remove('hidden')
        
        // Reset form
        form.reset()
        
      } catch (error) {
        console.error('Error sending RSVP:', error)
        alert('There was an error sending your RSVP. Please try again or contact us directly.')
      } finally {
        // Reset button
        const submitBtn = form.querySelector('button[type="submit"]')
        submitBtn.textContent = originalText
        submitBtn.disabled = false
      }
    })
  }
}

// Custom radio button functionality
function initializeCustomRadioButtons() {
  const radioGroups = document.querySelectorAll('input[type="radio"]')
  
  radioGroups.forEach(radio => {
    const label = radio.closest('label')
    const radioCard = label.querySelector('.radio-card')
    const radioDot = label.querySelector('.radio-dot')
    const radioInner = label.querySelector('.radio-inner')
    
    // Set initial state
    if (radio.checked) {
      updateRadioButtonState(label, true)
    }
    
    // Handle click events
    label.addEventListener('click', (e) => {
      e.preventDefault()
      
      // Uncheck all radios in the same group
      const name = radio.name
      const allRadios = document.querySelectorAll(`input[name="${name}"]`)
      allRadios.forEach(r => {
        r.checked = false
        const rLabel = r.closest('label')
        updateRadioButtonState(rLabel, false)
      })
      
      // Check the clicked radio
      radio.checked = true
      updateRadioButtonState(label, true)
    })
  })
}

// Update radio button visual state
function updateRadioButtonState(label, isChecked) {
  const radioCard = label.querySelector('.radio-card')
  const radioDot = label.querySelector('.radio-dot')
  const radioInner = label.querySelector('.radio-inner')
  
  if (isChecked) {
    // Add selected styles
    if (label.dataset.value === 'yes') {
      radioCard.classList.add('border-dusty-rose', 'bg-dusty-rose/10', 'ring-4', 'ring-dusty-rose/20')
      radioDot.classList.add('border-dusty-rose', 'bg-dusty-rose')
    } else {
      radioCard.classList.add('border-charcoal', 'bg-charcoal/10', 'ring-4', 'ring-charcoal/20')
      radioDot.classList.add('border-charcoal', 'bg-charcoal')
    }
    radioInner.classList.add('opacity-100')
  } else {
    // Remove selected styles
    if (label.dataset.value === 'yes') {
      radioCard.classList.remove('border-dusty-rose', 'bg-dusty-rose/10', 'ring-4', 'ring-dusty-rose/20')
      radioDot.classList.remove('border-dusty-rose', 'bg-dusty-rose')
    } else {
      radioCard.classList.remove('border-charcoal', 'bg-charcoal/10', 'ring-4', 'ring-charcoal/20')
      radioDot.classList.remove('border-charcoal', 'bg-charcoal')
    }
    radioInner.classList.remove('opacity-100')
  }
}

// Vanilla Tilt for cards
function initializeTilt() {
  const tiltElements = document.querySelectorAll('.card-hover')
  
  tiltElements.forEach(element => {
    VanillaTilt.init(element, {
      max: 5,
      speed: 400,
      glare: true,
      'max-glare': 0.1,
    })
  })
}

// GSAP animations
// function initializeAnimations() {
//   // Animate sections on scroll
//   gsap.utils.toArray('section').forEach((section, index) => {
//     if (section.id !== 'home') {
//       gsap.fromTo(section, 
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1, 
//           y: 0, 
//           duration: 1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: section,
//             start: "top 80%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse"
//           }
//         }
//       )
//     }
//   })
  
//   // Animate gallery items
//   const galleryItems = document.querySelectorAll('.gallery-item')
//   galleryItems.forEach((item, index) => {
//     gsap.fromTo(item,
//       { opacity: 0, scale: 0.8 },
//       {
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         delay: index * 0.1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: item,
//           start: "top 90%",
//           toggleActions: "play none none reverse"
//         }
//       }
//     )
//   })
  
//   // Animate timeline items
//   // const timelineItems = document.querySelectorAll('.timeline-item')
//   // timelineItems.forEach((item, index) => {
//   //   gsap.fromTo(item,
//   //     { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
//   //     {
//   //       opacity: 1,
//   //       x: 0,
//   //       duration: 1,
//   //       ease: "power2.out",
//   //       scrollTrigger: {
//   //         trigger: item,
//   //         start: "top 85%",
//   //         toggleActions: "play none none reverse"
//   //       }
//   //     }
//   //   )
//   // })
// }

// Scroll effects
function initializeScrollEffects() {
  // Parallax effect for hero section
  // gsap.to('#home', {
  //   yPercent: -50,
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: '#home',
  //     start: "top top",
  //     end: "bottom top",
  //     scrub: true
  //   }
  // })
  
  // Navbar active link highlighting
  const sections = document.querySelectorAll('section[id]')
  const navLinks = document.querySelectorAll('.nav-link')
  
  window.addEventListener('scroll', () => {
    let current = ''
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100
      const sectionHeight = section.clientHeight
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id')
      }
    })
    
    navLinks.forEach(link => {
      link.classList.remove('text-dusty-rose')
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('text-dusty-rose')
      }
    })
  })
}

// Utility functions
// function debounce(func, wait) {
//   let timeout
//   return function executedFunction(...args) {
//     const later = () => {
//       clearTimeout(timeout)
//       func(...args)
//     }
//     clearTimeout(timeout)
//     timeout = setTimeout(later, wait)
//   }
// }

// Performance optimization
function optimizeImages() {
  const images = document.querySelectorAll('img')
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.style.opacity = '0'
        img.style.transition = 'opacity 0.5s ease'
        img.onload = () => {
          img.style.opacity = '1'
        }
        observer.unobserve(img)
      }
    })
  })
  
  images.forEach(img => imageObserver.observe(img))
}

// Initialize image optimization
// optimizeImages()

// Add loading states and error handling
window.addEventListener('load', () => {
  document.body.classList.add('loaded')
  
  // Hide loading spinner if you have one
  const loader = document.getElementById('loader')
  if (loader) {
    loader.style.display = 'none'
  }
})

// Error handling for failed resources
window.addEventListener('error', (e) => {
  console.error('Resource failed to load:', e.target.src || e.target.href)
})

// Accessibility improvements
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const mobileMenu = document.getElementById('mobile-menu')
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden')
    }
  }
})

// Add focus visible polyfill for better keyboard navigation
if (!CSS.supports('selector(:focus-visible)')) {
  const focusVisiblePolyfill = document.createElement('script')
  focusVisiblePolyfill.src = 'https://unpkg.com/focus-visible@5.2.0/dist/focus-visible.min.js'
  document.head.appendChild(focusVisiblePolyfill)
}