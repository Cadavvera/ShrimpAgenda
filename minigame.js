// Resources I used
// https://www.w3schools.com/js/js_events_mouse.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API




// This is where we load the images of the shrimps
const cherry = document.getElementById("cherry");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
const orange = document.getElementById("orange");
const green = document.getElementById("green");
// The default shrimp
let selectedShrimp = cherry;
// Our selection of the shrimps
cherry.addEventListener("click", function (){
    selectedShrimp = cherry;
})
blue.addEventListener("click", function (){
    selectedShrimp = blue;
})
yellow.addEventListener("click", function (){
    selectedShrimp = yellow;
})
orange.addEventListener("click", function (){
    selectedShrimp = orange;
})
green.addEventListener("click", function (){
    selectedShrimp = green;
})


// This is my canvas where the shrimp are placed
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "transparent";
ctx.fillRect(0, 0, 700, 700);

// What code is looking for (the id in html)
const box = document.getElementById("tank");


function drawShrimp(event) {

    // Event is looking for the position of mouse on x and y axis
    // Source for the position fix https://stackoverflow.com/questions/20857593/canvas-mouse-event-position-different-than-cursor

    const mousex = event.clientX-canvas.getBoundingClientRect().left;
    const mousey = event.clientY-canvas.getBoundingClientRect().top;
    ctx.fillStyle = "blue";

    

    // The position of mouse and size of shrimp
    ctx.drawImage(selectedShrimp, mousex, mousey, 50, 25)



    // Feedback system for the code
    console.log("Shrimp is added")
}

// Box is looking for the function - click
box.addEventListener("click", drawShrimp);