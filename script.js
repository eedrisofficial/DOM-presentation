const button = document.getElementById("changeColorButton");
let isBackgroundColor1 = true;

button.addEventListener("click", function () {
  const body = document.body;

  if (isBackgroundColor1) {
    body.style.backgroundColor = "blue";
  } else {
    body.style.backgroundColor = "red";
  }
  isBackgroundColor1 = !isBackgroundColor1;
});
