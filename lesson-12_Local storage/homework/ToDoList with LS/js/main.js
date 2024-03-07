let inp = document.querySelector('.inp')
let btn = document.querySelector('.btn')

let out = document.querySelector('.out')

let count = document.querySelector('.count')

let newArr = localStorage.getItem('listArr') ? JSON.parse(localStorage.getItem('listArr')) : []

btn.addEventListener('click', () => {

    newArr.push(inp.value)
    localStorage.setItem('listArr', JSON.stringify(newArr))

    createListItem()
    
    inp.value = ''
    
})

createListItem()

function createListItem() {
    out.innerHTML = ''
    let parseArr = JSON.parse(localStorage.getItem('listArr'))

    parseArr.map(item => {
        let li = document.createElement('li')
        li.innerHTML = item
        
        out.append(li)
    })

    console.log(parseArr);
}

