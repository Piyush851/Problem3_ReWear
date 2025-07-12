// Inject header
fetch('assets/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

// Inject footer (optional)
fetch('assets/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });
// Inject Carousel
fetch('assets/carousel.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('carousel').innerHTML = data;
  });

// Carousel
const carousel = document.getElementById("carouselTrack");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
let cardWidth = 0;
// Ensure we measure after DOM is loaded
window.addEventListener("load", () => {
  const card = carousel.querySelector("div");
  cardWidth = card.offsetWidth + 16; // card width + gap (Tailwind gap-4 = 16px)
});
nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
});
prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});