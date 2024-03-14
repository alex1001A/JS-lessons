let containerOutCards = document.querySelector('.hero__container') 

function getApi() {
  fetch(
    "https://www.binance.com/bapi/asset/v1/public/asset-service/product/currency"
  )
    .then((data) => data.json())
    .then((data) => {
        renderCards(data.data)
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
//   whetCardIsHovered(item.cardImg, index)

  let cardPairs = document.createElement('p')
  cardPairs.classList.add('card__pair')
  cardPairs.innerHTML = item.pair

  let cardRate = document.createElement('p')
  cardRate.classList.add('card__rate')
  cardRate.innerHTML = `${item.rate} ${item.symbol}`

  cardWrapper.append(cardTitle, cardImg, cardPairs, cardRate);

  return cardWrapper
}

function renderCards(data) {
  data.map(item => {
    if (item.fullName !== null) {
        containerOutCards.append(createCard(item))        
    } 
    console.log(item);
  });
}

// function whetCardIsHovered(someClassVar, index) {
//     if (card.hovered) {
//         someClassVar.classList.add('card__img_hover')
//     } else {
//         someClassVar.classList.remove('card__img_hover')
//     }
// }

getApi();
