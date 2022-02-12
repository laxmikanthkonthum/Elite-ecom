let slider = document.querySelector(".slider");
let op = document.querySelector(".slider-val");
slider.addEventListener("input", () => op.innerText = slider.value);