import sword from "./sword.jpg";
import "./style.css";

let counter: number = 0;

document.body.innerHTML = `
  <h1>Welcome to Sword Sharpener</h1>
  <p><button id="sharpened"><img src="${sword}" class="icon" /></button></p>
  <p>^ click the sword to sharpen</p>
  <h4>Swords Sharpened: <span id ="counter">0</span></h4>
`;

const button = document.getElementById("sharpened")!;
const counterElement = document.getElementById("counter")!;

button.addEventListener("click", () => {
  counter += 1;
  counterElement.innerHTML = counter.toString();
});

const zero = performance.now();
let lastSecond = -1;
function autoclick(currentTime: number) {
  const elapsed = Math.floor((currentTime - zero) / 1000);
  if (elapsed < 1000) {
    if (elapsed > lastSecond) {
      counter += 1;
      counterElement.innerHTML = counter.toString();
      lastSecond = elapsed;
    }
    requestAnimationFrame(autoclick);
  }
}
requestAnimationFrame(autoclick);
