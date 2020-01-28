//etch a sketch code
const container = document.getElementById("Container")
let color = "black"
const grid = document.getElementsByClassName("grid-item");
let randomColorStatus = false;
let greyPen = false;

const choosePen = function() {
    randomColorStatus=false;
    color = prompt("Choose a color")
}

const blackPen = function() {
    greyPen = false;
    randomColorStatus=false;
    color = "black";
}

const greyScale = function() {
    greyPen = true;
    randomColorStatus=false;
    color = "black";
}

const rainbowPen = function() {
    randomColorStatus = true;
}

const clearBoard = function() {
    color = "black";
    greyPen = false;
    randomColorStatus = false;
    for (element of grid) {
        element.style.background = "white";
        element.style.opacity = 0;
    }
}

const newBox = function() {
    let choice = prompt("Choose a box dimension up to 100. For example, 36 will make a 36x36 grid.")
    if (choice) {
        if (choice < 101) {
            currentColor = "black";
            resetBox();
            makeBox(choice); 
        } else if (choice >100) {
            alert("That number was too large.");
            newBox();
        } else {
            alert("That was not a number");
            newBox();
        }
    } else {
        resetBox();
        makeBox(16);
    }  
}

function resetBox() {
    let x = document.getElementById('Container');
    while (x.firstChild) x.removeChild(x.firstChild);
}

function makeBox(number) {
    greyPen = false;
    randomColorStatus= false;
    color="black";
    setDimensions(number);
    squareDiv(number);
}

function setDimensions(arguments) {
    let num = arguments;
    document.documentElement.style.setProperty("--rowNum", num);
    document.documentElement.style.setProperty("--colNum", num);
}

function squareDiv(arguments) {
    let square = arguments;
    square = square ** 2;
    for (let i = 0; i<(square);i++) {
        let divMaker = document.createElement("div");
        container.appendChild(divMaker).className = "grid-item";
    }
}

document.getElementById("Container").addEventListener("mouseover", function(e) {
    if (greyPen == true && color == "black" && e.target.className == 'grid-item') {
        e.target.style.opacity -= -0.1;
    } else {e.target.style.opacity = 1}

    if(randomColorStatus) {
    let rand = Math.floor(Math.random() * 255) +1;
    let rand2 = Math.floor(Math.random() * 255) +1;
    let rand3 = Math.floor(Math.random() * 255) +1;

    color = `rgb(${rand}, ${rand2}, ${rand3})`;
    }
    if(e.target.className == 'grid-item') e.target.style.background = color;
})