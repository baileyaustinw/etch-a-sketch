let container = document.querySelector('#container');
let resetButton = document.querySelector('#resetButton');

// Initial call to generateGrid() to generate default 16x16 grid
generateGrid(16);

// Function to add class to change background color of box that is hovered over
function changeColor() {
    // Generate random RGB values
    let randomRValue = Math.random() * (255 - 0) + 0;
    let randomGValue = Math.random() * (255 - 0) + 0;
    let randomBValue = Math.random() * (255 - 0) + 0;

    // if this box hasn't already been hovered over, 
    // set a new random backgorund color,
    // set opacity to be 0.1,
    // and add class "selected"
    if (!this.classList.contains('selected')) {
        this.style.backgroundColor = `rgb(${randomRValue}, ${randomGValue}, ${randomBValue})`;
        this.style.opacity = 0.1;
        this.classList.add('selected');
    } else {
        // increase opacity by 0.1 each time box is hovered over up to a maximum opacity of 1
        let opacity = parseFloat(this.style.opacity) || 0;
        console.log(opacity);
        if (opacity < 1) {
            opacity += .1;
            this.style.opacity = opacity;
        }
    }
}

// Function to reset and resize grid based off of user input
function resetGrid() {
    gridSize = prompt("How many squares per side for new grid? Max. 100.");
    // Deletes all child elements to reset grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    // call to generateGrid with user input as the argument to determine size of grid
    generateGrid(gridSize);
}

// Function to generate new grid with size based off of user input
function generateGrid(size) {
    // Store height and width value within variable gridBoxCalc
    // calculates size % based off of how many boxes to be generated
    let gridBoxCalc = 100/size + "%";
    // total grid size should be user input number squared
    let totalBoxes = size * size;
    // Check to make sure user input is under 100 or else grid boxes will be too small
    if (size > 100) {
        window.alert("You chose a number that is too high! Please try again.");
        // If user input number above 100, force user to input new number and exit function
        return;
    } else {
        for (i = 0; i < totalBoxes; i++) {
            // create new div element for each box
            gridBox = document.createElement("div");
            gridBox.classList.add("box");
            // set height and width values
            gridBox.style.width = gridBoxCalc;
            gridBox.style.height = gridBoxCalc;
            // create border to separate each box
            gridBox.style.border = "1px solid #000";
            // add element to grid container
            container.appendChild(gridBox);
        }
    
        // create mouseenter eventlistener for each box to change background color
        let allSquares = document.querySelectorAll(".box");
        allSquares.forEach(element => {
            element.addEventListener('mouseenter', changeColor);
        })
    }
}