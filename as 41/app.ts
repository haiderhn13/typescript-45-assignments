// Function to show magicians from an array
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magician_names: string[] = ['David Copperfield', 'David Blaine', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Calling the show_magicians function with the magician_names array
show_magicians(magician_names);
