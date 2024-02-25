let inp = document.querySelector('.inp')
let sel = document.querySelector('.select')
let btn = document.querySelector('.btn')
let out = document.querySelector('.out')
let count = document.querySelector('.count')


let items = []

//  Приорітети
// Low = green
// middle = yellow
// high = red

// let testObj = {
//     name: "Sasha",
//     peotity: 'high'
// }

btn.addEventListener('click', () => {

    items.push({
        name: inp.value,
        peotity: sel.value,
    })

    out.innerHTML = ''

    items.map(item => {
        out.append(createTask(item))
    })

    console.log(items);

    inp.value = ''

    count.innerHTML = +count.innerHTML + 1
})

function createTask(item) {

    let li = document.createElement('li')
    li.classList.add('li')

    let inpCheck = document.createElement('input')
    inpCheck.type = 'checkbox'

    let spanName = document.createElement('span')
    spanName.classList.add('span')
    spanName.innerHTML = `${item.name} `

    let btnDelete = document.createElement('button')
    btnDelete.classList.add('btn-remove')
    btnDelete.innerHTML = 'X'

    inpCheck.addEventListener('change', () => {
            if (inpCheck.checked) {
                spanName.style.textDecoration = 'line-through'
            } else {
                spanName.style.textDecoration = ''
            }
    })

    inpCheck.addEventListener('change', () => {
        if (inpCheck.checked) {
            count.innerHTML = +count.innerHTML - 1
        } else {
            count.innerHTML = +count.innerHTML + 1
        }

    })

    li.append(inpCheck, spanName, btnDelete)

    return li
}




// out.innerHTML = ` <li><input type="checkbox"><span class="${testJbj.peotity}">Test</span> <button>Х</button></li>`
