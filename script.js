// Highlight link navbar sesuai halaman
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar a");
  const path = window.location.pathname.split("/").pop(); 

  links.forEach(link => {
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
    }
  });
});
