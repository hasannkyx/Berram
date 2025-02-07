let index = 0;
function showSlides() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");
    index = (index + 1) % slides.length;
    slides[index].style.display = "block";
}
setInterval(showSlides, 3000);
