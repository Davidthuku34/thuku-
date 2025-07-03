document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "images/slide1.jpg",
    "images/slide2.jpeg",
  
    "images/slide4.jpeg"
  ];

  let currentIndex = 0;
  const mainContent = document.querySelector(".main-content");

  function changeBackground() {
    mainContent.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
  }

  // Start the slideshow
  changeBackground(); // show first image
  setInterval(changeBackground, 2000); // change every 5 seconds
});
