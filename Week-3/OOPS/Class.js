class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn
    }
    currentStatus() {
        console.log("Lights on ?", this.lightsOn)
    }
}

var myFirstTrain = new Train('Red', false);
console.log(myFirstTrain);
myFirstTrain.currentStatus();

var mySecondTrain = new Train("Blue", true);
mySecondTrain.currentStatus();
mySecondTrain.toggleLights();
mySecondTrain.currentStatus();