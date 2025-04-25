// ==============Create Grid==============
// get size of grid: on load 16x16, later by user input
    // let gridSize = 16 //initially, to be updated by user input
    // iterate gridSize times
        // create one div gridSize, class "row",
        // iterate gridsize times
            // create div inside row class div, class "column",
// ===Dummy Divs for flexbox layout===
let gridContainer = document.querySelector('#container')

let divRow1 = document.createElement('div');
let divRow2 = document.createElement('div');
    divRow1.classList.add("row");
    divRow2.classList.add("row");

let divCol1 = document.createElement('div');
let divCol2 = document.createElement('div');
    divCol1.classList.add("column");
    divCol2.classList.add("column");

    divRow1.appendChild(divCol1);
    divRow1.appendChild(divCol2);

    gridContainer.appendChild(divRow1);
    gridContainer.appendChild(divRow2);

// ==============Set Up Mouse Trace==============
// "hover" effect - make grid divs change color when mouse passes over them, and remain after it leaves
    //add "trace" class to div

// ==============Create User Interface==============
//button @ top of screen that opens a popup asking for new grid size
    //once entered prev grid to be REMOVED
    //new grid generated in the SAME TOTAL SPACE as before
    //set maximum to 100 to avoid freezing etc.