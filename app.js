const darkBtn = document.getElementById("dark-btn");

function updateDarkButton() {
      if (document.body.classList.contains("dark-mode")) {
            darkBtn.textContent = "☀️ Light Mode";
      } else {
            darkBtn.textContent = "🌙 Dark Mode";
      }
}

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  updateDarkButton();
});

updateDarkButton();


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

document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
            aboutModalOverlay.style.display = "none";
      }
});