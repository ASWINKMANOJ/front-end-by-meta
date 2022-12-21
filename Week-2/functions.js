// Function with assigned values
// The Output will be same at anytime
function addTwoNumbers(){
    var a = 5;
    var b = 6;
    var c = a + b;
    console.log(c)
}
// Calling the function
addTwoNumbers();
addTwoNumbers();

//Functions with variable values
// The Output depends on the variable passed into the function
function addTwoVarNumbers(a,b){
    var c = a + b;
    console.log(c)
}
// Calling the function
addTwoVarNumbers(7,9);
addTwoVarNumbers(10,10);