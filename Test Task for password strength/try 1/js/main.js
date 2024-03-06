let inpPass = document.querySelector('.inp')
let btn = document.querySelector('.btn')
let out = document.querySelector('.out')

let sections = document.querySelectorAll('.section')

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function numArrayFunc() {
    numArray.map(item => {
        console.log(item);
    })
}

function conditionToPaintSec(item) {
    if (typeof (inpPass.value) == 'string') {
        item.classList.add('red')
    }
}

// const chars = inpValue.split('');
// console.log(chars[8]);
// // Expected output: "k"

numArrayFunc()

btn.addEventListener('click', () => {
    sections.forEach(item => {
        conditionToPaintSec(item)
    })
    // console.log(typeof(+inpPass.value));
    out.innerHTML = inpPass.value

})

inpPass.addEventListener('keyup', () => {
    let inpValueArr = []
    let userInput = inpPass.value

    inpValueArr = userInput.split('')

    console.log(inpValueArr);
    
})



