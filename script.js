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

function showGroup(index) {
  document.querySelector('.carousel-groups')
    .style.transform = `translateX(${-index * 100}%)`;
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
setInterval(nextGroup, 5000); // auto avança a cada 5s

// Lightbox Modal
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');

// Fecha o modal ao clicar no "×" ou fora da imagem
lightboxClose.addEventListener('click', () => lightboxModal.style.display = 'none');
lightboxModal.addEventListener('click', e => {
  if (e.target === lightboxModal) lightboxModal.style.display = 'none';
});

// Único listener para expandir qualquer imagem da galeria
document.querySelector('.gallery-grid').addEventListener('click', e => {
  // se clicou em IMG dentro de .gallery-item
  if (e.target && e.target.tagName === 'IMG' && e.target.closest('.gallery-item')) {
    lightboxImage.src = e.target.src;
    lightboxModal.style.display = 'block';
  }
});

// Carrega as imagens dinamicamente na galeria com destaques e animação
fetch('images.json')
  .then(res => {
    if (!res.ok) throw new Error('JSON não encontrado');
    return res.json();
  })
  .then(data => {
    const galleryGrid = document.querySelector('.gallery-grid');
    data.images.forEach((image, i) => {
      const div = document.createElement('div');
      div.classList.add('gallery-item');
      if (i < 3) div.classList.add('featured');

      const img = document.createElement('img');
      img.src     = `public/galery_photos/${image}`;
      img.alt     = `Foto ${i + 1}`;
      img.loading = 'lazy';
      div.appendChild(img);

      // animação inicial
      div.style.opacity   = '0';
      div.style.transform = 'translateY(20px)';
      galleryGrid.appendChild(div);

      // fade-in sequencial
      setTimeout(() => {
        div.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        div.style.opacity    = '1';
        div.style.transform  = 'translateY(0)';
      }, i * 150);
    });
  })
  .catch(err => console.error('Erro ao carregar as imagens:', err));
