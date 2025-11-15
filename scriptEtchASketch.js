const headderBarDiv = document.querySelector('div.headderBar');
    headderBarDiv.className = 'btnFrame'
    const newGridBtn = document.createElement('button');
    newGridBtn.className = `newGrid`
    newGridBtn.textContent = 'New Grid';
    headderBarDiv.appendChild(newGridBtn);
const gridContainerDiv = document.querySelector('div.gridContainer');
    gridContainerDiv.className = 'frame';
    for (i=0; i < 16; i++) {
        const rowContainderDiv = document.createElement('div');
        rowContainderDiv.className = `column co${i}`;
        for (j=0; j < 16; j++) {
            const gridCellDiv = document.createElement('div')
            gridCellDiv.className = `gridCell gc${j}`;
            rowContainderDiv.appendChild(gridCellDiv);
        }
        gridContainerDiv.appendChild(rowContainderDiv);
    }