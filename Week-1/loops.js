// for loop var i = 0 starts from 0 and go til i<50 while incrementing 8 every time the cosnole.log
for (var i=0;i<50;i+=8){
    console.log(i)
}

// Same thing done in while loop
var i = 0;
while (i<50){
    console.log(i)
    i+=8
}

//nested for loops
for (var i=0;i<50;i++){
    for (var j = 20;j<24;j++){
        console.log("Hello")
    }
}

var i = 1

while(i<=365){
    console.log(365-i,"days to go")
    i++
}
console.log("Happy new year")