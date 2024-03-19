let containerOutCards = document.querySelector(".hero__container");
let searcBtn = document.querySelector(".input-box__button");

let arrayForBasket = JSON.parse(localStorage.getItem("basket")) || [];
// let arrayForBasket = []

let basket = document.querySelector(".header__basket");
basket.classList.add("header__basket");

let basketCloseBtn = document.querySelector(".header__basket-close-btn");
basketCloseBtn.addEventListener("click", () => {
  basket.style.display = "none";
});

let countBasketItems = document.querySelector(".header__basket-btn");
countBasketItems.classList.add("header__basket-btn");
countBasketItems.innerHTML = arrayForBasket.length;
countBasketItems.addEventListener("click", () => {
  basket.style.display = "block";
  createBasket();
});

function showAllCards() {
  fetch(
    "https://www.binance.com/bapi/asset/v1/public/asset-service/product/currency"
  )
    .then((data) => data.json())
    .then((data) => {
      renderCards(data.data);
      // console.log(data.data);
    });
}

showAllCards();

function createCard(item) {
  let cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card");

  let cardTitle = document.createElement("h3");
  cardTitle.innerHTML = `Currency: ${item.fullName}`;

  let cardImg = document.createElement("img");
  cardImg.classList.add("card__img");
  cardImg.src = item.imageUrl;

  let cardPairs = document.createElement("p");
  cardPairs.classList.add("card__pair");
  cardPairs.innerHTML = item.pair;

  let cardRate = document.createElement("p");
  cardRate.classList.add("card__rate");
  cardRate.innerHTML = `${item.rate} ${item.symbol}`;

  let addToFavIcon = document.createElement("div");
  addToFavIcon.classList.add("card__fav-btn");
  addToFavIcon.addEventListener("click", () => {
    // addToBasketArr(item)
    // issetItemInArray(item, arrayForBasket)
    if (issetItemInArray(item, arrayForBasket) === false) {
      addToBasketArr(item)
    }
  });

  cardWrapper.append(cardTitle, cardImg, cardPairs, cardRate, addToFavIcon);

  return cardWrapper;
}

// function withoutDublicates(currencyItem, arrayForBasket) {
//   arrayForBasket.map(item => {
//     if (item.fullName !== currencyItem.fullName) {
//       addToBasketArr(currencyItem)
//     }
//     console.log(item);
//   })
// }

function renderCards(data) {
  data.map((item) => {
    if (item.fullName !== null) {
      containerOutCards.append(createCard(item));
    }
  });
}

function addToBasketArr(item) {
  arrayForBasket.push(item);
  saveToLocaleStorage();
  updateCountIntoBasket();
}

function updateCountIntoBasket() {
  countBasketItems.innerHTML = arrayForBasket.length;
}

// withoutDublicates()

function saveToLocaleStorage() {
  localStorage.setItem("basket", JSON.stringify(arrayForBasket));
}

function createBasket() {
  arrayForBasket.map((item) => {
    let basketItem = document.createElement("p");
    basketItem.innerHTML = item.fullName;

    basket.append(basketItem);
  });
}

// let array = [1, 2, 2, 3, 4, 4, 5];

let arrayWithoutDuplicates = arrayForBasket.filter((item, index) => {
  return arrayForBasket.indexOf(item) === index;
});

// Проверяем существование элемента в массиве (ЛокалСторадж)
// для проверки используем item.fullName
// если элемент уже есть в массиве то мы ничего не делаем (не пушим его дважды)
// Реализуется с помощью возврата return true/false
function issetItemInArray(userItem, arrayForBasket) {
  arrayForBasket.map(item => {
    console.log(userItem.fullName, item.fullName);
    if (item.fullName === userItem.fullName) {
      return true;
    } 
  });
  return false;
}

let inputSearch = document.querySelector(".input-box__input");

inputSearch.addEventListener("keyup", () => {
  // if (inputSearch.value == ) {
  // }
});

//1. надо сравнивать item.fullName 