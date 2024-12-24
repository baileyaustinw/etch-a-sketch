let container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    newDiv = document.createElement("div");
    newDiv.classList.add("box");
    container.appendChild(newDiv);
}

let allSquares = document.querySelectorAll(".box");
allSquares.forEach(element => {
    element.addEventListener('mouseenter', changeColor);
})

function changeColor() {
    this.classList.add('selected');
}
