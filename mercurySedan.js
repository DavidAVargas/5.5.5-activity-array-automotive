const VehicleModule = require("./vehicleBaseClass");

class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    checkService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true;
            return this.scheduleService;                       
        }
    }

    start() {
        if (this.fuel > 0) {            
            console.log("engine has started.");
            return this.started = true;
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " does not have enough space to take all passengers.");
            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }
}

module.exports = {
    Car: Car
};

// Testing the Car class
const CarModule = require("./carClass");

// Reusing the instance "v" of the Vehicle class from the base class.
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make);

// Creating instances of the Car class and testing them
let car1 = new CarModule.Car("Toyota", "Camry", "2020", "red", "20000", 4);
let car2 = new CarModule.Car("Honda", "Accord", "2019", "blue", "25000", 4);

console.log(car1.make); // Output: Toyota
console.log(car2.model); // Output: Accord
console.log(car1.numDoors); // Output: 4
console.log(car2.color); // Output: blue
