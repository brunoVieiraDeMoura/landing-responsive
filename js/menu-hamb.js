document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const container = document.querySelector(".container");
  const bgSideBar = document.getElementById("bg-sidebar");

  hamburger.addEventListener("click", function () {
    sidebar.classList.toggle("open");
    hamburger.classList.add("open");
    if (bgSideBar.classList.contains("fade-in")) {
      bgSideBar.classList.remove("fade-in");
      hamburger.classList.remove("open");
      bgSideBar.classList.add("fade-out");
    } else {
      bgSideBar.classList.remove("fade-out");
      bgSideBar.classList.add("fade-in");
    }
  });

  container.addEventListener("click", function (e) {
    if (
      sidebar.classList.contains("open") &&
      !sidebar.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      sidebar.classList.remove("open");
      bgSideBar.classList.remove("fade-in");
      bgSideBar.classList.add("fade-out");
      hamburger.classList.remove("open");
    }
  });
  bgSideBar.classList.add("fade-out");
});
