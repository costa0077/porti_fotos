// Menu Responsivo
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Carrossel de Grupos (3 fotos por grupo)
const groups = document.querySelectorAll('.carousel-group');
const totalGroups = groups.length;
let groupIndex = 0;

function showGroup(index) {
  const carouselGroups = document.querySelector('.carousel-groups');
  carouselGroups.style.transform = 'translateX(' + (-index * 100) + '%)';
}

function nextGroup() {
  groupIndex = (groupIndex + 1) % totalGroups;
  showGroup(groupIndex);
}

function prevGroup() {
  groupIndex = (groupIndex - 1 + totalGroups) % totalGroups;
  showGroup(groupIndex);
}

const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

nextButton.addEventListener('click', nextGroup);
prevButton.addEventListener('click', prevGroup);

// Auto avançar o carrossel a cada 5 segundos
setInterval(nextGroup, 5000);

// Simulação de envio do formulário de contato
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada! Em breve entraremos em contato.');
  contactForm.reset();
});
