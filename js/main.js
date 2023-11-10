(function () {
  // Hide the spinner after 1 second
  const spinner = document.querySelector("#spinner");
  if (spinner) {
    setTimeout(() => spinner.classList.remove("show"), 1000);
  }

  // Initiate WOW.js
  new WOW().init();

  // Make the navbar sticky
  const navbar = document.querySelector(".sticky-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      navbar.style.top = 0;
    } else {
      navbar.style.top = -100;
    }
  });

  // Open the dropdown menu on mouse hover
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseover", () => {
      dropdown.classList.add("show");
      dropdown
        .querySelector(".dropdown-toggle")
        .setAttribute("aria-expanded", true);
      dropdown.querySelector(".dropdown-menu").classList.add("show");
    });
    dropdown.addEventListener("mouseout", () => {
      dropdown.classList.remove("show");
      dropdown
        .querySelector(".dropdown-toggle")
        .setAttribute("aria-expanded", false);
      dropdown.querySelector(".dropdown-menu").classList.remove("show");
    });
  });

  // Show the back-to-top button when the user scrolls down
  const backToTopButton = document.querySelector(".back-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Scroll to the top of the page when the back-to-top button is clicked
  backToTopButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
})();
