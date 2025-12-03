const darkBtn = document.getElementById("dark-btn");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


const moreAboutBtn = document.getElementById("more-about-btn");
const aboutModalOverlay = document.getElementById("about-modal-overlay");
const aboutModalClose = document.getElementById("about-modal-close");

moreAboutBtn.addEventListener("click", () => {
      aboutModalOverlay.style.display = "flex";
});

aboutModalClose.addEventListener("click", () => {
      aboutModalOverlay.style.display = "none";
});

aboutModalOverlay.addEventListener("click", (e) => {
      if (e.target === aboutModalOverlay) {
            aboutModalOverlay.style.display = "none";
      }
});

document.addEventListener("click", (e) => {
      if (e.key === "Escape") {
            aboutModalOverlay.style.display = "none";
      }
});