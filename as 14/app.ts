// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestList: string[] = ['abbu','ammi','bhai','bhabi','baji'];
function inviteGuests(guests: string[]): void {
    guests.forEach(guest => {
        console.log(`Dear ${guest}, you are cordially invited to dinner at my place. Looking forward to your presence!`);
    });
}
inviteGuests(guestList);

export{guestList};
