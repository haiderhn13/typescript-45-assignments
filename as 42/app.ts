// Function to show magicians from an array
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Function to make each magician "the Great"
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`${magician} the Great`);
    }
    return great_magicians;
}

// Array of magician's names
let magician_names: string[] = ['David Copperfield', 'David Blaine', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Calling make_great to modify magician_names
let great_magicians: string[] = make_great(magician_names);

// Showing the modified list of magicians
console.log('Original Magicians:');
show_magicians(magician_names);

console.log('\nGreat Magicians:');
show_magicians(great_magicians);
