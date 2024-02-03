// Примітивні типи даних
let num = 33
let str = "Sasha"
let boolean = true / false
let und = undefined // Коли змінна порожня
let nu = null // Коли взагалі не має змінної
let a; // null

// Непримітивні типи даних

// 1. array
// 2. object

let obj = {
    name: 'iphone',
    model: 'Plus',
    price: 1300
}

let arr = [
    {
        name: 'iphone',
        model: 'Plus',
        price: 1300
    },
    {
        name: 'iphone',
        model: 'Plus',
        price: 1300
    },
    {
        name: 'iphone',
        model: 'Plus',
        price: 1300
    }
]

console.log(typeof obj);
console.log(typeof arr);

console.log(a);
console.log(nu);

// = - присвоєння
// ==  - порівнювання
// ===  - порівнювання по типу данних

// a > b - 
// a < b - 


console.log(Boolean(5 >= 5));
console.log(Boolean(5 == 5));
console.log(Boolean(5 === '5'));

console.log(typeof '44')
console.log(typeof 44)
console.log(43 + " is " + typeof 44)

// Тільки '+' робить конкатинацію!
// '-' не робить конкатинацію, а рахує як треба!

console.log(2 + '2');
console.log(2 + 2 - '2');

console.log(str.includes('Sa')); // Строге порівняння - uppercase має значення
console.log(str.toLocaleLowerCase());

