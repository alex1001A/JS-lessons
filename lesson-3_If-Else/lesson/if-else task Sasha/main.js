// // let userName = 'Sasha';

// let inp1 = document.querySelector('.inp1')
// let inp101 = document.querySelector('.inp1-1')
// let btn1 = document.querySelector('.btn1')

// let out1 = document.querySelector('.out-1')

// // Оператор "І": &&
// // Оператор "Або": ||
// // Оператор "==": Порівняння
// // Оператор "===": Порівняння і по типу даних

// // Оператор "!=": Не дорівнює (окрім)
// console.log(5==5) - true;
// console.log(6!=5) - true;

// // Оператор "!==": 

// btn1.onclick = () => {
//     console.log(inp1.value);

//     if (inp1.value == 'sasha' && inp101.value == '123') {
//         out1.innerHTML = 'Success'
//     } else if (inp1.value == 'sasha' || inp101.value == '123') {
//         out1.innerHTML = 'Do you forget your password?'
//     } else {
//         out1.innerHTML = 'Failed'
//     }
// }


//let userName = 'sasha';

let inp1 = document.querySelector('.inp1')
let inp101 = document.querySelector('.inp1-1')
let btn1 = document.querySelector('.btn1')

let sel = document.querySelector('.sel')

let out1 = document.querySelector('.out1')

//Оператор "І": &&
//Оператор "Або": ||

// Порівняти == 
if (btn1) {
    btn1.onclick = () => {
        console.log(Boolean(inp1.value));
        console.log(sel.value);
        console.log(inp101.value);
        if (inp1.value && inp101.value) {
            if (sel.value == '+') {
                out1.innerHTML = +inp1.value + +inp101.value
            } else if (sel.value == '-') {
                out1.innerHTML = +inp1.value - +inp101.value
            }
            else if (sel.value == '*') {
                out1.innerHTML = +inp1.value * +inp101.value
            }
        } else { 
            out1.innerHTML = 'Fail'
        }


    }
}