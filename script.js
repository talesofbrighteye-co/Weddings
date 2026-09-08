const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

// Show selected slide
function showSlide(index) {

if (index >= slide.length) {
currentIndex = 0;
}
else if (index < 0) {
currentIndex = slide.length - 1;
}
else {
currentIndex = index;
}

slides.style.transform =
translateX(-${currentIndex * 100}%);

// Update dots
dots.forEach(dot => {
dot.classList.remove("active");
});

dots[currentIndex].classList.add("active");
}

// Next button
document.querySelector(".next").addEventListener("click", () => {
showSlide(currentIndex + 1);
});

// Previous button
document.querySelector(".prev").addEventListener("click", () => {
showSlide(currentIndex - 1);
});

// Dot navigation
dots.forEach((dot, index) => {
dot.addEventListener("click", () => {
showSlide(index);
});
});

// Automatic sliding
setInterval(() => {
showSlide(currentIndex + 1);
}, 60);
