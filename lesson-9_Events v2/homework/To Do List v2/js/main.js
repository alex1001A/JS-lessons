let inp = document.querySelector(".inp");
let sel = document.querySelector(".select");
let btn = document.querySelector(".btn");
let out = document.querySelector(".out");
let count = document.querySelector(".count");

let items = [];

btn.addEventListener("click", () => {
  // Створюємо змінну з об'єктом, в який вводяться значення з інпут та селекту
  const arrObj = {
    task: inp.value,
    priority: sel.value,
  };

  // Пушимо цей об'єкт у порожній массив
  items.push(arrObj);

  // Очищаємо массив, без цього масив просто перезаписується з вже
  // ічнуючими об'ектами, тобто додається не кожен новий об'єкт,
  // а додається новий массив З новим об'єктом
  out.innerHTML = "";

  // Додаємо в out створенний li за функцією createTask(item, index)
  // За звичайних умов ми б просто перебирали массив за допомогою функції
  // зворотнього виклику items.map(item) == items.map(function(item){ })
  // але нам потрібно перевіряти не тільки об'єкт массиву, але і його індекс
  items.map((item, index) => {
    out.append(createTask(item, index));
  });

  // Очищуємо inp.value після кожного натискання кнопки "Add"
  inp.value = "";

  // При натисканні цієї ж кнопки ми збільшуємо у КАУНТІ значення на 1,
  // сповіщуючи про те, що в нас збільшилась кіл-ть тасок
  count.innerHTML = +count.innerHTML + 1;

  // Просто перевіряємо який останній ітерованний массив у нас вийшов
  console.log(items);
});

// Створюємо функцію, яка буде відповідати за створення елементу списку
// та за багато інших маніпуляцій
function createTask(item, index) {
  // Створюємо li та додаємо йому по дефолту класс .li, з деякими стилями
  // в нього ми якраз і будемо поміщувати усі інші елементи (спани, кнопки та ін.)
  let li = document.createElement("li");
  li.classList.add("li");

  // Створюємо input та робимо та змінюємо його тип на "чекбокс"!
  let inpCheck = document.createElement("input");
  inpCheck.type = "checkbox";

  // 1. Створюємо span та додаємо йому по дефолту класс .span, з деякими стилями
  // 2. розміщуєто всередину нього по DOM ключ -"task" об'єкту - "item"
  // т.я. у нас перебирається на 28-й строчці массив - JS розуміє що, та звідки брати
  // 3. останією маніпуляцією буде призначення спан атрибуту "contenteditable",
  // з дефолтним значенням "false", щоб зі старту не можно було редагувати
  let spanName = document.createElement("span");
  spanName.classList.add("span");
  spanName.innerHTML = item.task;
  spanName.setAttribute("contenteditable", "false");

  // 1. Створюємо button та додаємо йому по дефолту класс .btn-edit, з деякими стилями
  // 2. Розміщуємо всередину нього по DOM емодзі олівця
  let btnEdit = document.createElement("button");
  btnEdit.classList.add("btn-edit");
  btnEdit.innerHTML = "✏️";

  // 1. Створюємо button та додаємо йому по дефолту класс .btn-remove, з деякими стилями
  // 2. розміщуєто всередину нього по DOM емодзі хрестика
  let btnDelete = document.createElement("button");
  btnDelete.classList.add("btn-remove");
  btnDelete.innerHTML = "❌";

  // Цією функцією перевіряємо Бульове значення inpCheck, яцщо істина то закреслюємо
  // spanName(ВАЖЛИВО! записувати значення до стилю саме у такому порядку)
  // Якщо значення хибне, тобто чек прибрали з інпуту то закреслення знімаємо
  // А також збільшуємо, або змуншуємо значення лічильника задач (+/-)
  function lineThrough() {
    if (inpCheck.checked == true) {
      spanName.style.textDecoration = "line-through";
      count.innerHTML = +count.innerHTML - 1;
    } else if (inpCheck.checked == false) {
      spanName.style.textDecoration = "";
      count.innerHTML = +count.innerHTML + 1;
    }
  }

  // Призначаємо цю функцію слухачу подій до чекбоксу і вказуємо значення
  // "change" - тобко щоб умова процювала саме при змінні стану, а не по натисканню
  inpCheck.addEventListener("change", () => {
    lineThrough();
  });

  // Створюємо умову для зміни кольору задачі в залежності від value -"low" key -"priority" object -"item"
  if (item.priority == "low") {
    spanName.classList.add("low");
  } else if (item.priority == "middle") {
    spanName.classList.add("middle");
  } else if (item.priority == "high") {
    spanName.classList.add("high");
  }

  // 1. Створюємо функцію, яка буде видаляти об'єкт з масиву, в залежності від його індексу,
  // якщо другим параметром не передавати індекс, то ф-ія буде видаляти перший айтем у списку
  // 2. items.splice(index, 1) - означає, що буде видаленний об'єкт, з тим індексом, на яку кнопку
  // натиснути, тобто, якщо натискаєшь на другий об'єкт (індекс = 1) - він і видалиться
  // 3. 1 - означає, що видаляємо лище один об'єкт (число вказує на кількість об'єктів)
  // які треба видалити
  function removeItem(item, index) {
    if (inpCheck.checked == false && items.splice(index, 1)) {
      count.innerHTML = +count.innerHTML - 1;
    } else if (inpCheck.checked == true && items.splice(index, 1)) {
      count.innerHTML = count.innerHTML;
    }

    // Після видалення об'єкту з масиву нам потрібно його якось видалити зі списку
    // для цього ми очищуємо out та повторно його заповнюємо
    out.innerHTML = "";

    items.map((item, index) => {
      out.append(createTask(item, index));
    });
  }

  // Щоб це спрацювало - створюємо стрілочну функцію зі слухачем події "click"
  // і поміщаємо всередину функцію для видалення айтему зі списка
  btnDelete.addEventListener("click", () => {
    removeItem(item, index);
  });

  // Одне з найцікавіших і мабуть моє улюблене!!!)
  // 1. Створюємо флаг/змінну "click" - називати можна як хочеш
  // 2. За замовчуванням вона = 1, при кожному натисканні її значення зміннюється
  // з 1 на 2 і знову на 1 і т.д., це все створенно для умови нижче
  // тобто можно було б взяти і "true" "false" - перевіряти на бульове значення
  // Вся суть в тому, що при натисканні переназначається значення
  // змінної "click".

  let click = 1;

  function editContent() {
    if (click == 1) {
      spanName.contentEditable = "true";
      click = 2;
    } else if (click == 2) {
      spanName.contentEditable = "false";
      click = 1;
    }
  }

  // Призначаэмо цю функцію стрілочній функції із слухачем подїї "click"
  btnEdit.addEventListener("click", () => {
    editContent();
  });

  li.append(inpCheck, spanName, btnEdit, btnDelete);

  return li;
}