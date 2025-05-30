// Menu Responsivo
const menuToggle = document.getElementById('menu-toggle');
const navMenu    = document.getElementById('nav-menu');
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Carrossel de Grupos (3 fotos por grupo)
const groups      = document.querySelectorAll('.carousel-group');
const totalGroups = groups.length;
let groupIndex    = 0;

function showGroup(i) {
  document.querySelector('.carousel-groups')
    .style.transform = `translateX(${-i * 100}%)`;
}
function nextGroup() {
  groupIndex = (groupIndex + 1) % totalGroups;
  showGroup(groupIndex);
}
function prevGroup() {
  groupIndex = (groupIndex - 1 + totalGroups) % totalGroups;
  showGroup(groupIndex);
}
document.getElementById('next').addEventListener('click', nextGroup);
document.getElementById('prev').addEventListener('click', prevGroup);
setInterval(nextGroup, 5000);

// Lightbox Modal (listener único por delegação)
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');

// abre ao clicar numa IMG dentro de .gallery-grid
document.querySelector('.gallery-grid').addEventListener('click', e => {
  if (e.target.tagName === 'IMG' && e.target.closest('.gallery-item')) {
    lightboxImage.src = e.target.src;
    lightboxModal.style.display = 'block';
  }
});
// fecha ao clicar no × ou fora da imagem
lightboxClose.addEventListener('click', () => lightboxModal.style.display = 'none');
lightboxModal.addEventListener('click', e => {
  if (e.target === lightboxModal) lightboxModal.style.display = 'none';
});

// Animação e destaque das imagens já presentes em HTML
document.querySelectorAll('.gallery-item').forEach((div, i) => {
  // destaca as 3 primeiras
  if (i < 3) div.classList.add('featured');

  // estado inicial para o fade-in
  div.style.opacity   = '0';
  div.style.transform = 'translateY(20px)';

  setTimeout(() => {
    div.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    div.style.opacity    = '1';
    div.style.transform  = 'translateY(0)';
  }, i * 150);
});
