let animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Printing each animal name
console.log('List of animals:');
for (let animal of animals) {
    console.log(animal);
}

// Printing a statement about each animal
console.log('\nStatements about each animal:');
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Additional sentence about common characteristic
console.log('\nAny of these animals would make a great pet!');
