// Task 1

let inp1One = document.querySelector('.i-1-1').value;
let inp1Two = document.querySelector('.i-1-2').value;
let btn1 = document.querySelector('.b-1');
let out1 = document.querySelector('.out-1');
let res1 = +inp1One + +inp1Two

btn1.onclick = () => {
    out1.innerHTML = res1.toFixed(1)
}
console.log(res1.toFixed(1));

// Task 2
let a = "1"
let b = 2
let btn2 = document.querySelector('.b-2');
let out2 = document.querySelector('.out-2');

btn2.onclick = () => {
    // let inp2One = document.querySelector('.i-2-1').value;
    // let inp2Two = document.querySelector('.i-2-2').value;

    out2.innerHTML = +a + b
}

// Task 3

let btn3 = document.querySelector('.b-3');
let out3One = document.querySelector('.out-3-1');
let out3Two = document.querySelector('.out-3-2');
let fileSize = 820
// let fileSize = 820;

btn3.onclick = () => {
    let inp3 = document.querySelector('.i-3').value;
    let convertToMb = +inp3 * 1000
    out3One.innerHTML = Math.round(convertToMb / fileSize) + ' files'
    out3Two.innerHTML = convertToMb % fileSize + 'mb'

    console.log(convertToMb);
}
