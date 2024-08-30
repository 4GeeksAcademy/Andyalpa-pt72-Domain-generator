/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const pronouns = ["the", "la", "los", "our", "your"];
const adjs = ["great", "small", "big", "grande", "tall", "ugly-naked"];
const nouns = ["pagina", "dog", "gato", "dragon", "guy-friends", "lastof"];
const domains = [".com", ".us", ".org", ".net"];

const getRandomElement = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const generateDomain = () => {
  let pronoun = getRandomElement(pronouns);
  let adj = getRandomElement(adjs);
  let noun = getRandomElement(nouns);
  let domain = getRandomElement(domains);

  return pronoun + adj + noun + domain;
};

const generateButton = document.querySelector(".btn");

function generateTenDomain() {
  const randomDomain = [];
  for (let i = 0; i < 10; i++) {
    randomDomain.push(generateDomain());
  }
  return randomDomain;
}

generateButton.addEventListener("click", () => {
  const domains = generateTenDomain();
  const listItems = domains.map(domain => `<li>${domain}</li>`).join("");

  document.getElementById("generateDomain").innerHTML = `<ul>${listItems}</ul>`;
});
