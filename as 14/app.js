"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ['abbu', 'ammi', 'bhai', 'bhabi', 'baji'];
exports.guestList = guestList;
function inviteGuests(guests) {
    guests.forEach(function (guest) {
        console.log("Dear ".concat(guest, ", you are cordially invited to dinner at my place. Looking forward to your presence!"));
    });
}
inviteGuests(guestList);
