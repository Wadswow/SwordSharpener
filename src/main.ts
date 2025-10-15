import sword from "./sword.jpg";
import "./style.css";

document.body.innerHTML = `
  <h1>Welcome to Sword Sharpener</h1>
  <p><button id="sharpened"><img src="${sword}" class="icon" /></button></p>
  <p>^ click the sword to sharpen</p>
  <h4>Swords Sharpened: <span id ="counter">0</span></h4>
`;
