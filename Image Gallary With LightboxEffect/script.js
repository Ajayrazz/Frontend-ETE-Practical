let currentIndex = 0;
const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg'
];

function openLightbox(index) {
  currentIndex = index;
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  lightboxImage.src = images[index];
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}

function changeImage(direction) {
  currentIndex += direction;
  
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  
  const lightboxImage = document.getElementById('lightbox-image');
  lightboxImage.src = images[currentIndex];
}
