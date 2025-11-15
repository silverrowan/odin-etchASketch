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
            rowContainderDiv.appendChild(gridCellDiv);
        }
        gridContainerDiv.appendChild(rowContainderDiv);
    }
    headderBarDiv.after(gridContainerDiv);
}

createNewGridBtn()
createGrid(16)

function reCreateGrid() {
    let numCells;
    do {
        numCells = prompt(`how many columns and rows should the new grid have? Choose 100 or fewer.`, 16);
    } while (+numCells > 100 || +numCells === NaN) 
    const gridContainerDiv = document.querySelector('.frame');
    gridContainerDiv.remove();
    createGrid(+numCells);

    // gridContainerInnerDiv.remove();
    // const gridContainerInnerDiv = document.querySelector('div.gridContainer');
}