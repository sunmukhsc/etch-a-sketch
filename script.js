const gridPixelWidth = 16;
const container = document.querySelector('.container');

for (let i = 0; i < gridPixelWidth**2; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    square.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = 'black';
    });
    container.appendChild(square);
}