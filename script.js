document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const dropdownMenu = document.getElementById("dropdownMenu");

  toggleButton.addEventListener("click", function () {
    if (dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none";
    } else {
      dropdownMenu.style.display = "block";
    }
  });

  // Optional: Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function (event) {
    if (
      !toggleButton.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.style.display = "none";
    }
  });
});
