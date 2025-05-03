let currentSlide = 0;
const slides = document.getElementById("slides");
const dots = document.querySelectorAll(".dot");

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}

function moveSlide(step) {
  currentSlide = (currentSlide + step + dots.length) % dots.length;
  updateSlidePosition();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlidePosition();
}

// Tự động chuyển slide mỗi 5 giây
setInterval(() => moveSlide(1), 5000);

function openTechnology(tabName, elm) {
  const tabContent = document.querySelectorAll(".technology--list");
  const tabButtons = document.querySelectorAll(".tablink");

  // Ẩn tất cả
  tabContent.forEach((tab) => (tab.style.display = "none"));
  tabButtons.forEach((btn) => btn.classList.remove("active"));

  // Hiện tab chọn
  document.getElementById(tabName).style.display = "flex";
  elm.classList.add("active");
}

// Mở tab mặc định
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("defaultOpen").click();
});
