"use strict";
// Function to show magicians from an array
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Function to make each magician "the Great"
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(`${magician} the Great`);
    }
    return great_magicians;
}
// Array of magician's names
let magician_names = ['David Copperfield', 'David Blaine', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// Creating a copy of magician_names to keep the original unchanged
let original_magicians = [...magician_names];
// Calling make_great with a copy of magician_names
let great_magicians = make_great([...magician_names]);
// Showing the original list of magicians
console.log('Original Magicians:');
show_magicians(original_magicians);
// Showing the modified list of great magicians
console.log('\nGreat Magicians:');
show_magicians(great_magicians);
