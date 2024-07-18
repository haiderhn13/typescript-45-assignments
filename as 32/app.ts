let current_users: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
let new_users: string[] = ['Frank', 'Eve', 'George', 'Alice', 'Hannah'];

for (let newUser of new_users) {
    if (current_users.map(user => user.toLowerCase()).includes(newUser.toLowerCase())) {
        console.log(`The username "${newUser}" is already taken. Please enter a new username.`);
    } else {
        console.log(`The username "${newUser}" is available.`);
    }
}
