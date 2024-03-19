let containerOutCards = document.querySelector('.hero__container')
let searcBtn = document.querySelector('.input-box__button')

let arrayForBasket = JSON.parse(localStorage.getItem('basket')) || []
// let arrayForBasket = []

let basket = document.querySelector('.header__basket')
basket.classList.add('header__basket')

let basketCloseBtn = document.querySelector('.header__basket-close-btn')
basketCloseBtn.addEventListener('click', () => {
  basket.style.display = 'none'
})

let countBasketItems = document.querySelector('.header__basket-btn')
countBasketItems.classList.add('header__basket-btn')
countBasketItems.innerHTML = arrayForBasket.length
countBasketItems.addEventListener('click', () => {
  basket.style.display = 'block'
  createBasket()
})

function showAllCards() {
  fetch(
    "https://www.binance.com/bapi/asset/v1/public/asset-service/product/currency"
  )
    .then((data) => data.json())
    .then((data) => {
      renderCards(data.data)
      // console.log(data.data);
    });
}

function createCard(item) {
  let cardWrapper = document.createElement("div");
  cardWrapper.classList.add('card')

  let cardTitle = document.createElement("h3");
  cardTitle.innerHTML = `Currency: ${item.fullName}`;

  let cardImg = document.createElement('img')
  cardImg.classList.add('card__img')
  cardImg.src = item.imageUrl

  let cardPairs = document.createElement('p')
  cardPairs.classList.add('card__pair')
  cardPairs.innerHTML = item.pair

  let cardRate = document.createElement('p')
  cardRate.classList.add('card__rate')
  cardRate.innerHTML = `${item.rate} ${item.symbol}`

  let addToFavIcon = document.createElement('div')
  addToFavIcon.classList.add('card__fav-btn')
  addToFavIcon.addEventListener('click', () => {
    addToBasketArr(item)
  })

  cardWrapper.append(cardTitle, cardImg, cardPairs, cardRate, addToFavIcon);

  return cardWrapper
}

function renderCards(data) {
  data.map(item => {
    if (item.fullName !== null) {
      containerOutCards.append(createCard(item))
    }
  });
}

showAllCards();

function addToBasketArr(item) {
  arrayForBasket.push(item)
  saveToLocaleStorage()
  updateCountIntoBasket()
}

function updateCountIntoBasket() {
  countBasketItems.innerHTML = arrayForBasket.length
}

function saveToLocaleStorage() {
  localStorage.setItem('basket', JSON.stringify(arrayForBasket))
}

function createBasket() {

}




