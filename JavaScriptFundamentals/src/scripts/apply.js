import '../styles/index.scss';

let o = {
    carId: 123,
    getId: function(prefix, suffix){
        return prefix + this.carId + suffix;
    }
};

let newCar = {
    carId: 456
};

console.log(o.getId.apply(newCar, ['ID: ', '!']));
//this apply function allows us to pass a new context for the getId function.
//even though the function is defined in the o object, we can apply it
//to the newCar object, and the 'this' keyword will apply to newCar
//instead of o.
//this is similar to the call function, but differs in that it accepts
//a second param, which is an array that flows through to the getId function.
//clearly this seems to work with an indefinite number of params,
//but we must keep up with the order in which they are passed in the array!?