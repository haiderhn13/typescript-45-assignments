let favoritePizzas: string[] = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

// Printing each pizza name
console.log('My favorite pizzas:');
for (let pizza of favoritePizzas) {
    console.log(pizza);
}

// Printing a sentence about each pizza
console.log('\nMy favorite pizzas with statements:');
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Additional sentence about loving pizza
console.log('\nI really love pizza!');
