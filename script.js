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

// Remova ou comente a simulação do formulário de contato, 
// pois não há elemento com id "contact-form" no HTML.
// const contactForm = document.getElementById('contact-form');
// if (contactForm) {
//   contactForm.addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('Mensagem enviada! Em breve entraremos em contato.');
//     contactForm.reset();
//   });
// }

// Seleciona todas as imagens da galeria
const galleryImages = document.querySelectorAll('.gallery-item img');
// Seleciona o modal, a imagem grande e o botão de fechar
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');

// Abre o modal ao clicar na imagem
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightboxModal.style.display = 'block';
    lightboxImage.src = img.src; // coloca a mesma imagem no modal
  });
});

// Fecha o modal ao clicar no X
lightboxClose.addEventListener('click', () => {
  lightboxModal.style.display = 'none';
});

// (Opcional) Fecha o modal ao clicar fora da imagem
lightboxModal.addEventListener('click', (e) => {
  if (e.target === lightboxModal) {
    lightboxModal.style.display = 'none';
  }
});
