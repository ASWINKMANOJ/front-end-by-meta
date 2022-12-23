// console.log(a+b);
// console.log("This line is never reached")

//throw new ReferenceError();

// Try catch method used to catch the reference error
try {
    console.log(a + b);
} catch (err) {
    console.log(err); // This will print out the error in the program
    console.log('There was an error');
    console.log('The error was saved in the error log');
}

console.log('My program does not stop');

// Try catch method used to catch the manually generated error

try {
    throw new ReferenceError();
} catch (err) {
    console.log(err); // This print out the error in the program
    console.log('The code will run even after the error');
}
console.log('The code does not stop');