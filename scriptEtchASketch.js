// =====================Setup UI Build Functions=====================
const headderBarDiv = document.querySelector('div.headderBar');

function createNewGridBtn() {
        headderBarDiv.className = 'btnFrame'
        const newGridBtn = document.createElement('button');
        newGridBtn.className = `newGrid`
        newGridBtn.textContent = 'New Grid';
        headderBarDiv.appendChild(newGridBtn);
        newGridBtn.addEventListener('click', reCreateGrid)
}

function createGrid(numCells) {
    const gridContainerDiv = document.createElement('div');
    gridContainerDiv.className = 'frame';
    for (i=0; i < numCells; i++) {
        const rowContainderDiv = document.createElement('div');
        rowContainderDiv.className = `column co${i}`;
        for (j=0; j < numCells; j++) {
            const gridCellDiv = document.createElement('div')
            gridCellDiv.className = `gridCell gc${j}`;
            gridCellDiv.addEventListener('mouseover', (event) => highlightCell );
            rowContainderDiv.appendChild(gridCellDiv);
            }
        gridContainerDiv.appendChild(rowContainderDiv);
        gridContainerDiv.addEventListener('mouseover', highlightCell );
    }
    headderBarDiv.after(gridContainerDiv);

}

function reCreateGrid() {
    let numCells;
    do {
        numCells = prompt(`how many columns and rows should the new grid have? Choose 100 or fewer.`, 16);
    } while (+numCells > 100 || +numCells === NaN) 
    const gridContainerDiv = document.querySelector('.frame');
    gridContainerDiv.remove();
    createGrid(+numCells);
}

// =====================Call UI Build Functions=====================
createNewGridBtn()
createGrid(16)

// =====================Setup Color Change Functions=====================
function highlightCell(e) {
    let target = e.target;
    let targetClass = target.className
    if ( !targetClass.includes('highlight') ) {
        target.className += ' highlight';
        target.style.backgroundColor = randomHSLGreenColor();
    }
}

//Random number between a & b, inclusive
function randomInteger(a, b) { 
        return Math.floor( Math.random() * b + a );
}

function randomRGBColor() {
    let colorRGB = `rgb(${randomInteger(0,255)}, ${randomInteger(0,255)}, ${randomInteger(0,255)})`;
    return colorRGB;
}

function randomHSLGreenColor() {
    let colorHSL = `HSL(${randomInteger(70,110)}, ${randomInteger(40,55)}%, ${randomInteger(30,45)}%)`;
    console.log(colorHSL);
    return colorHSL;
}