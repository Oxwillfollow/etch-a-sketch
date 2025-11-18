const containerDiv = document.getElementById("container");
const gridSizeButton = document.getElementById("button-gridsize");
const resetButton = document.getElementById("button-reset");
let gridSize = 16;

gridSizeButton.addEventListener("click", setGridSize);
resetButton.addEventListener("click", createGrid);

createGrid();

function removeGrid(){
    while(containerDiv.firstChild){
        containerDiv.removeChild(containerDiv.firstChild);
    }
}

function createGrid(){
    removeGrid();

    let widthPercentage = 100 / gridSize;

    for (let index = 0; index < gridSize * gridSize; index++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.style.width = `${widthPercentage}%`;
        gridItem.addEventListener("mouseenter", paintGridItem);
        containerDiv.appendChild(gridItem);
    }
}

function setGridSize(){
    let size = parseInt(prompt("Enter grid size (width): "));
    if(isNaN(size) || size <= 0){
        alert("Enter a valid positive number!");
        return;
    }
    if(size > 100){
        alert("Too big! Max size: 100");
        return;
    }
    gridSize = size;
    createGrid();
}

function paintGridItem(event){
    let targetItem = event.target;
    targetItem.style.backgroundColor = "black";
    let targetOpacity = parseFloat(targetItem.style.opacity);

    if(isNaN(targetOpacity))
        targetItem.style.opacity = 0.1;
    else if(targetOpacity < 0.99)
        targetItem.style.opacity = targetOpacity + 0.1;
}