function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} : "${message}".`);
}

// Making a large shirt with the default message
make_shirt();

// Making a medium shirt with the default message
make_shirt('Medium');

// Making a small shirt with a custom message
make_shirt('Small', 'TypeScript is awesome!');
