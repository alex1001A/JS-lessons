let inp = document.querySelector('.inp')
let btn = document.querySelector('.btn')

let out = document.querySelector('.out')

let count = document.querySelector('.count')

let newArr = []

btn.addEventListener('click', () => {
    newArr.push(inp.value)
    console.log(newArr);
    localStorage.setItem('listArr', JSON.stringify(newArr))

    let parseArr = JSON.parse(localStorage.getItem('listArr'))
    
    out.innerHTML = ''
    
    parseArr.map(item => {
        let li = document.createElement('li')
        li.innerHTML = item

        out.append(li)
    })
})