import '../styles/index.scss';

//we can define a default value for a parameter by specifying it in the 
//parameter list of the function... if no value is given for city,
//the function will assume the default value for it.
let trackCar = function(carId, city="Richmond"){
    console.log(`Tracking ${carId} in ${city}.`);
};
//also, we can use backticks when defning a string in order to use string
//interpolation. when a string is defined with backticks, we can use the 
//${variableName} syntax to inject the value of variableName into the string.

trackCar(123);

trackCar(123, 'Petersburg');