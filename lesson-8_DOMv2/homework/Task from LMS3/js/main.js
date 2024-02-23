let trafficLight = document.querySelectorAll('.circles')
let btnSwitch = document.querySelector('.btn')

btnSwitch.addEventListener('click', () => {
    
    trafficLight.forEach(item => {
        item.classList.toggle('red')
    })

})