"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Create a Vehicle class with the following properties:
//public brand: string
//protected model: string
//private year: number
//Then, create a Car class that extends Vehicle. Add a new property public color: string to the Car class. Instantiate an object of Car and log all the accessible properties to the console.
class vehicle {
    brand;
    model;
    year;
    constructor(b, m, y) {
        this.brand = b;
        this.model = m;
        this.year = y;
    }
}
class car extends vehicle {
    color;
    constructor(b, m, y, c) {
        super(b, m, y);
        this.color = c;
    }
}
let c1 = new car("Honda", "city", 2011, "silver");
console.log(c1);
