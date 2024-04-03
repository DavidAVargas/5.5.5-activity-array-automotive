//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage, numDoors) {
        super(make, model, year, color, mileage);
        this.numDoors = numDoors;

    }
}


module.exports = {
    Car: Car

};






//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.

const CarModule = require("./carClass");
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)




//Create at least two new instances of the Car class and test them here:

let car1 = new CarModule.Car("Toyota", "Camry", "2020", "red", "20000", 4);
let car2 = new CarModule.Car("Honda", "Accord", "2019", "blue", "25000", 4);


console.log(car1.make); // Output: Toyota
console.log(car2.model); // Output: Accord
console.log(car1.numDoors); // Output: 4
console.log(car2.color); // Output: blue
