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
function mouseTrace (element) {
    element.addEventListener("mouseover", () => {
        element.classList.add('trace');
        createRandomRGB(); //creating the rgb string fine, not visibly applying it though
        element.style.backgroundColor = "blue";
    });
}

function createRandomRGB () {
    let randomR = getRandomNum(0,255);
    let randomG = getRandomNum(0,255);
    let randomB = getRandomNum(0,255);
    let randomRGB = `"rgb(${randomR}, ${randomG}, ${randomB})"`;
    console.log(randomRGB);
    return randomRGB;
}

function getRandomNum (minValue = 0, maxValue = 100) {
    let randomNum = Math.floor(Math.random() * ((maxValue-minValue) + 1))+ minValue; 
    return randomNum;
}

// ==============Clear Function==============
function gridClear () {
    gridContainer.replaceChildren();
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