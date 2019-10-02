// Singleton makes sure that we donot have more than one instance of a particular class
let instance = null

class Car{
    constructor(engine, doors, color){
        if(!instance){
            this.engine = engine;
            this.doors = doors;
            this.color = color;
            
            instance = this
        }
        else{
            return instance;
        }
    }
}


// create object
const civic = new Car ('V4', 2, 'white');
const corolla = new Car ('V4', 4, 'blue');
console.log(civic);
console.log(corolla);