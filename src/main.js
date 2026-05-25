import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // 1. MOBILE MENU TOGGLE
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
    });

    // Close menu when clicking on any link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
      });
    });
  }

  // 2. NAVBAR SCROLL CLASS TOGGLE
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  }

  // 3. SCROLL SPY ACTIVE NAVBAR LINK
  const sections = document.querySelectorAll('section[id]');
  const navMenuItems = document.querySelectorAll('.nav-links a:not(.mobile-menu-cta)');

  if (sections.length > 0 && navMenuItems.length > 0) {
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id');
        }
      });

      navMenuItems.forEach((item) => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
          item.classList.add('active');
        }
      });
    });
  }

  // 4. ANIMATE METRICS COUNTERS ON SCROLL
  const animateCounters = () => {
    const counters = document.querySelectorAll('.metric-number');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 1500; // 1.5 seconds
      const increment = target / (duration / 16); // ~60fps
      
      let current = 0;
      const updateCount = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target;
        }
      };
      updateCount();
    });
  };

  const metricsSection = document.querySelector('.metrics-section');
  if (metricsSection) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    observer.observe(metricsSection);
  }

  // 5. FADE-IN ON SCROLL ANIMATION
  const fadeInSections = document.querySelectorAll('.fade-in-section');
  if (fadeInSections.length > 0) {
    const fadeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeInSections.forEach(section => {
      fadeObserver.observe(section);
    });
  }

});
