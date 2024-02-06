// Оператор ">": Більше
// Оператор "<": Менше

let inp1 = document.querySelector('.inp1-1')
let inp2 = document.querySelector('.inp1-2')
let btn1 = document.querySelector('.btn1')

let out1 = document.querySelector('.out1')


btn1.onclick = () => {
    console.log(inp2.value);

    if (+inp2.value <= 18) {
        out1.innerHTML = 'Не годен'
    } else if (+inp2.value <= 25) {
        out1.innerHTML = 'Строкова служба'
    } else if (+inp2.value <= 45) {
        out1.innerHTML = 'Контракт'
    } else if (+inp2.value <= 65) {
        out1.innerHTML = 'Частково годен'
    } else if (+inp2.value >= 65) {
        out1.innerHTML = 'Не годен'
    } 
}