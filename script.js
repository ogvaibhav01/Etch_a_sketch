let currentColor = 'black'; // default color
function createGrid(size) {
  const mainBox = document.getElementById('MainBox');
  mainBox.innerHTML = '';
  mainBox.style.display = 'flex';
  mainBox.style.flexDirection = 'column';
  mainBox.style.width = '500px';
  mainBox.style.height = '500px';



  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.flex = '1';

    for (let j = 0; j < size; j++) {
      const box = document.createElement('div');
      box.style.flex = '1';
      box.style.border = '1px solid #ccc';
      box.style.backgroundColor = 'white';
      box.addEventListener('mouseover', () => {
        box.style.backgroundColor = currentColor;
      });
      row.appendChild(box);
    }

    mainBox.appendChild(row);
  }
}


document.getElementById('rainbowButton').addEventListener('click', () => {
  const boxes = document.querySelectorAll('.box');
  document.getElementById('rainbowButton').addEventListener('click', () => {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.style.backgroundColor = getRandomColor();
  });
});
});

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
document.getElementById('sizeSlider').addEventListener('input', () => {
  let sliderToNo = parseInt(document.getElementById('sizeSlider').value);
  document.getElementById("sizeValue").innerText = sliderToNo + " X " + sliderToNo;
});
const sizeSlider = document.getElementById('sizeSlider');
const sizeValue = document.getElementById('sizeValue');

sizeSlider.addEventListener('input', () => {
  const newSize = parseInt(sizeSlider.value);
  sizeValue.innerText = `${newSize} x ${newSize}`;
  createGrid(newSize);
});

document.addEventListener("DOMContentLoaded", () => {
  createGrid(document.getElementById('sizeSlider').value);
});
