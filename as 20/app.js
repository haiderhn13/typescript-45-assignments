"use strict";
// Create an array called mountains
let mountains = ["Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
// Function to print the list of mountains
function printMountains(mountains) {
    console.log("List of mountains:");
    mountains.forEach(mountain => {
        console.log(mountain);
    });
}
// Call the function to print the list of mountains
printMountains(mountains);
