// ==============Create Grid==============
// get size of grid: on load 16x16, later by user input
    // let gridSize = 16 //initially, to be updated by user input
    // iterate gridSize times
        // create one div gridSize, class "row",
        // iterate gridsize times
            // create div inside row class div, class "column",

// ==============Create Grid==============
const gridContainer = document.querySelector('#container')

let gridSize = 16;

for (let i = 0; i < gridSize; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    for (let k = 0; k < gridSize; k++) {
        const colDiv = document.createElement('div');
        colDiv.classList.add('column');
        rowDiv.appendChild(colDiv);
    }
    gridContainer.appendChild(rowDiv);
}

// ==============Set Up Mouse Trace==============
// "hover" effect - make grid divs change color when mouse passes over them, and remain after it leaves
    //add "trace" class to div

// ==============Set Up Reset Function==============
function resetGrid () {
    gridSize = prompt('Enter New Grid Size (rows or columns, max 100)');
    //remove old grid entirely
    //run create grid with new gridSize
}

// ==============Create User Interface==============
let resetButton = document.createElement('button');
    resetButton.textContent ='Reset Grid (Currently does nothing)';
    gridContainer.parentNode.insertBefore(resetButton, gridContainer);

//button @ top of screen that opens a popup asking for new grid size
    //once entered prev grid to be REMOVED
    //new grid generated in the SAME TOTAL SPACE as before
    //set maximum to 100 to avoid freezing etc.