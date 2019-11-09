import '../styles/index.scss';

let o = {
    carId: 123,
    getId: function(){
        return this.carId;
    }
};

let newCar = {
    carId: 456
};

console.log(o.getId.call(newCar));
//this call function allows us to pass a new context for the getId function.
//even though the function is defined in the o object, we can apply it
//to the newCar object, and the 'this' keyword will apply to newCar
//instead of o.