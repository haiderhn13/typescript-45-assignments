// Create an array called guestList
let guestList: string[] = [
    "Nikola Tesla",
    "Albert Einstein",
    "Isaac Newton",
    "Galileo Galilei",
    "Leonardo da Vinci",
    "Ada Lovelace"
];

// Function to print an invitation message to each guest
function inviteGuests(guests: string[]): void {
    guests.forEach(guest => {
        console.log(`Dear ${guest}, you are cordially invited to dinner at my place. Looking forward to your presence!`);
    });
}

// Initial invitations
console.log("Initial invitations:\n");
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

// Inform about the shrinking guest list
console.log("\nUnfortunately, the new dinner table won't arrive in time. We have space for only two guests.\n");

// Remove guests until only two remain
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Dear ${removedGuest}, we regret to inform you that we can no longer accommodate you for the dinner. Our apologies!`);
}

// Print a new set of invitation messages for the remaining guests
console.log("\nSending out final invitations:\n");
inviteGuests(guestList);
