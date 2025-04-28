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

// ==============Clear Function==============
function gridClear () {
    //method that can remove & add in one operation! Current modern approach
    gridContainer.replaceChildren();

    //old fastest & safe method
    //gridContainer.textContent = ''; //huh it's good to know this wipes out children! 

    //looping method (alternate to textContent)
    //while (gridContainer.firstChild) {
        //gridContainer.removeChild(gridContainer.lastChild);
            //or use .lastElementChild instead of .firstChild and .lastChild 
            //in this code to remove only children elements NOT html comments 
            //and text nodes -- NOTE ONLY DIRECT CHILDREN comments/text nodes 
            // will not be affected. Comments/nodes on children elements WILL 
            // still be removed
    //} 
}

// ==============Set Up Reset Function==============
function resetGrid () {
    gridClear();
    createGridByPrompt ();
}

// ==============Prompt, Check Response, & Route==============
function createGridByPrompt () {
    let sizeQuestion = 'How many squares per side should the new grid have? (max 100)';
    let sizePromptResponce = prompt(sizeQuestion);
    let numPromptResponce = Number(sizePromptResponce);
    if (sizePromptResponce == null) {
        return sizePromptResponce;
    } else if (numPromptResponce >= 1 && numPromptResponce <= 100) {
        createGrid(sizePromptResponce);
    } else {
        invalidResponse()
    }
}

function invalidResponse ()  {
    alert("Please enter an integer (whole number) from 1 to 100");
    createGridByPrompt();
}

// ==============Create User Interface==============
let resetButton = document.createElement('button');
    resetButton.textContent ='Reset Grid';
    resetButton.addEventListener('click', resetGrid);

    gridContainer.parentNode.insertBefore(resetButton, gridContainer);

    //testing that local and github versions are push/pull-able