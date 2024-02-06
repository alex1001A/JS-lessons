// Task 1
// При нажатии кнопки .b-1 срабатывает функция f1. Функция должна прочитать содержимое .i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в .out-1.
let inp1 = document.querySelector('.i-1').value
let btn1 = document.querySelector('.b-1')
let out1 = document.querySelector('.out-1')
let a1 = 4

function f1() {
   if (+inp1 == a1) {
      out1.innerHTML = true
   } else {
      out1.innerHTML = false
   }
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки .b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в .out-2 число, которое больше. Вариант равенства переменных не рассматриваем.
let btn2 = document.querySelector('.b-2')
let out2 = document.querySelector('.out-2')

let a21 = 45;
let a22 = 32;

btn2.onclick = () => {
   if (a21 > a22) {
      out2.innerHTML = true
   } else {
      out2.innerHTML = false
   }
}


// Task 3
// Даны 2 input - .i-31 и .i-32, оба - input[type=number]. При нажатии кнопки .b-3 срабатывает функция f3. Функция должна сравнить числа из input, вывести в  .out-3 большее число.
// Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.


let btn3 = document.querySelector('.b-3')
let out3 = document.querySelector('.out-3')

btn3.onclick = () => {

   let inp301 = document.querySelector('.i-31')
   let inp302 = document.querySelector('.i-32')

   if (+inp301.value >= +inp302.value) {
      out3.innerHTML = inp301.value
   } else {
      out3.innerHTML = 'fail'
   }
}


// Task 4. 
// Пользователь вводит в .i-4 год своего рождения. Есть кнопка .b-4 которая запускает функцию f4. Функция должна вывести в .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

let out4 = document.querySelector('.out-4')
let btn4 = document.querySelector('.b-4')

btn4.onclick = () => {
   let inp4 = document.querySelector('.i-4').value
   let age = 2024 - +inp4

   if (+age > 18) {
      out4.innerHTML = 'go'
   } else {
      out4.innerHTML = 'stop'
   }
}

// Task 5. 
// На странице есть input c классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в .out-5 символ 'm' если число меньше нуля, 0 если число равно нулю и число 1 если больше.

let out5 = document.querySelector('.out-5')
let btn5 = document.querySelector('.b-5')

btn5.onclick = () => {
   let inp5 = document.querySelector('.i-5').value

   if (+inp5 < 0) {
      out5.innerHTML = 'm'
   } else if (+inp5 == 0) {
      out5.innerHTML = '0'
   } else {
      out5.innerHTML = '1'
   }
}

// Task 6.
// На странице есть input с классом i-6, куда пользователь может ввести число. Есть кнопка .b-6 которая запускает функцию f6. Функция должна вывести в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю  - четное, нет - нечетное.

let out6 = document.querySelector('.out-6')
let btn6 = document.querySelector('.b-6')

btn6.onclick = () => {
   let inp6 = document.querySelector('.i-6').value

   if (+inp6 % 2) {
      out6.innerHTML = 'odd'
      console.log(+inp6 % 2)
   } else {
      out6.innerHTML = 'even'
   }
}

// Task 7.
// Даны 2 input - .i-71 и .i-72, оба - input[type=number]. При нажатии кнопки .b-7 срабатывает функция f7. Функция должна число из .i-71 возвести в степень .i-72, вывести результат в  .out-7. Для возведения в степень можно использовать **, или Math.pow.

let inp701 = document.querySelector('.i-71').value
let inp702 = document.querySelector('.i-72').value
let btn7 = document.querySelector('.b-7')
let out7 = document.querySelector('.out-7')

btn7.onclick = () => {

   out7.innerHTML = Math.pow(+inp701, +inp702)
   console.log(Math.pow(+inp701, +inp702));
}

// Task 8.
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее  нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с 1, 2, 3. И если число выбрано - 1, то вывести в .out-8 строку one, если 2 - two, если 3 - three. Напоминаю - это программирование. Как указано в задании - так и выводим. Т.е. Three с большой буквы - ошибка!!!

let sel8 = document.querySelector('.s-8')
let btn8 = document.querySelector('.b-8')
let out8 = document.querySelector('.out-8')

btn8.onclick = () => {


   switch (sel8.value) {
      case '1':
         out8.innerHTML = 'one'
         break;
      case '2':
         out8.innerHTML = 'two'
         break;
      case '3':
         out8.innerHTML = 'three'
         break;

      default:
         break;
   }
}

// Task 9
// Есть input с классом .i-9, куда пользователь может ввести номер квартиры. Есть кнопка .b-9 которая запускает функцию f9. Функция должна вывести в .out-9 номер подъезда, в котором находится квартира.
//  если от 1 включительно до 32 включительно - то вывести цифру 1
//  если от 33 (включительно) до 43(включительно) - то вывести 2
//  если от 44(включительно) до 64 (всключительно) - то 3.
//  В противном случае, вывести 0.

let btn9 = document.querySelector('.b-9')
let out9 = document.querySelector('.out-9')

btn9.onclick = () => {
   let inp9 = document.querySelector('.i-9').value

   if (inp9 >= 1 && inp9 <= 32) {
      out9.innerHTML = '1'
   } else if (inp9 > 33 && inp9 <= 43) {
      out9.innerHTML = '2'
   } else if (inp9 > 44 && inp9 <= 64) {
      out9.innerHTML = '3'
   } else {
      out9.innerHTML = '0'
   }
}


// Task 10
// Дан select .s-100. По нажатию кнопки, выведите value выбранного option в .out-10.
let out10 = document.querySelector('.out-10')
let btn10 = document.querySelector('.b-10')

btn10.onclick = () => {
   let sel10 = document.querySelector('.s-100')

   if (sel10.value == 6) {
      out10.innerHTML = 'six'
   } else if (sel10.value == 7) {
      out10.innerHTML = 'seven'
   } else if (sel10.value == 11) {
      out10.innerHTML = 'eleven'
   } else if (sel10.value == 9) {
      out10.innerHTML = 'nine'
   }
}


// Task 11
// Дан select .s-110. По изменению состояния select (событие onchange) выведите value выбранного option в .out-11.
document.querySelector('.s-110').onchange = f11;

let sel11 = document.querySelector('.s-110')
let out11 = document.querySelector('.out-11')

function f11() {
   if (sel11.value == 6) {
      out11.innerHTML = 'six'
   } else if (sel11.value == 7) {
      out11.innerHTML = 'seven'
   } else if (sel11.value == 11) {
      out11.innerHTML = 'eleven'
   } else if (sel11.value == 9) {
      out11.innerHTML = 'nine'
   }
}

// document.querySelector('.s-110').onchange = f11;

// Task 12
// Дан input .i-120. По нажатию кнопки получите значение из input  в переменную, а затем выведите в .out-12 typeof полученной переменной. Typeof позволяет определить тип данных. Обратите внимание, данная задача уже решена, нужно убрать комментарии и изучить работу.

let i120 = document.querySelector('.i-120');

function f12() {
   let v = i120.value;
   document.querySelector('.out-12').innerHTML = (typeof v);

}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Дан input i-130. В отличие от предыдущего задания - input type number. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-13 typeof полученной переменной. Typeof позволяет определить тип данных. Если вы правильно все сделали - то удивительно, но тип данных будет string! Подумайте почему так?

let i130 = document.querySelector('.i-130');

function f13() {
   let v = i130.value;
   document.querySelector('.out-13').innerHTML = (typeof v);

}

document.querySelector('.b-13').onclick = f13;


// Task 14
// Дан input .i-141 и .i-142, type=number.  Дан select .s-143, который содержит четыре операции - +, -, *, / . Дана кнопка b-14, при нажатии на которую срабатывает функция f14. Функция выводит в .out-14 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат операции 1+13 т.е.  14.

function f14() {

}

document.querySelector('.b-14').onclick = f14;


// Task     15
// Дан select .s-151 и .s-152, каждый из которых содержит 1 и 0.  Дан select .s-153, который содержит две операции - && и || . Дана кнопка .b-15, при нажатии на которую срабатывает функция f15. Функция выводит в .out-15 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&, нужно вывести результат операции 1&&1 т.е. 1 или 0.

function f15() {

}

document.querySelector('.b-15').onclick = f15;



