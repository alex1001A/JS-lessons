let containerOutCards = document.querySelector('.hero__container') 
let searcBtn = document.querySelector('.input-box__button') 

function getApi() {
  fetch(
    "https://www.binance.com/bapi/asset/v1/public/asset-service/product/currency"
  )
    .then((data) => data.json())
    .then((data) => {
        // renderCards(data.data)
        console.log(data.data);
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

  cardWrapper.append(cardTitle, cardImg, cardPairs, cardRate);

  return cardWrapper
}

function renderCards(data) {
  data.map(item => {
    if (item.fullName !== null) {
        containerOutCards.append(createCard(item))        
    } 
  });
}
  
  getApi();

  function searchCardByName(name) {
    // Очищаем контейнер перед выводом результатов поиска
    containerOutCards.innerHTML = '';
  
    // Проходим по всем элементам данных
    data.forEach(item => {
      // Проверяем, совпадает ли значение fullName с введенным именем
      if (item.fullName && item.fullName.toLowerCase().includes(name.toLowerCase())) {
        containerOutCards.append(createCard(item));
      }
    });
  }
  
  // Обработчик события для кнопки поиска
  searcBtn.addEventListener('click', function() {
    let searcInput = document.querySelector('.input-box__input')
    let searchInputValue = searcInput.value.trim(); // Получаем значение из инпута и убираем пробелы по краям
  
    // Если введенное значение не пустое, вызываем функцию поиска карточки
    if (searchInputValue !== '') {
      searchCardByName(searchInputValue);
    }
  });