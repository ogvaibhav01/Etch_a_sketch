document.getElementById('rainbowButton').addEventListener('click', () => {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.style.backgroundColor = getRandomColor();
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
  document.getElementById("sizeValue").innerText = sliderToNo;
});
