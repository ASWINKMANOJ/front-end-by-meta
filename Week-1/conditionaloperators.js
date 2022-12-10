// if-else conditional operator
if (2>4){
    console.log("2 is greater than 4")
} else{
    console.log("2 is less than 4")
}

// if-else if conditional operator
if (2==4){
    console.log("2 is equal to 4")
} else if(2>4){
    console.log("2 is greator than 4")
}
else if(2<4){
    console.log("2 is less than 4")
}
else{
    console.log("Null")
}

var result = 35;
if (result>40){
    console.log("You Passed")
} else {
    console.log("You didn't pass the test")
}

// Switch statements

switch (result){
    case (result>40):
        console.log("pass")
        break;
    case (result<30):
        console.log("fail")
        break;
    case (result=35):
        console.log("Need one more mark to pass the test")
        break;
    default:
        console.log("Default value")
}