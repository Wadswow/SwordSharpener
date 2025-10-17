import sword from "./sword.jpg";
import "./style.css";

let counter: number = 0;
let totalGrind: number = 0;
const zero = performance.now();
let lastSecond = -1;

//autoclicker handler (using requstAnimationFrame)
function autoclick(currentTime: number) {
  const elapsed = Math.floor((currentTime - zero) / 1000);
  if (elapsed < 1000) {
    if (elapsed > lastSecond) {
      counter += 1;
      counterElement.innerHTML = counter.toString();
      lastSecond = elapsed;
      if (counter >= 10) {
        upgradeButton.disabled = false;
      }
    }
    requestAnimationFrame(autoclick);
  }
}

document.body.innerHTML = `
  <h1>Welcome to Sword Sharpener</h1>
  <p><button id="sharpened"><img src="${sword}" class="icon" /></button></p>
  <p>^ click the sword to sharpen</p>
  <h4>Swords Sharpened: <span id ="counter">0</span></h4>
  <p>Buy Grindstone: <span id ="totalGrind">0</span> <button id="grindstone" disabled>Buy</button></p>
`;

const clickButton = document.getElementById("sharpened")!;
const upgradeButton = document.getElementById(
  "grindstone",
) as HTMLButtonElement;
const counterElement = document.getElementById("counter")!;
const grindElement = document.getElementById("totalGrind")!;

//button click handler
clickButton.addEventListener("click", () => {
  counter += 1;
  counterElement.innerHTML = counter.toString();
  if (counter >= 10) {
    upgradeButton.disabled = false;
  }
});

upgradeButton.addEventListener("click", () => {
  totalGrind += 1;
  counter -= 10;
  counterElement.innerHTML = counter.toString();
  grindElement.innerHTML = totalGrind.toString();
  if (totalGrind > 0) {
    requestAnimationFrame(autoclick);
  }
  if (counter < 10) {
    upgradeButton.disabled = true;
  }
});
