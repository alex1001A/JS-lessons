let circles = document.querySelectorAll('.circles');
let btnSwitch = document.querySelector('.btn');

let click = 0;

btnSwitch.addEventListener('click', () => {
    click = (click + 1) % 3; // Используем остаток от деления для циклического изменения значения от 0 до 2

    circles.forEach((circle, index) => {
        circle.classList.remove('red', 'yellow', 'green');
        if (index === click) {
            switch (click) {
                case 0:
                    circle.classList.add('red');
                    break;
                case 1:
                    circle.classList.add('yellow');
                    break;
                case 2:
                    circle.classList.add('green');
                    break;
            }
        }
    });
});