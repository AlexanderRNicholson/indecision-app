var nameVar = 'Andrew';
var nameVar = 'Steve';
console.log('nameVar', nameVar)

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst)

function getPetName() {
    var petName = 'Maisie';
    return petName;
}

getPetName();

var fullName = 'Alex Nicholson';

if (fullName) {
    const firstName = fullName.split(' ')[0];
    console.log(firstName);   
}

console.log(firstName);
