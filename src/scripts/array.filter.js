import '../styles/index.scss';

let carIds = [
    { carId: 123, style: 'Sedan', make: 'Honda'},
    { carId: 456, style: 'Sedan', make: 'Volkswagen'},
    { carId: 789, style: 'Truck', make: 'Chevrolet'}
];


//the array.filter method will apply a function to an array and return
// all of the objects of that array where the function returns true

let sedans = carIds.filter(
    car => car.style === 'Sedan'
);

//dood. console.dir is way better than console.log...
// it allows us a more verbose view of the object that we can
// then drill into and browse instead of object object.
console.dir(sedans); 