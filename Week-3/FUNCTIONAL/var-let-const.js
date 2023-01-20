//----------------------VAR----------------------------//

// var keyword

// 1.We Can access a var variable before initialization....
//..as long as the var variable IS EVENTUALlY INITIALIZED
//..ANYWHERE in our code
// console.log(user);

// 2. We Can declare and redeclare the same  var variable without errors

// var user = 'Mary';
// var user = 'Joanna';
// var user = 'Mark';

// console.log(user)

// var user;

//-------------------LET----------------------------//

// let keyword

// 1. WE Cannot access a let variable before we declare it
// console.log(user); // Error!
// let user;

// 2. We Can declare an unassingned variable with let
// let user;
// console.log(user);

//3.We Can't redeclare a let variable
// let user = "Anna";

//4.But we CAN re-assign it
// user = "Anna";
// console.log(user);

//---------------------CONST----------------------//
// const keyword

//1.The const variable MUST BE INTIALIZED
//console.log(user); // Error!
//const user;

//2.We Can't access the const variable before initialization
//console.log(user); //Unexpected token error
//const user = 'Andrew';

//3.We Can't redeclare a const variable
// user = "Anna";