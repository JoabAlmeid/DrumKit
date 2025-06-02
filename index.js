var numberOfButtons = document.querySelectorAll(".drum");

for (i = 0; i < numberOfButtons.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked!");
  });
}
