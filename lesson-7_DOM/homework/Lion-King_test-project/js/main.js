let out = document.querySelector('.wrapper')
let hero = document.querySelector('.hero')
let showCard = document.querySelector('.show-card')
let restart = document.querySelector('.restart')
let count = document.querySelector('.count')


const lionKing = [
  {
    name: 'Симба',
    img: './img/simba.jpg',
    species: 'Лев',
    role: 'Главный герой',
    description: 'Сын Муфасы и Сарафины, будущий король Прайд Рока.',
    age: 2,
    gender: 'Мужской',
  },
  {
    name: 'Муфаса',
    img: './img/mufasa.webp',
    species: 'Лев',
    role: 'Король',
    description: 'Отец Симбы, предыдущий король Прайд Рока.',
    age: 8,
    gender: 'Мужской',
  },
  {
    name: 'Нала',
    img: './img/nala.webp',
    species: 'Лев',
    role: 'Подруга Симбы',
    description: 'Друг и подруга детства Симбы, взрослая львица.',
    age: 3,
    gender: 'Женский',
  },
  {
    name: 'Тимон',
    img: './img/timon.jpg',
    species: 'Сурок',
    role: 'Друг Симбы',
    description: 'Смешной и остроумный сурок, друг Симбы и Пумбы.',
    age: 1,
    gender: 'Мужской',
  },
  {
    name: 'Пумба',
    img: './img/pumba.webp',
    species: 'Свинья',
    role: 'Друг Симбы',
    description: 'Добродушная свинья, друг Симбы и Тимона.',
    age: 4,
    gender: 'Мужской',
  },
  {
    name: 'Рафики',
    img: './img/rafiki.jpg',
    species: 'Мартышка',
    role: 'Мудрец и священник',
    description: 'Мартышка, исполняющая роль мудреца и священника в Прайд Роке.',
    age: 10,
    gender: 'Мужской',
  },

]

lionKing.map(item => {

  function ShowCard() {
    showCard.innerHTML = ''
    showCard.innerHTML = `<img src="${item.img}">`
  }

  let card = document.createElement('div')

  let itemTitle = document.createElement('h3')
  itemTitle.innerHTML = `Імя: ${item.name}`

  let itemImg = document.createElement('img')
  itemImg.src = `${item.img}`
  itemImg.onclick = ShowCard

  let species = document.createElement('p')
  species.innerHTML = `Вид: ${item.species}`

  let role = document.createElement('h4')
  role.innerHTML = `Роль: ${item.role}`

  let description = document.createElement('p')
  description.innerHTML = `Описание: ${item.description}`

  let age = document.createElement('p')
  age.innerHTML = `Возраст: ${item.age}`

  let gender = document.createElement('p')
  gender.innerHTML = `Пол: ${item.gender}`

  let btnAddCard = document.createElement('button')
  btnAddCard.innerHTML = 'Add to favourite'
  let count1 = 0
  btnAddCard.onclick = () => {
    count.innerHTML = +count.innerHTML + +1
  }

  card.append(itemTitle, itemImg, species, role, description, age, gender, btnAddCard)
  hero.append(card)




  let select = document.querySelector('.select')
  let btn = document.querySelector('.btn')

  select.innerHTML += `<option>${item.name}</option>`

})


