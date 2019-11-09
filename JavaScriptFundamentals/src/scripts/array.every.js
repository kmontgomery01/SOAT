import '../styles/index.scss';
import { isObject } from 'util';

let carIds = [
    { carId: 123, style: 'Sedan', make: 'Honda'},
    { carId: 456, style: 'Sedan', make: 'Volkswagen'},
    { carId: 789, style: 'Truck', make: 'Chevrolet'}
];


//the array.every function will test to see if every object in array
// meets a given condition specified in the function param

let areAllCarsSedans = carIds.every(
    car => car.style === "Sedan"
);

console.dir(areAllCarsSedans); // logs false

let areAllCarsAnObject = carIds.every(
    car => typeof(car) === 'object'
);

//it seems we cannot call console.dir on the below object for...
// some odd reason... perhaps because the value is set to true?
console.log(areAllCarsAnObject);