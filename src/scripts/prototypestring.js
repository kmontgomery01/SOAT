import '../styles/index.scss';

//prototypes can also be used to add default functionality to
//existing classes... Even widely used classes like string.
//below, we add an additional function to the string class 
// called hello, which outputs hello + theString.

String.prototype.hello = function () {
    return 'Hello ' + this.toString();
};

console.log('Mr. Kyle'.hello());