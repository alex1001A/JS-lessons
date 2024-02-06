let IN = document.querySelector('.calc__inp');

let zero = document.querySelector('.calc__numbers-btn--zero');
let one = document.querySelector('.calc__numbers-btn--one');
let two = document.querySelector('.calc__numbers-btn--two');
let three = document.querySelector('.calc__numbers-btn--three');
let four = document.querySelector('.calc__numbers-btn--four');
let five = document.querySelector('.calc__numbers-btn--five');
let six = document.querySelector('.calc__numbers-btn--six');
let seven = document.querySelector('.calc__numbers-btn--seven');
let eight = document.querySelector('.calc__numbers-btn--eight');
let nine = document.querySelector('.calc__numbers-btn--nine');
let CE = document.querySelector('.calc__numbers-btn--ce');

let plus = document.querySelector('.calc__numbers-btn--plus');
let minus = document.querySelector('.calc__numbers-btn--minus');
let multi = document.querySelector('.calc__numbers-btn--multi');
let divide = document.querySelector('.calc__numbers-btn--divide');
let res = document.querySelector('.calc__numbers-btn--res');

CE.onclick = () => {
    IN.value = CE.value;
    console.log(CE.value);
}

zero.onclick = () => {

    IN.value += zero.value;
    console.log(zero.value);
}

one.onclick = () => {

    IN.value += one.value;
    console.log(one.value);
}

two.onclick = () => {

    IN.value += two.value;
    console.log(two.value);
}

three.onclick = () => {

    IN.value += three.value;
    console.log(three.value);
}

four.onclick = () => {

    IN.value += four.value;
    console.log(four.value);
}

five.onclick = () => {

    IN.value += five.value;
    console.log(five.value);
}

six.onclick = () => {

    IN.value += six.value;
    console.log(six.value);
}

seven.onclick = () => {

    IN.value += seven.value;
    console.log(seven.value);
}

eight.onclick = () => {

    IN.value += eight.value;
    console.log(eight.value);
}

nine.onclick = () => {

    IN.value += nine.value;
    console.log(nine.value);
}

plus.onclick = () => {

    IN.value += plus.value;
    console.log(typeof Number(plus.value));
}


minus.onclick = () => {

    IN.value += minus.value;
    console.log(typeof Number(minus.value));
}

multi.onclick = () => {

    IN.value += multi.value;
    console.log(typeof Number(multi.value));
}

divide.onclick = () => {

    IN.value += divide.value;
    console.log(typeof Number(divide.value));
}

res.onclick = () => {
    
        IN.value = eval(IN.value);
        console.log(IN.value);
    
}
