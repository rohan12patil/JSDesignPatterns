// Class Pattern [Prototype]

class Car{
    constructor(engine, doors, color){
        this.engine = engine;
        this.doors = doors;
        this.color = color;
    }
}



// create object
const civic = new Car ('V4', 4, 'white');
console.log(civic);