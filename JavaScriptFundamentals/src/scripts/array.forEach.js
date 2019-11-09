import '../styles/index.scss';

let carIds = [
    { carId: 123, style: 'Sedan', make: 'Honda'},
    { carId: 456, style: 'Sedan', make: 'Volkswagen'},
    { carId: 789, style: 'Truck', make: 'Chevrolet'}
];


//the .forEach method will call a given function on each instance
//of an array, and allows you to specify the array object as 
//a parameter.
carIds.forEach( car => console.log(car));

//the .forEach method also allows you to specify a second argument
//called index, which references the index of the array
carIds.forEach( (car,index) => {
    console.log(`The Index of this vehicle is ${index}, the
    make is ${car.make}, and the style is ${car.style} !)`);
});