import '../styles/index.scss';

//it is common syntax to use a capitalized function to indicate a constructor 
//...function. the constructor function will create a new instance of an 
//...object similar to how a class works in C#.
//It is important to use the this keyword for properties and methods within
// the constructor function to reference it's internal properties.
function Car(id) {
    this.carId = id;
    this.start = function(){
        console.log('start' + this.carId);
    };
}

let car = new Car(123);

console.log(car);
car.start();
