import '../styles/index.scss';

//arrow functions provide a concise way to declare a simple function...
//if the function has no parameters, we can use empty parenthesis...
// if the function can fit on a single line, we don't have to use curly braces...
//... or the return keyword (see 123 is returned from getId below) 
let getId = () => 123;
console.log(getId());

//if the function has more than one line, we must use curly braces AND...
//... we must also use the return keyword
let getCarId = () => {
    let carId = 456;
    return carId;
};
console.log(getCarId());

//somehow, we can replace empty parens with an underscore to specify a var?
//it seems this creates a variable called _ with a value of undefined
//that we can then use within the arrow function if we choose.
//this seems to ignore any variables named _ outside of the arrow function... 
let getHouseId = _ => {
    _ = 789;
    return _;
};

//keep in mind there is no 'this' keyword for arrow functions, which provdies
//some advantages that we will learn later...
console.log(getHouseId());