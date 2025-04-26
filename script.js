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
    element.addEventListener("mouseover", () => element.classList.add('trace'));
}

// ==============Set Up Reset Function==============
function resetGrid () {
    //TODO remove old grid entirely

    // ==============Prompt & Check Response==============
    let sizeQuestion = 'How many squares per side should the new grid have? (max 100)';
    let sizePromptResponce = Number(prompt(sizeQuestion));
    while ( sizePromptResponce > 100 || sizePromptResponce < 1 || !(Number.isInteger(sizePromptResponce)) ) {    
        console.log((Number.isInteger(sizePromptResponce)));
        console.log(!(Number.isInteger(sizePromptResponce)));        
        alert("Please enter an integer (whole number) from 1 to 100");
        sizePromptResponce = Number(prompt(sizeQuestion));
    }
    // ==============Create Grid of Prompt Size==============
    createGrid(sizePromptResponce); 
}

// ==============Create User Interface==============
let resetButton = document.createElement('button');
    resetButton.textContent ='Reset Grid';
    resetButton.addEventListener('click', resetGrid);

    gridContainer.parentNode.insertBefore(resetButton, gridContainer);