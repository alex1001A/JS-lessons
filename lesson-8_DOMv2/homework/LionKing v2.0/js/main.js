let out = document.querySelector(".main");

function createMain() {

  //Count start
  let countFavourites = document.createElement("p");
  countFavourites.classList.add("hero__count");

  let resetBtn = document.createElement("button");
  resetBtn.innerHTML = `Reset`;
  resetBtn.classList.add("hero__reset-btn");
  //Count end

  let secHero = document.createElement("section");
  secHero.classList.add("hero");

  let container = document.createElement("div");
  container.classList.add("container");

  let secHeroTitle = document.createElement("h1");
  secHeroTitle.classList.add("hero__title");

  let secHeroRow = document.createElement("div");
  secHeroRow.classList.add("hero__row");

  let card = document.createElement("div");
  card.classList.add("card");

  //Utilities
  let secHeroSelect = document.createElement("select");
  secHeroSelect.classList.add("hero__select");

  let filterBtn = document.createElement("button");
  filterBtn.innerHTML = `Filter`;

  let ShowAllBtn = document.createElement("button");
  ShowAllBtn.innerHTML = `Show All`;

  //Utilities end

  secHeroRow.append(card);
  container.append(
    secHeroTitle,
    secHeroSelect,
    filterBtn,
    ShowAllBtn,
    secHeroRow
  );
  secHero.append(container);
  out.append(secHero);

  return secHero;
}

createMain()