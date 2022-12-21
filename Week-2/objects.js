// Another way of creating an object
var assitantManager = {
    movement: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40
}
console.log(assitantManager.health)
// This is an example for object
var storeManager = {}
storeManager.rangeTilesPerTurn = 4;
storeManager.socialSkills = 50;
storeManager.streetSmarts = 50;
storeManager.health = 30;
storeManager.specialAbility = "Finding business opportunities";
storeManager.greeting = "Let's make some Money";

//You can access the variable 
console.log(storeManager.health)
//Update the existing property
storeManager.health = 50;
console.log(storeManager.health)



// Math Object
var a = Math.random();
// Math.random() returns a random number between 1 and 0.
console.log(a)

var b = a * 5
console.log(b)

// Math.ceil() This returns the round up number of the inserted the decimal to an integer
var c = Math.ceil(b);
console.log(c)

// To get a random integer between zero and ten

var d = Math.random(); // Fetches a random decimal
var e = d*10; // Multiply by 10 to make the decimal come in between 0 and 10
var f = Math.ceil(e); // Rounding up the decimal to an intenger
console.log(f) // Printing out the the result
