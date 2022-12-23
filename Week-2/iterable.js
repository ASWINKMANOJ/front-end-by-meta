var veggies = ["onion", "parsley", "carrot"];

console.log(veggies.length); //Returns the numbers  of element in the array

console.log(veggies[0]); //Returns the first element in the array
console.log(veggies[1]); //Returns the second element in the array

for (var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}
// Logs out the elements in the array one by one

// Iterating through the string

var a = "HelloWorld!";

console.log(a);

console.log(a[0]); // Returns the first element of the string
console.log(a[1]); // Returns the second element of the string

for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}
// log out the letters of the string one by one

// You can iterate through string and array in the same way but the array and string will never be the same

// Example

// console.log(a.pop()) // Shows an error cause the string doesn't have pop method

var h = "Hello";
var i = "World";

console.log(h + i);

var g = ["jo", "lol"]

console.log(veggies + g) // appends the elements of g array into veggies array

console.log(h.charAt(1)); // Logs out the char at index 1
console.log(h.concat(i)); // Combined string of h and i
console.log(h.indexOf("l")); // Returns the index of first occurance of the given char
console.log(h.lastIndexOf("l")) // Returns the index of last occurance of the given char
console.log(h.toUpperCase()); // Convert all letters into uppercase letter
console.log(h.toLowerCase()); // Converts all letters to uppercase Char

var k = "This is a string with space between the words";
console.log(k.split(" ")); // Returns an array of elements splited from the string with the condition "space" between them 