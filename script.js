const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuBtn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Open navigation menu');
    });
  });
}

document.querySelectorAll('.service-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const select = document.getElementById('service');
    if (select) {
      select.value = button.dataset.service;
    }

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setTimeout(() => {
      const nameInput = document.getElementById('name');
      if (nameInput) nameInput.focus();
    }, 400);
  });
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');
    const serviceSelect = document.getElementById('service');
    const formMessage = document.getElementById('formMessage');

    const name = nameInput ? nameInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';
    const service = serviceSelect ? serviceSelect.value : 'your service';

    if (!name || !message) {
      if (formMessage) {
        formMessage.style.color = '#b91c1c';
        formMessage.textContent = 'Please fill in your name and message.';
      }
      return;
    }

    if (formMessage) {
      formMessage.style.color = '#0b7f4c';
      formMessage.textContent = `Thanks, ${name}! Your ${service} request has been prepared.`;
    }

    contactForm.reset();
  });
}

const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
