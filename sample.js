let slider = document.querySelector(".slider");

let style = window.getComputedStyle(slider);
let matrix = new WebKitCSSMatrix(style.transform);

function activeSlider() {
  for (i = 0; i > -10; i--) {
    matrix.m41 = i;
    console.log(i);
  }
}

$(".slider").bxSlider({
  auto: true,
  speed: 300000,
  mode: "horizontal",
  preloadImages: "all",
  autoDirection: "next",
  autoControls: true,
  stopAutoOnClick: true,
  paper: true,
  slideWidth: 600,
});
