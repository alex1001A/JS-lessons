const ukrainianCities = [
  { name: "Київ", population: 2804000, region: "Київ" },
  { name: "Харків", population: 1441000, region: "Харківська" },
  { name: "Одеса", population: 993120, region: "Одеська" },
  { name: "Львів", population: 724000, region: "Львівська" },
  { name: "Дніпро", population: 1001000, region: "Дніпропетровська" },
];

let out = document.querySelector(".out");
let showBtn = document.querySelector(".btn");
let showMega = document.querySelector(".btn-mega");

function createCityCard(ukrainianCities) {
  ukrainianCities.map((city) => {
    let li = document.createElement("li");

    let ol = document.createElement("ol");

    let cityName = document.createElement("li");
    cityName.innerHTML = `<b>Name of the city:</b> ${city.name}`;
    
    let cityPopulation = document.createElement("li");
    cityPopulation.innerHTML = `<b>city population:</b> ${city.population}`;
    
    let cityRegion = document.createElement("li");
    cityRegion.innerHTML = `<b>city region:</b> ${city.region}`;
    
    ol.append(cityName, cityPopulation, cityRegion);
    li.append(ol);
    out.append(li);
    
    return;
  });
}

let click = 1

showBtn.addEventListener('click', () => {
    if (click == 1) {
        createCityCard(ukrainianCities)
        click = 2
    } else if (click == 2) {
        out.innerHTML= ''
        click = 1
    }
})

let megaPolis = ukrainianCities.filter(city => city.population >= 1000000)
console.log(megaPolis);

showMega.addEventListener('click', () => {
    if (click == 1) {
        createCityCard(megaPolis)
        click = 2
    } else if (click == 2) {
        out.innerHTML= ''
        click = 1
    }
})
