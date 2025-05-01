// ==============Create Grid==============
const gridContainer = document.querySelector('#container')

function createGrid (gridSize = 16) {
    for (let i = 0; i < gridSize; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        for (let k = 0; k < gridSize; k++) {
            const colDiv = document.createElement('div');
            colDiv.classList.add('column');
            mouseTrace(colDiv);
            rowDiv.appendChild(colDiv);
        }
        gridContainer.appendChild(rowDiv);
    }
} 

createGrid()

// ==============Mouse Trace Function==============
let mouseoverCount = 0
function mouseTrace (element) {
    element.addEventListener("mouseover", () => {
        element.classList.add('trace');
        mouseoverCount ++;
        applyRandomRGB(element);
        darkenColor(element);
    });
}

// ==============Darkening Function==============
function darkenColor (element) {
    element.classList.add(mouseoverCount);
    let blackOpacity = mouseoverCount/10
    let blackOpacityRGBValue = `rgba(0, 0, 0, ${blackOpacity})`
    element.style.backgroundImage = `linear-gradient(to right, ${blackOpacityRGBValue}, ${blackOpacityRGBValue})`;
}

// ==============Random Color Function==============
function applyRandomRGB (element) {
    let divColor = createRandomRGB(150,); //pale colors only
    element.style.background = `${divColor}`;
}

function createRandomRGB (min = 0, max = 255) {
    let randomR = getRandomNum(min,max);
    let randomG = getRandomNum(min,max);
    let randomB = getRandomNum(min,max);
    let randomRGB = `rgb(${randomR}, ${randomG}, ${randomB})`;
    return randomRGB;
}

function getRandomNum (minValue = 0, maxValue = 100) {
    let randomNum = Math.floor(Math.random() * ((maxValue-minValue) + 1))+ minValue; 
    return randomNum;
}

// ==============Clear Function==============
function gridClear () {
    gridContainer.replaceChildren();
    mouseoverCount = 0
}

// ==============Prompt, Check Response, & Call Clear + Create==============
function resetGridWithPrompt () {
    let sizeQuestion = 'How many squares per side should the new grid have? (max 100)';
    let sizePromptResponce = prompt(sizeQuestion);
    let numPromptResponce = Number(sizePromptResponce);

    if (sizePromptResponce == null) {
        return sizePromptResponce;
    } else if (numPromptResponce >= 1 && numPromptResponce <= 100) {
        gridClear();
        createGrid(sizePromptResponce);
    } else {
        invalidResponse()
    }
}

function invalidResponse ()  {
    alert("Please enter an integer (whole number) from 1 to 100");
    resetGridWithPrompt();
}

// ==============Create User Interface==============
let resetButton = document.createElement('button');
    resetButton.textContent ='Reset Grid';
    resetButton.addEventListener('click', resetGridWithPrompt);

    gridContainer.parentNode.insertBefore(resetButton, gridContainer);