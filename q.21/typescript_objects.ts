//wrie a program that creates objects containing these items.


// let person_Name:string='naila';
// const personName_Array: string[]=['person','car','cold drink'];
// //object is person

interface person {
    age:number,
    name: string,
    nationality :string,
    student: boolean

}
//data type key value pairs of object
let person :person={
    age:26,
    name:'naila',
    nationality:'Pakistani',
    student: true   

}
//print description of person
console.log(person);

interface car{
    name:string,
    color:string,
    automatic:boolean

}
//car is object
let car={
    name: 'toyota',
    color:'black',
    automatic: true   

}
//print car
console.log(car);