"use strict";
// Create an array called guestList
let guestList = ["Albert Einstein", "Isaac Newton", "Leonardo da Vinci"];
// Function to print an invitation message to each guest
function inviteGuests(guests) {
    guests.forEach(guest => {
        console.log(`Dear ${guest}, you are cordially invited to dinner at my place. Looking forward to your presence!`);
    });
}
// Initial invitations
inviteGuests(guestList);
// Inform about the guest who can't make it
const guestUnableToAttend = "Marie Curie";
console.log(`\nUnfortunately, ${guestUnableToAttend} can't make it to the dinner.`);
// Replace the unavailable guest with a new one
guestList[1] = "Isaac Newton";
// Inform about finding a bigger dinner table
console.log("\nGood news! We found a bigger dinner table.\n");
// Add one new guest to the beginning of the array
guestList.unshift("Nikola Tesla");
// Add one new guest to the middle of the array
const middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Galileo Galilei");
// Add one new guest to the end of the array
guestList.push("Ada Lovelace");
// Print a new set of invitation messages
console.log("Sending out new invitations:\n");
inviteGuests(guestList);
