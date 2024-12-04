document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mainNavLinks = document.querySelector(".main-nav-links");
  const menuIcon = mobileMenuToggle.querySelector("i");

  mobileMenuToggle.addEventListener("click", () => {
    mainNavLinks.classList.toggle("active");

    // Toggle menu icon
    if (mainNavLinks.classList.contains("active")) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-times");
    } else {
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !mainNavLinks.contains(event.target) &&
      !mobileMenuToggle.contains(event.target) &&
      mainNavLinks.classList.contains("active")
    ) {
      mainNavLinks.classList.remove("active");
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    }
  });

  // Carousel Functionality
  const carousel = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".carousel-dot");
  let currentSlide = 0;
  const totalSlides = slides.length;

  // Automatic Sliding
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }

  function updateCarousel() {
    // Move carousel
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
    });
  }

  // Dot Navigation
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      currentSlide = parseInt(dot.getAttribute("data-slide"));
      updateCarousel();
    });
  });

  // Auto slide every 5 seconds
  setInterval(nextSlide, 5000);
});
