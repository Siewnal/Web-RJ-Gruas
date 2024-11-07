let currentIndex = 0;

function rotateImages() {
  const images = document.querySelectorAll(".carrusel-item");
  const totalImages = images.length;

  // Ocultar todas las imágenes
  images.forEach((image) => {
    image.style.display = "none";
  });

  // Mostrar la imagen actual
  images[currentIndex].style.display = "block";

  // Avanzar al siguiente índice
  currentIndex = (currentIndex + 1) % totalImages;
}

// Inicializa el carrusel
setInterval(rotateImages, 5000);

// Mostrar la primera imagen
rotateImages();
