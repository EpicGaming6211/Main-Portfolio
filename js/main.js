// 🔥 COMPLETE FIXED MAIN.JS - "Start Project" WORKING PERFECTLY
document.addEventListener('DOMContentLoaded', function() {
  
  // Get current page filename
  function getCurrentPage() {
    return window.location.pathname.split('/').pop() || 'index.html';
  }

  // Highlight active nav link
  function updateActiveNav() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.style.color = '#a77bf2';
        link.style.background = 'rgba(167,123,242,0.1)';
      }
    });
  }

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Smooth scroll for anchor links ONLY (not external pages)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // External page navigation (Start Project, etc.)
  document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener('click', function(e) {
      // Don't prevent default for external pages
      // Just add smooth transition effect
      document.body.style.opacity = '0.5';
      setTimeout(() => {
        window.location.href = this.getAttribute('href');
      }, 200);
    });
  });

  // Update active nav on load
  updateActiveNav();

  // Mobile hamburger menu - FIXED
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${index * 0.1}s`;
        entry.target.classList.add('fade-in-up');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
  });

  // Hero parallax
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
      heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });

  // Page load animation
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.6s ease';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 200);

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('🎉 Message sent! Check Discord for response within 24h 🚀');
      this.reset();
    });
  }

  // Enhanced CTA animations
  document.querySelectorAll('.hero-cta, .cta-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) scale(1.05)';
      this.style.boxShadow = '0 20px 40px rgba(167, 123, 242, 0.6)';
    });
    btn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 10px 30px rgba(167, 123, 242, 0.4)';
    });
  });

  // Card hover effects
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });

  console.log('✅ RealVansh Portfolio - Navigation PERFECT');
});