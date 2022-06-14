// Description
// This time we're going to build a train fare calculator. Simple enough, right?
// We're not looking for something too fancy, but you should be able to input your age and the distance you're travelling and get your ticket price.

// Instructions
// - Ask the user for their age and how far they are traveling (in km)
//    -- The price per traveled km will be £0.21
//    -- Junior passengers (under 18) get a 20% discount
//    -- Senior passengers (over 65) get a 40% discount
// - Based on the answers, print a message in the console which tells the user how much they will need to pay for the ride.

// Challenge
// Rewrite your program so that the user chooses a starting point and a destination from a list of stations, besides inputting their age, and then get the ticket price.

// You can come up with the stations' names and distances. Try also to code it so that you only need to change the price per km in one place, and all the stations should have the updated price
let ageInput = Number(prompt("What is your age?"));
let distanceInput = Number(prompt("How far are you travelling?"));

if (ageInput < 18) {
    let price = distanceInput * 0.21 * 0.2;
    console.log(`You need to pay £${price} for the ride.`);
}else if (ageInput > 65) {
    let price = distanceInput * 0.4 * 0.21;
    console.log(`You need to pay £${price} for the ride.`);
}else {
    let price = distanceInput * 0.21;
    console.log(`You need to pay £${price} for the ride.`);
}

// Challenge 2
// Rewrite your program so that the user chooses a starting point and a destination from a list of stations, besides inputting their age, and then get the ticket price.
// You can come up with the stations' names and distances. Try also to code it so that you only need to change the price per km in one place, and all the stations should have the updated price
// let stations = [
//   { city: "London", distance: 100 },
//   { city: "Paris", distance: 200 },
//   { city: "Berlin", distance: 300 },
//   { city: "Madrid", distance: 400 },
//   { city: "Rome", distance: 500 },
//   { city: "Milan", distance: 600 },
// ];

// let startingPoint = String(prompt("What is your starting point?"));
// let destination = String(prompt("What is your destination?"));

// if (stations.includes(startingPoint && destination)) {
//   console.log("Destination picked!");
// } else {
//   console.log("Destination not found!");
// }
