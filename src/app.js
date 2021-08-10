/* eslint-disable */

import "./style.css";

window.onload = function() {
  let card = document.querySelector(".card");
  card.classList.add(generateRandomSuit());
  card.innerHTML = generateRandomNumber();
  console.log("tutto bene!");
};

function generateRandomNumber() {
  let numbers = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let number = Math.floor(Math.random() * numbers.length);
  return numbers[number];
}

function generateRandomSuit() {
  let suits = ["spade", "club", "heart", "diamond"];
  let suit = Math.floor(Math.random() * suits.length);
  return suits[suit];
}
