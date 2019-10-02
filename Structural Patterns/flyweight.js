/* Flyweight pattern is a method to minimize recreating the same items twice, therefore minimise memory imapct on the system
*  eg: When we create new application items, we stack these in the Browser, the browser uses flyweight pattern to save images in memory so that they donot load twice.
*  It is similar approach as singleton
*/ 

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
console.log(civic);


