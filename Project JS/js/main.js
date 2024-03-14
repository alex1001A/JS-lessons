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
  cardImg.classList.add('card_img')
  cardImg.src = item.imageUrl

  cardWrapper.append(cardTitle, cardImg);

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

getApi();
