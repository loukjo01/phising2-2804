// Funktion til at vise modal med en besked
function showModal(message) {
  const modal = document.getElementById('my-modal');
  const modalText = document.getElementById('modal-text');
  modalText.textContent = message;
  modal.style.display = 'block';
}

// Funktion til at lukke modalen
function closeModal() {
  const modal = document.getElementById('my-modal');
  modal.style.display = 'none';
}

// Hent referencen til linket
const largeImageLink = document.getElementById('largeImageLink');

// Tilføj en klikhændelseslytter til linket
largeImageLink.addEventListener('click', function(event) {
   event.preventDefault(); // Forhindrer standard linkadfærd

   // Omdiriger til den ønskede side
   window.location.href = "images/office365-imagemap-page.html";
});

// Håndtering af produktforhåndsvisninger
const previewContainer = document.querySelector('.products-preview');
const previewBoxes = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    previewContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBoxes.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

// Lukning af produktforhåndsvisninger
previewBoxes.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    previewContainer.style.display = 'none';
  };
});

// Håndtering af karusel
document.addEventListener("DOMContentLoaded", function() {
  let currentIndex = 0;
  const slides = document.querySelectorAll('.carousel .carousel-images img');

  function moveSlide(direction) {
    console.log("Moving slide: " + direction);
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    updateCarousel();
  }

  function updateCarousel() {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });
  }

  // Add event listeners to buttons
  document.querySelector('.prev').addEventListener('click', function() {
    moveSlide(-1);
  });

  document.querySelector('.next').addEventListener('click', function() {
    moveSlide(1);
  });
});

