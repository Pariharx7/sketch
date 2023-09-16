const userButton = document.querySelector('.userButton');
const resetButton = document.querySelector('.resetButton');
const container = document.querySelector('.container');
const gridCell = document.getElementsByClassName('grid-box');
const blackButton = document.querySelector('.blackBtn');
const redButton = document.querySelector('.redBtn');
const blueButton = document.querySelector('.blueBtn');
const rbowButton = document.querySelector('.raibowBtn');

const grid = 16;
const createGrid = (amountofGrids = grid) => {
    
    const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
    for (let i = 0; i < amountofGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < amountofGrids; j++) {
            const widthAndHeight = 600 / amountofGrids;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;
            gridBox.addEventListener('mouseenter', () => {
            gridBox.style.backgroundColor = 'black';
            });
            row.append(gridBox);
        }
        wrapper.appendChild(row);  
    }
    container.appendChild(wrapper);
}

createGrid();


userButton.addEventListener('click', () =>  {
    let userSize = prompt(`Enter the number of grids you want: `);

    while(userSize > 64){
        userSize = Number(prompt(`Please enter a number smaller than 64`));
    }
    while(userSize < 2){
        userSize = Number(prompt(`Please enter a number greater than 1`));
    }

    const wrapper = document.querySelector('.wrapper');

    if(!wrapper){
        createGrid(userSize);
    } else {
        wrapper.remove();
        createGrid(userSize);
    }
});

function resetFunc() {
    let gridItems = document.querySelectorAll('div.grid-box');
    
    gridItems.forEach(item => {
        item.style.background = `whitesmoke`;
    })
}

function setColor(colorChoice){
    color = colorChoice;
}

function createRandomRGB() {
    let gridItems = document.querySelectorAll('div.grid-box');
    
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
    
        item.style.background = `rgb(${r}, ${g}, ${b})`;
    })
  })
}

function blackPen() {
    let gridItems = document.querySelectorAll('div.grid-box');
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
        item.style.background = `black`;
    })
  })
}
function redPen(){
   
    let gridItems = document.querySelectorAll('div.grid-box');
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
        item.style.background = `red`;
    })
  })
}
function bluePen(){
   
    let gridItems = document.querySelectorAll('div.grid-box');
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
        item.style.background = `blue`;
    })
  })
}


resetButton.addEventListener('click', resetFunc)
blackButton.addEventListener('click', blackPen);
redButton.addEventListener('click', redPen);
blueButton.addEventListener('click', bluePen);
rbowButton.addEventListener('click', createRandomRGB);