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

// Seleciona elementos do modal de Lightbox
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');

// Função para adicionar evento de lightbox às imagens da galeria
function addLightboxEvent() {
  const galleryImages = document.querySelectorAll('.gallery-item img');
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightboxModal.style.display = 'block';
      lightboxImage.src = img.src;
    });
  });
}

// Função para embaralhar um array (algoritmo Fisher-Yates)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Carrega as imagens dinamicamente na galeria via JSON
fetch('images.json')
  .then(response => response.json())
  .then(data => {
    const galleryGrid = document.querySelector('.gallery-grid');
    // Embaralha as imagens antes de inseri-las na galeria
    const shuffledImages = shuffle(data.images);
    shuffledImages.forEach((image, index) => {
      const div = document.createElement('div');
      div.classList.add('gallery-item');

      const img = document.createElement('img');
      img.src = 'public/galery_photos/' + image;
      img.alt = 'Foto ' + (index + 1);
      img.loading = 'lazy';

      div.appendChild(img);
      galleryGrid.appendChild(div);
    });
    // Após carregar as imagens, adiciona os eventos da lightbox
    addLightboxEvent();
  })
  .catch(error => console.error('Erro ao carregar as imagens:', error));

// Fecha o modal ao clicar no botão de fechar
lightboxClose.addEventListener('click', () => {
  lightboxModal.style.display = 'none';
});

// Fecha o modal ao clicar fora da imagem
lightboxModal.addEventListener('click', (e) => {
  if (e.target === lightboxModal) {
    lightboxModal.style.display = 'none';
  }
});
    