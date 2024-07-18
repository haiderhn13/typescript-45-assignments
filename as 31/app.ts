let usernames: string[] = ['admin', 'Eric', 'John', 'Alice', 'Jessica'];

// Check if the list of users is empty
if (usernames.length === 0) {
    console.log('We need to find some users!');
} else {
    for (let username of usernames) {
        if (username === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

// Remove all usernames to test the empty condition
usernames = [];

// Check again if the list of users is empty
if (usernames.length === 0) {
    console.log('We need to find some users!');
}
