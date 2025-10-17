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

function autoclick() {
  counter += 1;
  counterElement.innerHTML = counter.toString();
}
setInterval(autoclick, 1000);
