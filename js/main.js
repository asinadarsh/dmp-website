// ===== PRELOADER =====
const preloader = document.getElementById('preloader');
window.addEventListener('load', () => {
  setTimeout(() => {
    preloader.classList.add('hidden');
  }, 600);
});

// ===== MOBILE NAV =====
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', links.classList.contains('open'));
  });
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
    }
  });
}

// ===== ACTIVE NAV LINK =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ===== FORM SUCCESS MESSAGE =====
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.search.includes('sent=1')) {
    const msg = document.getElementById('success-msg');
    if (msg) {
      msg.style.display = 'block';
      setTimeout(() => {
        msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 800);
    }
  }
});

// ===== SCROLL FADE-IN =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
