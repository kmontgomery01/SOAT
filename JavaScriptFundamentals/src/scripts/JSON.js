import '../styles/index.scss';

//JSON is very similar to how we might define an object in JS code
//the difference is primarily in the use of double quotes around
//the property names...

let demoArray = [
    {carId: 123},
    {carId: 456},
    {carId: 789}
];
//this might be an object in a source system or behind a given api.

//JSON.stringify will take a JavaScript Object, and turn it into
//a JSON string...
let jsonIn = JSON.stringify(demoArray);
console.log(jsonIn);

//here is what was in the demo, and it is basically the same as above...
// let jsonIn = 
// `
//     [
//         {"carId": 123},
//         {"carId": 456},
//         {"carId": 789}
//     ]
// `;

//JSON.parse will take a stringified JSON object and convert it to
//a JavaScript Object...
let carIds = JSON.parse(jsonIn);

console.log(carIds); 