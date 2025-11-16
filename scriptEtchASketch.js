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
    // let target.count = 0;
function highlightCell(e) {
    let target = e.target;
    let targetClass = target.className
    if ( !targetClass.includes('highlight') ) {
        target.className += ' highlight count&0';
        target.style.backgroundColor = randomHSLGreenColor();
    } else {
        let color = target.style.backgroundColor;
        let newTargetCount = increaseEventCounterClass(target, targetClass);
        darkenCell(target, newTargetCount, 'black');       
    }
}

function splitClassNameByAmpersand (targetClassString) {
    let targetCountArray = targetClassString.split('&')
    console.log(targetCountArray);
    return targetCountArray
}

function increaseEventCounterClass(target, targetClass){
    let oldClass = splitClassNameByAmpersand (targetClass);
    let newCount = +oldClass[1] + 1;
    let newClass = oldClass[0] + `&${newCount}`;
    console.log(newClass);
    target.className = newClass;
    console.log(target.className);
    return newCount;
}

//Random number between a & b, inclusive
function randomInteger(a, b) { 
        return Math.floor( Math.random() * b + a );
}

function randomHSLGreenColor() {
    let colorHSL = `HSL(${randomInteger(70,110)}, ${randomInteger(40,55)}%, ${randomInteger(30,45)}%)`;
    console.log(colorHSL);
    return colorHSL;
}

function darkenCell(target, counter, overlayColor) {
    if (counter > 10) {
        counter = 10
    }
    let overlayRGBA = `rgb(from ${overlayColor} r g b / ${counter * 0.1} )`;
    let overlayRGBA2 = `rgb(from ${overlayColor} r g b / ${counter * 0.2} )`;
    target.style.backgroundImage = `linear-gradient(${randomInteger(0,359)}deg, ${overlayRGBA2}, ${overlayRGBA})`;
}