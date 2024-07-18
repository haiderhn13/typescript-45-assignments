// Function to summarize a sandwich order
function make_sandwich(items: string[]): void {
    console.log("Making a sandwich with:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Sandwich complete!\n");
}

// Calling make_sandwich function with different number of arguments
make_sandwich(['Ham', 'Cheese', 'Lettuce']);
make_sandwich(['Turkey', 'Swiss', 'Tomato', 'Mayo']);
make_sandwich(['Peanut Butter', 'Jelly']);
