import sword from "./sword.jpg";
import "./style.css";

let counter: number = 0;
let zero = performance.now();
let increment = 0;

//autoclicker handler
function autoclick(currentTime: number) {
  const elapsed = currentTime - zero;
  zero = currentTime;
  counter += (increment * elapsed) / 1000;
  updateDisplay();
  requestAnimationFrame(autoclick);
}
requestAnimationFrame(autoclick);

//item interface
interface Item {
  name: string;
  price: number;
  growthRate: number;
  total: number;
  element: {
    countSpan: HTMLSpanElement;
    priceSpan: HTMLSpanElement;
    button: HTMLButtonElement;
    div: HTMLDivElement;
  } | null;
}

const availableItems: Item[] = [
  { name: "Grindstone", price: 10, growthRate: 0.1, total: 0, element: null },
  { name: "Blacksmith", price: 100, growthRate: 2, total: 0, element: null },
  { name: "Forge", price: 1000, growthRate: 50, total: 0, element: null },
];

document.body.innerHTML = `
  <h1>Welcome to Sword Sharpener</h1>
  <p><button id="sharpened"><img src="${sword}" class="icon" /></button></p>
  <p>^ click the sword to sharpen</p>
  <h4>Swords Sharpened: <span id ="counter">0</span></h4>
  <p>Current Production Rate: <span id ="growthRate">0</span></p>
  <div id="upgradeItems"></div>
`;

const clickButton = document.getElementById("sharpened") as HTMLButtonElement;
const counterElement = document.getElementById("counter") as HTMLElement;
const growthElement = document.getElementById("growthRate") as HTMLElement;
const upgrades = document.getElementById("upgradeItems") as HTMLElement;

//button click handler
clickButton.addEventListener("click", () => {
  counter += 1;
  updateDisplay();
});

function setupUpgrade(item: Item) {
  const div = document.createElement("div");
  div.className = "upgrade";
  const countSpan = document.createElement("span");
  const priceSpan = document.createElement("span");
  const button = document.createElement("button");
  button.textContent = "Buy";
  button.disabled = counter < item.price;
  button.addEventListener("click", () => {
    if (counter >= item.price) {
      counter -= item.price;
      item.total++;
      increment += item.growthRate;
      item.price = Math.round(item.price * 1.15 * 100) / 100;
      updateDisplay();
    }
  });
  div.append(`Buy ${item.name}: `, countSpan, " ");
  div.append(button, " Price: ", priceSpan, " ");
  upgrades.appendChild(div);
  // Cache elements for later updating
  item.element = { div, countSpan, priceSpan, button };
}

function updateDisplay() {
  counterElement.textContent = counter.toFixed(1);
  growthElement.textContent = increment.toFixed(1);
  availableItems.forEach((item) => {
    item.element!.countSpan.textContent = item.total.toString();
    item.element!.priceSpan.textContent = item.price.toFixed(2);
    item.element!.button.disabled = counter < item.price;
  });
}
availableItems.forEach(setupUpgrade);
updateDisplay();
