// Facotry Pattern is a mechanism to create other objects
// eg: Car Factory

class Car{
    constructor(engine, doors, color){
        this.engine = engine;
        this.doors = doors;
        this.color = color;
    }
}


class CarFactory {
    createCar(type){
        switch(type){
            case 'civic': 
                return new Car('v4', 2, 'Black');
            case 'corolla': 
                return new Car('v6', 4, 'White');
        }
    }
}

// Initialize a new Factory
const factory = new CarFactory();

const civic = factory.createCar('civic');
console.log("civic",civic);

const corolla = factory.createCar('corolla');
console.log("corolla",corolla);

