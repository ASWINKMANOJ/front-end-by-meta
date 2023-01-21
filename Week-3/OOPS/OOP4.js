class Animal {
    constructor(color, energy) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if (this.energy > 20) {
            this.energy -= 20;
            console.log("The Energy is:", this.energy);
        }
        else if (this.energy == 0) {
            this.sleep();
        }

    }
    sleep() {
        console.log("It is Asleep");
        this.energy += 20;
    }
    getColor() {
        console.log("The color is:", this.color);
    }
}

class Cat extends Animal {
    constructor(sound, canJumpHigh, canClimbTrees, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }
    makeSound() {
        console.log("Meow");
    }
}

var cat = new Cat("Meow", true, true, "White", 60)
cat.isActive();


