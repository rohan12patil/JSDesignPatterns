class Car{
    constructor(engine, doors, color){
        this.engine = engine;
        this.doors = doors;
        this.color = color;
    }
}

class Suv extends Car {
    constructor(engine, doors, color){
        super(engine, doors, color);
        this.wheels = 4;
    }
}

const civic = new Car ('V4', 4, 'white');
console.log("CIVIC: ",civic);

const crv = new Suv('V6', 4, 'red');
console.log("CRV: ",crv)