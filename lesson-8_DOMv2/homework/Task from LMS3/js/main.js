let trafficLight = document.querySelectorAll('.circles')
let btnSwitch = document.querySelector('.btn')

btnSwitch.addEventListener('click', () => {
    
    trafficLight.forEach(item => {
        console.log(item.index);
        item.classList.toggle('red')
    })

})