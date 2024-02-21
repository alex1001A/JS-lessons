let main = document.querySelector('.main')

let hero = document.createElement('section')
hero.classList.add('hero')

let container = document.createElement('div')
container.classList.add('container')

let count = document.createElement('p')
count.classList.add('hero__count')
count.innerHTML = 0

let resetBtn = document.createElement('button')
resetBtn.innerHTML = `Reset`
resetBtn.classList.add('hero__reset-btn')

let heroTitle = document.createElement('h1')
heroTitle.classList.add('hero__title')
heroTitle.innerHTML = 'Lion King'

let heroRow = document.createElement('div')
heroRow.classList.add('hero__row')

let card = document.createElement('div')
card.classList.add('card')

let heroSelect = document.createElement('select')
heroSelect.classList.add('hero__select')

let filterBtn = document.createElement('button')
filterBtn.innerHTML = `Filter`

let ShowAllBtn = document.createElement('button')
ShowAllBtn.innerHTML = `Show All`


lionKing.map(character => {

  let card = document.createElement('div')
  card.classList.add('card')

  let cardTitle = document.createElement('h1')
  cardTitle.innerHTML = `${character.name}`

  let cardImg = document.createElement('img')
  cardImg.classList.add('card__img')
  cardImg.src = `${character.img}`

  let cardSpecies = document.createElement('p')
  cardSpecies.innerHTML = `Species: ${character.species}`

  let cardRole = document.createElement('p')
  cardRole.innerHTML = `Role: ${character.role}`

  let cardDescription = document.createElement('p')
  cardDescription.innerHTML = `Description: `

  let cardDescriptionSpan = document.createElement('span')
  cardDescriptionSpan.classList.add('card__text_inner')
  cardDescriptionSpan.innerHTML = `${character.description}`

  let cardAge = document.createElement('p')
  cardAge.innerHTML = `Age: ${character.age}`

  let cardGender = document.createElement('p')
  cardGender.innerHTML = `Gender:${character.gender}`

  let btn = document.createElement('button')
  btn.classList.add('card__btn')
  btn.innerHTML = "Add to favourite"

  btn.onclick = () => {
    count.innerHTML = +count.innerHTML + 1
  }

  cardImg.onclick = () => {
    card.classList.toggle('zoom-card');
  }

  filterBtn.addEventListener('click', () => {
    if (heroSelect.value === character.species) {
      heroRow.prepend(card)
    } else {
      card.style.display = 'none'
    }
  })

  ShowAllBtn.onclick = () => {
    card.style.display = 'flex'
  }
  
  cardDescription.append(cardDescriptionSpan)
  card.append(cardTitle, cardImg, cardSpecies, cardRole, cardDescription, cardAge, cardGender, btn)
  heroRow.append(card)
  container.append(count, resetBtn, heroTitle, heroSelect, filterBtn, ShowAllBtn, heroRow)
  hero.append(container)
  main.append(hero)
})


//Создаем уникальные значения для SPECIES чтобы поместить их опшионами в select
let uniqueSpecies = new Set()

lionKing.forEach(character => {
  uniqueSpecies.add(character.species)
})

uniqueSpecies.forEach(species => {
  let selOption = document.createElement('option');
  selOption.innerHTML = species;
  heroSelect.append(selOption);
})

//Создаём кнопку для фильтрации по выбранному селекту
// filterBtn.addEventListener('click', () => {
//   card.classList.add('hide')
// })

//Создаем кнопку для обнуления корзины
function resetBtnFun() {
  count.innerHTML = 0
}

resetBtn.onclick = resetBtnFun

//Создаём функцию для фильтрации по селекту
