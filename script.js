// Theme toggle with localStorage
(function() {
  const root = document.documentElement;
  const key = 'theme';
  const saved = localStorage.getItem(key);
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  if (saved === 'light' || (!saved && prefersLight)) root.classList.add('light');
  const btn = document.getElementById('themeToggle');
  btn?.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem(key, root.classList.contains('light') ? 'light' : 'dark');
  });
})();

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navMenu?.classList.toggle('show');
});

// Active section highlight (basic)
const links = document.querySelectorAll('.nav-menu a[href^="#"]');
const sections = Array.from(links).map(a => document.querySelector(a.getAttribute('href')));
const onScroll = () => {
  const y = window.scrollY + 100;
  sections.forEach((sec, i) => {
    if (!sec) return;
    const top = sec.offsetTop; const bottom = top + sec.offsetHeight;
    if (y >= top && y < bottom) {
      links.forEach(l => l.classList.remove('active'));
      links[i].classList.add('active');
    }
  });
};
window.addEventListener('scroll', onScroll);

// Set current year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
