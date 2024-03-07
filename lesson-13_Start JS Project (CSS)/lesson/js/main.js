let out = document.querySelector('.out')

fetch('https://dog.ceo/api/breeds/image/random')
.then(data => data.json())
.then(data => {
    out.innerHTML = `<img src="${data.message}" width="100">`
})