// Abstract Pattern : create multiple factories & cars

class Car{
    constructor(engine, doors, color){
        this.engine = engine;
        this.doors = doors;
        this.color = color;
    }
}

// CAR Factory
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


//SUV Factory
class SUVFactory {
    createSuv(type){
        switch(type){
            case 'CX5': 
                return new Car('v8', 4, 'Black');
            case 'CRV': 
                return new Car('v8', 4, 'White');
        }
    }
}




const carfactory = new CarFactory();
const suvfactory = new SUVFactory();

// Abstracting
const autoManufacturer = (type, model) =>{
    switch(type){
        case 'car':
            return carfactory.createCar(model);
        
        case 'suv':
            return suvfactory.createSuv(model);
    }
}


const cx5 = autoManufacturer('suv','CX5');
console.log("cx5",cx5);

