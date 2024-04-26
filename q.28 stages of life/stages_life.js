"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//stages of life.write an if else chain that describes a person's stage of life.
//set a value for the variable age, and then
let age = 25;
//if the person is two years old print a message that the person is a baby.
if (age < 2) {
    console.log("person is a baby");
}
//if the person is 2 years old but less than 4,print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("person is a toddler.");
}
//if the person is atleast 4 years old and less then
else if (age >= 4 && age < 13) {
    console.log("person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("person is a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("person is adult");
}
else {
    console.log("person is an elder");
}
