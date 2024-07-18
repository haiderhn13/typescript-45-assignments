"use strict";
// Function to store information about a car in an object
function car_info(manufacturer, model, ...details) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional details to the car object
    for (let [key, value] of details) {
        car[key] = value;
    }
    return car;
}
// Calling the car_info function with required and additional information
let my_car = car_info('Toyota', 'Camry', ['color', 'Silver'], ['year', 2023]);
// Printing the returned object to verify the stored information
console.log(my_car);
