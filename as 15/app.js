"use strict";
// Create an array called guestList
let guestList = ['abbu', 'ammi', 'bhai', 'bhabi', 'baji'];
// Function to print an invitation message to each guest
function inviteGuests(guests) {
    guests.forEach(guest => {
        console.log(`Dear ${guest}, you are cordially invited to dinner at my place. Looking forward to your presence!`);
    });
}
// Call the function with the guestList
inviteGuests(guestList);
// Inform about the guest who can't make it
const guestUnableToAttend = guestList[1];
console.log(`\nUnfortunately, ${guestUnableToAttend} can't make it to the dinner.`);
// Modify the guest list, replacing the unavailable guest
guestList[1] = 'begum';
// Print a second set of invitation messages
console.log("\nSending out new invitations:\n");
inviteGuests(guestList);
