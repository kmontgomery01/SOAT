import '../styles/index.scss';
import { isObject } from 'util';

let carIds = [
    { carId: 123, style: 'Sedan', make: 'Honda'},
    { carId: 456, style: 'Sedan', make: 'Volkswagen'},
    { carId: 789, style: 'Truck', make: 'Chevrolet'}
];


//the array.find() method will return the first object in the array
// where the given function evaluates to true...

let firstTruck = carIds.find(
    car => car.style==='Truck'
);


console.log(firstTruck);


let firstSedan = carIds.find(
    car => car.style=='Sedan'
);

console.log(firstSedan);