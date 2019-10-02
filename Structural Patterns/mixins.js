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

//Create Mixin Object 
let carMixin ={
    revEngine() {
        console.log(`This ${this.engine} is doing Vroom Vroom`);
    }
}

//Mixin
Object.assign(Car.prototype, carMixin);


const factory = new CarFactory();
const civic = factory.createCar('civic');

civic.revEngine();
