function showAll() {
    fetch ("https://restcountries.com/v3.1/all")
    .then((countries) => countries.json()) //countries - змінна, яку створив, відповідає за весь об'єкт
    .then((countries) => {
        console.log(countries);
        console.log(countries[0]);
    })
}

showAll()

function renderContent () {

}