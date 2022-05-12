// An array of objects with all sounds and their id.
const sounds = [
  {
    name: `clap`,
    key: `c`,
    id: "item-instrument1",
    sound: new Audio(`./Drumsounds/clap.wav`),
  },
  {
    name: `hihat`,
    key: `h`,
    id: "item-instrument2",
    sound: new Audio(`Drumsounds/hihat.wav`),
  },
  {
    name: `kick`,
    key: `k`,
    id: "item-instrument3",
    sound: new Audio(`Drumsounds/kick.wav`),
  },
  {
    name: `openhat`,
    key: `o`,
    id: "item-instrument4",
    sound: new Audio(`Drumsounds/openhat.wav`),
  },
  {
    name: `ride`,
    key: `r`,
    id: "item-instrument5",
    sound: new Audio(`Drumsounds/ride.wav`),
  },
  {
    name: `snare`,
    key: `s`,
    id: "item-instrument6",
    sound: new Audio(`Drumsounds/snare.wav`),
  },
  {
    name: `tink`,
    key: `t`,
    id: "item-instrument7",
    sound: new Audio(`Drumsounds/tink.wav`),
  },
  {
    name: `tom`,
    key: `m`,
    id: "item-instrument8",
    sound: new Audio(`Drumsounds/tom.wav`),
  },
];

// Event listening for the correct key presses, also accepting upper case keys.
document.body.addEventListener(`keydown`, (e) => {
  sounds.forEach((sound) => {
    if (e.key.toLowerCase() === sound.key) {
      playSound(sound);
    }
  });
});

// The function to run when correct key is pressed, also object destructuring to enable
//  access to both sound and id key, gsap used to add some animation when key is pressed.
function playSound({ sound, id }) {
  sound.currentTime = 0;
  sound.play();
  document.querySelector(`#${id}`).style.backgroundColor = randomColor();
  gsap.fromTo(
    `#${id}`,
    {
      scale: 0,
    },
    {
      duration: 0.1,
      scale: 1,
    }
  );
}

// Random color function.
function randomColor() {
  let myRandomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return myRandomColor;
}

// OLD CODE TESTING

// Add the sound: audio property for all objects in the array.
// sounds.forEach((element) => (element.sound = new Audio(element.file)));

// Check for key presses and look into the sounds.key value for every entry using forEach
// document.body.addEventListener(`keydown`, (event) => {
//   sounds.forEach((element) => {
//     if (event.key !== element.key) return;
//     playSound(element.sound);
//   });
// });

// Add random color for each sound getting played (key pressed)
// document.addEventListener("keydown", function (event) {
// if (event.code === "KeyC") {
//   document.querySelector("#item-instrument1").style.backgroundColor = randomColor();
// }
//   if (event.code === "KeyH") {
//     document.querySelector("#item-instrument2").style.backgroundColor = randomColor();
//   }
//   if (event.code === "KeyK") {
//     document.querySelector("#item-instrument3").style.backgroundColor = randomColor();
//   }
//   if (event.code === "KeyO") {
//     document.querySelector("#item-instrument4").style.backgroundColor = randomColor();
//   }
//   if (event.code === "KeyR") {
//     document.querySelector("#item-instrument5").style.backgroundColor = randomColor();
//   }
//   if (event.code === "KeyS") {
//     document.querySelector("#item-instrument6").style.backgroundColor = randomColor();
//   }
//   if (event.code === "KeyT") {
//     document.querySelector("#item-instrument7").style.backgroundColor = randomColor();
//   }
//   if (event.code === "KeyM") {
//     document.querySelector("#item-instrument8").style.backgroundColor = randomColor();
//   }
// });
