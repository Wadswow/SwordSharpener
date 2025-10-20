import sword from "./sword.jpg";
import "./style.css";

let counter: number = 0;
let totalGrind: number = 0;
let totalSmith: number = 0;
let totalForge: number = 0;
const zero = performance.now();
let lastSecond = -1;
let increment = 0;

//autoclicker handler (using requstAnimationFrame)
function autoclick(currentTime: number) {
  const elapsed = Math.floor((currentTime - zero) / 1000);
  if (elapsed < 1000) {
    if (elapsed > lastSecond) {
      counter += increment;
      counterElement.innerHTML = counter.toFixed(1);
      lastSecond = elapsed;
      if (counter >= 10) {
        disableButton(grindButton, false);
      }
      if (counter >= 100) {
        disableButton(smithButton, false);
      }
      if (counter >= 1000) {
        disableButton(forgeButton, false);
      }
    }
    requestAnimationFrame(autoclick);
  }
}

//disables buttons
function disableButton(button: HTMLButtonElement, condition: boolean) {
  button.disabled = condition;
}

document.body.innerHTML = `
  <h1>Welcome to Sword Sharpener</h1>
  <p><button id="sharpened"><img src="${sword}" class="icon" /></button></p>
  <p>^ click the sword to sharpen</p>
  <p>Current Production Rate: <span id ="growthRate">0</span></p>
  <h4>Swords Sharpened: <span id ="counter">0</span></h4>
  <p>Buy Grindstone: <span id ="totalGrind">0</span> <button id="grindstone" disabled>Buy</button></p>
  <p>Buy Blacksmith: <span id ="totalSmith">0</span> <button id="blacksmith" disabled>Buy</button></p>
  <p>Buy Forge: <span id ="totalForge">0</span> <button id="forge" disabled>Buy</button></p>
`;

const clickButton = document.getElementById("sharpened") as HTMLButtonElement;
const grindButton = document.getElementById("grindstone") as HTMLButtonElement;
const smithButton = document.getElementById("blacksmith") as HTMLButtonElement;
const forgeButton = document.getElementById("forge") as HTMLButtonElement;
const counterElement = document.getElementById("counter")  as HTMLElement;
const grindElement = document.getElementById("totalGrind") as HTMLElement;
const smithElement = document.getElementById("totalSmith") as HTMLElement;
const forgeElement = document.getElementById("totalForge") as HTMLElement;
const growthElement = document.getElementById("growthRate") as HTMLElement;

//button click handler
clickButton.addEventListener("click", () => {
  counter += 1;
  counterElement.innerHTML = counter.toFixed(1);
  if (counter >= 10) {
    disableButton(grindButton, false);
  }
  if (counter >= 100) {
    disableButton(smithButton, false);
  }
  if (counter >= 1000) {
    disableButton(forgeButton, false);
  }
});

grindButton.addEventListener("click", () => {
  totalGrind += 1;
  counter -= 10;
  increment += 0.1;
  counterElement.innerHTML = counter.toFixed(1);
  grindElement.innerHTML = totalGrind.toString();
  growthElement.innerHTML = increment.toFixed(1);
  if (totalGrind > 0) {
    requestAnimationFrame(autoclick);
  }
  if (counter < 10) {
    grindButton.disabled = true;
  }
});

smithButton.addEventListener("click", () => {
  totalSmith += 1;
  counter -= 100;
  increment += 2;
  counterElement.innerHTML = counter.toFixed(1);
  smithElement.innerHTML = totalSmith.toString();
  growthElement.innerHTML = increment.toFixed(1);
  if (totalSmith > 0) {
    requestAnimationFrame(autoclick);
  }
  if (counter < 100) {
    smithButton.disabled = true;
  }
});

forgeButton.addEventListener("click", () => {
  totalForge += 1;
  counter -= 1000;
  increment += 50;
  counterElement.innerHTML = counter.toFixed(1);
  forgeElement.innerHTML = totalForge.toString();
  growthElement.innerHTML = increment.toFixed(1);
  if (totalForge > 0) {
    requestAnimationFrame(autoclick);
  }
  if (counter < 1000) {
    forgeButton.disabled = true;
  }
});
