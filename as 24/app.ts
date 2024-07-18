// Tests for equality and inequality with strings
let fruit = 'apple';
console.log(`Is fruit == 'apple'? I predict True.`);
console.log(fruit == 'apple');

console.log(`Is fruit == 'banana'? I predict False.`);
console.log(fruit == 'banana');

// Tests using the toLowerCase function
let city = 'New York';
console.log(`\nIs city.toLowerCase() == 'new york'? I predict True.`);
console.log(city.toLowerCase() == 'new york');

console.log(`Is city.toLowerCase() == 'los angeles'? I predict False.`);
console.log(city.toLowerCase() == 'los angeles');

// Numerical tests
let x = 10;
let y = 5;

console.log(`\nIs x > y? I predict True.`);
console.log(x > y);

console.log(`Is x < y? I predict False.`);
console.log(x < y);

console.log(`Is x >= 10? I predict True.`);
console.log(x >= 10);

console.log(`Is y <= 3? I predict False.`);
console.log(y <= 3);

// Tests using "and" and "or" operators
let temperature = 25;
console.log(`\nIs temperature > 20 && temperature < 30? I predict True.`);
console.log(temperature > 20 && temperature < 30);

console.log(`Is temperature < 15 || temperature > 30? I predict False.`);
console.log(temperature < 15 || temperature > 30);

// Test whether an item is in an array
let fruits = ['apple', 'banana', 'orange', 'grape'];
let fruitToCheck = 'orange';

console.log(`\nIs '${fruitToCheck}' in the fruits array? I predict True.`);
console.log(fruits.includes(fruitToCheck));

let vegetableToCheck = 'carrot';
console.log(`Is '${vegetableToCheck}' in the fruits array? I predict False.`);
console.log(fruits.includes(vegetableToCheck));

// Test whether an item is not in an array
let cars = ['Toyota', 'Honda', 'Ford', 'Chevrolet'];
let carToCheck = 'Tesla';

console.log(`\nIs '${carToCheck}' not in the cars array? I predict True.`);
console.log(!cars.includes(carToCheck));

let carToCheck2 = 'Ford';
console.log(`Is '${carToCheck2}' not in the cars array? I predict False.`);
console.log(!cars.includes(carToCheck2));
