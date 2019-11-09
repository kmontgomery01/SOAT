import '../styles/index.scss';

//a prototype is very useful, and much more complicated than what we 
//...see here. In this instance, instead of declaring the start function
// in the constructor and then having thousands of instances of 
// start, now we can declare it once in the prototype and have it
// available in every instance of the car class. This can save
// a ton of memory in your application over time!
function Car(id) {
    this.carId = id;
}

Car.prototype.start = function(){
    console.log('start: ' + this.carId);
};

let car = new Car(123);

console.log(car);
car.start();
