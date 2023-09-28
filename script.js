const containerPixels = 600;
const maxPixels = 64;
const gridPixels = 16;
const container = document.querySelector('.container');
const sizeBtn = document.querySelector('#size');

function setGridSize() {
    input = prompt(`Enter a custom grid size: (max ${maxPixels})`);
    if (input && input<=maxPixels && input>0) {
        container.innerHTML = '';
        createGrid(input);
    } else {return;}
    
}

function createGrid (gridPixels) {
    for (let i = 0; i < gridPixels**2; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.style.width = 
            `${containerPixels/gridPixels}px`;
        square.style.height = 
            `${containerPixels/gridPixels}px`;
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'black';
        });
        container.appendChild(square);
    }
}

createGrid(gridPixels);

sizeBtn.addEventListener('click', setGridSize);

container.style.width = `${containerPixels}px`;
container.style.height = `${containerPixels}px`;

