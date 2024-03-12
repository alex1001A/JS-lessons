fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-02-11&sortBy=publishedAt&apiKey=1050bdd57e234f9ab1904f7d129a59f2')
.then(data => data.json())
.then(data => {
    console.log(data);
    let img = document.querySelector('.img')
    img.src = `${data.articles[45].urlToImage}`
    console.log(data.articles);
})
