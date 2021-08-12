// document.querySelector(".w").addEventListener("click", function () {
//   var audio = new Audio('sounds/tom-1.mp3');
//   audio.play();
//   function tom1Img() {
//     document.getElementByClassName(".w").style.backgroundImage = "images/tom1.png";
//   }
// });
// document.querySelector(".a").addEventListener("click", function () {
//   var audio = new Audio('sounds/tom-2.mp3');
//   audio.play();
//   function tom2Img() {
//     document.getElementByClassName(".a").style.backgroundImage = "images/tom2.png";
//   }
// });
// document.querySelector(".s").addEventListener("click", function () {
//   var audio = new Audio('sounds/tom-3.mp3');
//   audio.play();
//   function tom3Img() {
//     document.getElementByClassName(".s").style.backgroundImage = "images/tom3.png";
//   }
// });
// document.querySelector(".d").addEventListener("click", function () {
//   var audio = new Audio('sounds/tom-4.mp3');
//   audio.play();
//   function tom4hImg() {
//     document.getElementByClassName(".d").style.backgroundImage = "images/tom4.png";
//   }
// });
// document.querySelector(".j").addEventListener("click", function () {
//   var audio = new Audio('sounds/crash.mp3');
//   audio.play();
//   function crashImg() {
//     document.getElementByClassName(".j").style.backgroundImage = "images/crash.png";
//   }
// });
// document.querySelector(".l").addEventListener("click", function () {
//   var audio = new Audio('sounds/snare.mp3');
//   audio.play();
//   function snareImg() {
//     document.getElementByClassName(".l").style.backgroundImage = "images/snare.png";
//   }
// });
// document.querySelector(".k").addEventListener("click", function () {
//   var audio = new Audio('sounds/kick-bass.mp3');
//   audio.play();
//   function kickImg() {
//     document.getElementByClassName(".k").style.backgroundImage = "images/kick.png";
//   }
// });

var noOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "k":
      var snare = new Audio('sounds/kick-bass.mp3');
      snare.play();
      break;
    case "l":
      var bass = new Audio('sounds/snare.mp3');
      bass.play();
      break;
    default: console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout (function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
