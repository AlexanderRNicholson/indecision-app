const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log (add(55, 1, 1000));

const user = {
    name: 'Alex',
    cities: ['Stoke-on-Trent', 'Oxford', 'Los Angeles'],
    printPlacesLived() {
        return this.cities.map((city) =>  this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [4, 7, 10],
    multiplyBy: 8,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
}

console.log(multiplier.multiply());