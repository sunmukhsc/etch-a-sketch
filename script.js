function setGridSize() {
    input = prompt(`Enter a custom grid size: (max ${maxPixels})`);
    if (input && input<=maxPixels && input>0) {
        container.innerHTML = '';
        createGrid(input);
    } else {return;}
    
}

function createGrid (gridPixels, isRgb=false) {
    for (let i = 0; i < gridPixels**2; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.style.width = 
            `${containerPixels/gridPixels}px`;
        square.style.height = 
            `${containerPixels/gridPixels}px`;
        if (isRgb) {
            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = randomRgbString();
            });
        } else {
            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = 'black';
            });
        }
        container.appendChild(square);
    }
}


function randomRgbString() {
    return `rgb(${randNum()}, ${randNum()}, ${randNum()})`;
}

function randNum() {
    return Math.floor(Math.random() * 255);
}

const containerPixels = 600;
const maxPixels = 64;
const gridPixels = 16;
const container = document.querySelector('.container');
const sizeBtn = document.querySelector('#size');
const rgbBtn = document.querySelector('#rgb');

container.style.width = `${containerPixels}px`;
container.style.height = `${containerPixels}px`;

createGrid(gridPixels);

sizeBtn.addEventListener('click', setGridSize);
rgbBtn.addEventListener('click', () => {
    
    container.innerHTML = '';
    const isRgb = true;
    createGrid(gridPixels, isRgb);
        
    square.style.backgroundColor = randomRgbString();
});