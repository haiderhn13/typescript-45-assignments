"use strict";
// Create an array called places with five locations (not in alphabetical order)
let places = ["Kyoto", "Reykjavik", "Machu Picchu", "Cairo", "Santorini"];
// Print the array in its original order
console.log("Original order:");
console.log(places);
// Print the array in alphabetical order without modifying the actual list
let sortedPlaces = [...places].sort();
console.log("\nAlphabetical order (without modifying original list):");
console.log(sortedPlaces);
// Show that the array is still in its original order
console.log("\nOriginal order (unchanged):");
console.log(places);
// Print the array in reverse alphabetical order without changing the order of the original list
let reverseSortedPlaces = [...places].sort().reverse();
console.log("\nReverse alphabetical order (without modifying original list):");
console.log(reverseSortedPlaces);
// Show that the array is still in its original order
console.log("\nOriginal order (unchanged):");
console.log(places);
// Reverse the order of the list and print the array to show that its order has changed
places.reverse();
console.log("\nReversed order:");
console.log(places);
// Reverse the order of the list again and print the list to show it's back to its original order
places.reverse();
console.log("\nBack to original order:");
console.log(places);
// Sort the array so it's stored in alphabetical order and print the array to show that its order has been changed
places.sort();
console.log("\nSorted in alphabetical order:");
console.log(places);
// Sort the array so it's stored in reverse alphabetical order and print the list to show that its order has changed
places.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order:");
console.log(places);
