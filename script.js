document.addEventListener("DOMContentLoaded", () => {
  // --- Search Overlay Logic ---
  const searchBtn = document.querySelector(".search-overlay button");
  const searchInput = document.querySelector(".search-overlay input");

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      const query = searchInput.value.trim();
      if (query) {
        alert(`Searching for: ${query}`);
      } else {
        alert("Please enter a search term.");
      }
    });

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        searchBtn.click();
      }
    });
  }

  // --- Newsletter Form Logic ---
  const newsletterForm = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('emailInput');

  if (newsletterForm && emailInput) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = emailInput.value.trim();

      if (email === '') {
        alert('Please enter a valid email address.');
        return;
      }

      alert('Subscribed');
      emailInput.value = '';
    });
  }

  // --- Back Button Logic ---
  const backBtn = document.getElementById("goBackBtn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      history.back();
    });
  }
});

// --- Toggle Hamburger Menu ---
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}
