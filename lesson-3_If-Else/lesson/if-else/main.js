// let userName = 'Sasha';

let inp1 = document.querySelector('.inp1')
let btn1 = document.querySelector('.btn1')

let out1 = document.querySelector('.out-1')


btn1.onclick = () => {
    console.log(inp1.value);

    if (inp1.value == 'sasha') {
        out1.innerHTML = 'Success'
    } else {
        out1.innerHTML = 'Failed'
    }
}

