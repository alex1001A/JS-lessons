let inpPass = document.querySelector('.inp')
let btn = document.querySelector('.btn')
let out = document.querySelector('.out')


let sections = document.querySelectorAll('.section')

// sections.forEach(item => {
//     console.log(item);
// })

btn.addEventListener('click', () => {
    sections.forEach(item => {
        conditionToPaintSec(item)
        console.log(typeof(inpPass.value));
    })
    out.innerHTML = inpPass.value
})


function conditionToPaintSec(item) {
    if (typeof(inpPass.value) == 'string') {
        item.classList.add('red')
    }
}
