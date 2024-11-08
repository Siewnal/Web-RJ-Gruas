let currentIndex = 0;

function rotateImages() {
  const images = document.querySelectorAll(".carrusel-item");
  const totalImages = images.length;

  // Ocultar todas las imágenes
  images.forEach((image) => {
    image.classList.remove("show"); // Elimina la clase que hace visible la imagen
  });

  // Mostrar la imagen actual
  images[currentIndex].classList.add("show"); // Añade la clase para hacer visible la imagen

  // Avanzar al siguiente índice
  currentIndex = (currentIndex + 1) % totalImages;
}

// Inicializa el carrusel
setInterval(rotateImages, 5000);

// Mostrar la primera imagen
rotateImages();