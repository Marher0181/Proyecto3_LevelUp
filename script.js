const button = document.getElementById("button");
const body = document.querySelector("body");
const colorNumber = document.querySelector(".color-number");
const colorCard = document.querySelector(".color-card");

const generadorColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

const rbgColor = `rgb(${r},${g},${b})`;
return rbgColor;
};

const cambiaFondo = () => {
const nuevoColor = generadorColor();
console.log(nuevoColor);
colorNumber.innerHTML = nuevoColor;
body.style.backgroundColor = nuevoColor;
colorCard.style.backgroundColor = nuevoColor;
};

button.addEventListener("click", cambiaFondo);