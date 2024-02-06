// let userName = 'Sasha';

let inp1 = document.querySelector('.inp1')
let inp101 = document.querySelector('.inp1-1')
let btn1 = document.querySelector('.btn1')

let out1 = document.querySelector('.out-1')

// Оператор "І": &&
// Оператор "Або": ||

btn1.onclick = () => {
    console.log(inp1.value);

    if (inp1.value == 'sasha' && inp101.value == '123') {
        out1.innerHTML = 'Success'
    } else if (inp1.value == 'sasha' || inp101.value == '123') {
        out1.innerHTML = 'Do you forget your password?'
    } else {
        out1.innerHTML = 'Failed'
    }
}

