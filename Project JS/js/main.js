const out = document.querySelector('.main')
const selectOut = document.querySelector('.sort-brand')
const btnSortBrand = document.querySelector('.btn__sort-brand')

const cars = [
    {
        img: './img/volkswagen.webp',
        brand: 'Volkswagen',
        model: 'Touran',
        year: 2003,
        price: 4700,
        length: 267,
    },
    {
        img: './img/volkswagen.webp',
        brand: 'Volkswagen',
        model: 'Passat',
        year: 2013,
        price: 4700,
        length: 267,
    },
    {
        img: './img/volkswagen.webp',
        brand: 'Mazda',
        model: '6',
        year: 2010,
        price: 11000,
        length: 190,
    },
    {
        img: './img/volkswagen.webp',
        brand: 'Mercedes',
        model: 'E',
        year: 2013,
        price: 22000,
        length: 267,
    },
    {
        img: './img/volkswagen.webp',
        brand: 'Mercedes',
        model: 'S',
        year: 2015,
        price: 33000,
        length: 67,
    },
    {
        img: './img/volkswagen.webp',
        brand: 'Mazda',
        model: '3',
        year: 2006,
        price: 3000,
        length: 230,
    },
]
console.log(cars[0]);
console.log(cars[cars.length - 1]); //останній об'єкт масиву

console.log(cars[0].img); //провалюємось у картинку

//перебор масиву, який повертає його: ПЕРЕБИРАЄ ТІЛЬКИ МАСИВИ!

// cars.map((item, index, arr) => {
//     console.log(item); //Використовується часто: пошук за елементом
//     console.log(index); //Використовується не часто: пошук за індексом
//     console.log(arr); //Використовується дуже рідко: виводить весь масив
// })

// cars.map(car => console.log(car))

//Перебор масиву з умовою
// cars.map(car => {
//     if (car.brand == 'Volkswagen') {
//         console.log(car.brand)
//     }
// })

function renderCars(data) {
    return `
    <div class="card">
            <img src="${data.img}" alt="${data.brand} ${data.model}">
            <h2 class="card__title">${data.brand} ${data.model} ${data.year}</h2>
            <h3 class="card__price">${data.price}$ <span class="card__range">${data.length} тис. км</span></h3>
        </div>
    `
}


//Перебор масиву з умовою
cars.map(car => {
    out.innerHTML += `
    <div class="card">
            <img src="${car.img}" alt="${car.brand} ${car.model}">
            <h2 class="card__title">${car.brand} ${car.model} ${car.year}</h2>
            <h3 class="card__price">${car.price}$ <span class="card__range">${car.length} тис. км</span></h3>
        </div>
    `
})

cars.map(car => {
    selectOut.innerHTML += `
    <option value="${car.brand}">${car.brand}</option>
    `
})

btnSortBrand.onclick = () => {
    out.innerHTML = ""

    cars.map(car => {
        if (selectOut.value == car.brand) {
            out.innerHTML += renderCars(car)
        } else if (selectOut.value == "all") {
            out.innerHTML += renderCars(car)
        }
    })



}

