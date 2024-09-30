const wheel = document.getElementById('wheel');
const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const spinButton = document.getElementById('spinButton');
const result = document.getElementById('result');

// initially resutl is hidden
result

let names = [];
const colors = ['#f39c12', '#e74c3c', '#8e44ad', '#3498db', '#1abc9c', '#27ae60'];

nameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  if (name) {
    names.push(name);
    nameInput.value = '';
    renderWheel();
  }
});

function renderWheel() {
  wheel.innerHTML = '';
  const numSegments = names.length;
  const segmentAngle = 360 / numSegments;

  names.forEach((name, index) => {
    const segment = document.createElement('div');
    segment.classList.add('segment');
    segment.style.transform = `rotate(${index * segmentAngle}deg)`;
    segment.style.backgroundColor = colors[index % colors.length];
    
    const text = document.createElement('div');
    text.classList.add('segment-text');
    text.style.transform = `rotate(${segmentAngle / 2}deg) translate(50%, 0)`;
    text.innerText = name;

    segment.appendChild(text);
    wheel.appendChild(segment);
  });
}

spinButton.addEventListener('click', () => {
  if (names.length === 0) {
    alert('Please add names to the wheel.');
    return;
  }
  const spinAngle = Math.floor(Math.random() * 360) + 360 * 3; // Random spin
  wheel.style.transition = 'transform 4s ease-out';
  wheel.style.transform = `rotate(${spinAngle}deg)`;
  setTimeout(() => {
    const selectedIndex = Math.floor((360 - (spinAngle % 360)) / (360 / names.length));
        result.innerText = `||${names[selectedIndex % names.length]}|| is winner`;
        result.style.display = 'block'; // Show the result div
}, 4000);
});
