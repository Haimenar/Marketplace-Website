// Smooth Scrolling
document.querySelectorAll('header a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Carousel Functionality
  const track = document.querySelector('.carousel-track');
  const products = Array.from(track.children);
  const nextButton = document.querySelector('.carousel-btn.right');
  const prevButton = document.querySelector('.carousel-btn.left');
  const productWidth = products[0].getBoundingClientRect().width;
  
  // Arrange products side by side
  products.forEach((product, index) => {
    product.style.left = `${index * productWidth}px`;
  });
  
  let currentIndex = 0;
  
  nextButton.addEventListener('click', () => {
    if (currentIndex < products.length - 1) {
      currentIndex++;
      track.style.transform = `translateX(-${currentIndex * productWidth}px)`;
    }
  });
  
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      track.style.transform = `translateX(-${currentIndex * productWidth}px)`;
    }
  });