// 🌈 Default drawing color
let currentColor = 'black';

// 🖌️ Drawing state for click-and-drag functionality
let isDrawing = false;

// 🎯 DOM elements
const colorButton = document.getElementById('colorButton');
const rainbowButton = document.getElementById('rainbowButton');
const clearButton = document.getElementById('clearButton');
const colorPicker = document.getElementById('colorPicker');
const sizeSlider = document.getElementById('sizeSlider');
const sizeValue = document.getElementById('sizeValue');
const mainBox = document.getElementById('MainBox');

// 🖍️ Handle mouse press and release for drawing
document.addEventListener('mousedown', () => isDrawing = true);
document.addEventListener('mouseup', () => isDrawing = false);

// 🎨 Trigger native color picker when Color button is clicked
colorButton.addEventListener('click', () => {
  colorPicker.click();
});

// 🎨 Update current color when user picks a color
colorPicker.addEventListener('input', () => {
  currentColor = colorPicker.value;
});

// 🌈 Activate rainbow mode
rainbowButton.addEventListener('click', () => {
  currentColor = 'rainbow';
});

// 🧼 Clear the grid by resetting all box colors
clearButton.addEventListener('click', () => {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => box.style.backgroundColor = 'white');
});

// 🎚️ Update grid size label and regenerate grid on slider input
sizeSlider.addEventListener('input', () => {
  const newSize = parseInt(sizeSlider.value);
  sizeValue.innerText = `${newSize} x ${newSize}`;
  createGrid(newSize);
});

// 🎨 Generate a random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// 🧱 Create the grid using Flexbox layout
function createGrid(size) {
  // Clear previous grid
  mainBox.innerHTML = '';

  // Set up Flexbox container
  mainBox.style.display = 'flex';
  mainBox.style.flexDirection = 'column';
  mainBox.style.width = '500px';
  mainBox.style.height = '500px';

  // Create rows
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.flex = '1';

    // Create boxes inside each row
    for (let j = 0; j < size; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.flex = '1';
      box.style.border = '1px solid #ccc';
      box.style.backgroundColor = 'white';

      // 🖱️ Draw on box when mouse is dragged over it
      box.addEventListener('mousemove', () => {
        if (isDrawing) {
          box.style.backgroundColor = currentColor === 'rainbow' ? getRandomColor() : currentColor;
        }
      });

      row.appendChild(box);
    }

    mainBox.appendChild(row);
  }
}

// 🚀 Initialize grid on page load
document.addEventListener("DOMContentLoaded", () => {
  const defaultSize = parseInt(sizeSlider.value);
  sizeValue.innerText = `${defaultSize} x ${defaultSize}`;
  createGrid(defaultSize);
});
