class Animal {
    constructor(name) {
        this.name = name;
    }
    breathe() {
        console.log("**Respire**")
    }
}

class Dog extends Animal {
    bark(){
        console.log("**Woufff**")
    }
}


class Rabbit extends Animal {
    eatCarrot() {
        console.log("**MiamMiam**")
    }
}


let myDog = new Dog("Junior")
myDog.breathe()
myDog.bark()


let myRabbit = new Rabbit("Romeo")
myRabbit.breathe()
myRabbit.eatCarrot()

