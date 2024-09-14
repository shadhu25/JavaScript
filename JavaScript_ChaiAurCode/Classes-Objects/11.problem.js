// Problem: how we can inherit Vehicle class with Car class
function Vehicle(name, model, color, price) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.price = price;
}

Vehicle.prototype.getFullSpecification = function() {
    return `Name: ${this.name} Model: ${this.model} Color: ${this.color} Price: ${this.price}`;
}

function Car(name, model, color, price, maxSpeed, numOfTires, numOfGears) {
    Vehicle.call(this, name, model, color, price);
    this.maxSpeed = maxSpeed;
    this.numOfTires = numOfTires;
    this.numOfGears = numOfGears;
}

const BMW = new Car("X5 SUV", "SUV", "Alpine", 9600000, 243, 4, 8);
console.log(BMW.getFullSpecification());

// Inherit methods from Vehicle
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.getFullSpecification = function() {
    const parentMethod = Vehicle.prototype.getFullSpecification.call(this);
    return `${baseSpec} MaxSpeed: ${this.maxSpeed} Number of Tires: ${this.numOfTires} Number of Gears: ${this.numOfGears}`;
}
