// Image 1

let randomNumber1 = Math.floor((Math.random() * 6) + 1); // generating number from 1 - 6

let randomSource = "images/dice" + randomNumber1 + ".png"; // random images from images/dice1.img - images/dice6.png

let randomImage = document.querySelectorAll("img");

randomImage[0].setAttribute("src", randomSource);   // setting random images for dice 1

// Image 2

let randomNumber2 = Math.floor((Math.random() * 6) + 1);

let randomSource_2 = "images/dice" + randomNumber2 + ".png";

randomImage[1].setAttribute("src", randomSource_2);

// Comparing randomNumber1 and randomNumber2
let heading = document.querySelector("h1");

if (randomNumber1 === randomNumber2) {
    heading.innerHTML = "🚩 Draw Match! 🚩";
} 

else if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "🚩 Player 1 Wins! 🚩";
} 

else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "🚩 Player 2 Wins! 🚩";
}