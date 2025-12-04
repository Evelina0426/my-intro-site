const darkBtn = document.getElementById("dark-btn");

function updateDarkButton() {
      if (document.body.classList.contains("dark-mode")) {
            darkBtn.textContent = "☀️ Light Mode";
      } else {
            darkBtn.textContent = "🌙 Dark Mode";
      }
}

function setTheme(mode) {
      if (mode === "dark") {
            document.body.classList.add("dark-mode")
      } else {
            document.body.classList.remove("dark-mode");
      }
      localStorage.setItem("theme", mode);
      updateDarkButton();
}

document.addEventListener("DOMContentLoaded", () => {
      const savedTheme = localStorage.getItem("theme");

      if (savedTheme === "dark") {
            setTheme("dark");
      } else {
            setTheme("light");
      }
});

darkBtn.addEventListener("click", () => {
      const isDark = document.body.classList.contains("dark-mode");
      if (isDark) {
            setTheme("light");
      } else {
            setTheme("dark");
      }
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


const navToggle = document.getElementById("nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
      navToggle.addEventListener("click", () => {
            siteNav.classList.toggle("open");
      });

      const navLinks = siteNav.querySelectorAll("a");
      navLinks.forEach(link => {
            link.addEventListener("click", () => {
                  if (windows.innerwidth <= 768) {
                        siteNav.classList.remove("open");
                  }
            });
      });
}