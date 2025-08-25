class Vehicle {
  constructor(type, make, model, year, mileage = 0) {
    this.type = type;
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
  }
  // Method to update mileage
  drive(distance) {
    this.mileage += distance;
    console.log(`${this.type} driven for ${distance} miles.
Total mileage: ${this.mileage} miles.`);
  }
  // Method to display details
  getDetails() {
    return `${this.year} ${this.make} ${this.model}
(${this.type}) - ${this.mileage} miles`;
  }
}

// Instantiate vehicles
let car = new Vehicle("Car", "Toyota", "Corolla", 2020);
let truck = new Vehicle("Truck", "Ford", "F-150", 2018, 15000);
let motorcycle = new Vehicle("Motorcycle", "Honda", "CB500",
2021);

// Test methods
car.drive(120);
truck.drive(250);
motorcycle.drive(75);
console.log(car.getDetails());
console.log(truck.getDetails());
console.log(motorcycle.getDetails());