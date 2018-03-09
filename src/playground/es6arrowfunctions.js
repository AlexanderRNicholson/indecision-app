/* const square = function (x) {
    return x * x;
};

/* const squareArrow = (x) => {
    return x * x;
};

const squareArrow = (x) => x * x;

console.log(squareArrow(5)); */

const fullName = 'Alex Nicholson';

const getfirstName = (name) => {
    return name.split(' ')[0]
};

console.log(getfirstName(fullName));

const shortFirstName = (name) => name.split(' ')[0];

console.log(shortFirstName(fullName));

