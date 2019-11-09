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

let newFn = o.getId.bind(newCar);

console.log(newFn("ID: ", "!"));
//this bind function is similar to the call and apply functions.
//the main difference is that bind will create a copy of the existing function,
//and allow us to assign it to a variable while also giving a new context.
//clearly, this still allows us to pass parameters to the function as we
//could do with the apply function.