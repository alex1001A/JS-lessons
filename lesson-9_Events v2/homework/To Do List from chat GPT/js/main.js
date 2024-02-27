const inp = document.querySelector('.inp');
const sel = document.querySelector('.select');
const btn = document.querySelector('.btn');
const out = document.querySelector('.out');
const count = document.querySelector('.count');

let items = [];

function обновитьСчетчик() {
    // Подсчет и обновление отображения количества невыполненных задач
    count.innerHTML = items.filter(item => !item.checked).length;
}

function создатьЗадачу(item, index) {
    // Создание нового элемента списка задач
    const li = document.createElement('li');
    li.classList.add('li');

    // Создание чекбокса для задачи
    const inpCheck = document.createElement('input');
    inpCheck.type = 'checkbox';

    // Создание элемента span для названия задачи
    const spanName = document.createElement('span');
    spanName.classList.add('span', item.priority);
    spanName.innerHTML = item.name;
    spanName.contentEditable = 'false';

    // Создание кнопок редактирования и удаления задачи
    const editBtn = document.createElement('button');
    editBtn.classList.add('btn-edit');
    editBtn.innerHTML = '✏️';

    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btn-remove');
    btnDelete.innerHTML = '❌';

    inpCheck.addEventListener('change', () => {
        // Обработка изменения состояния чекбокса
        spanName.style.textDecoration = inpCheck.checked ? 'line-through' : '';
        обновитьСчетчик();
    });

    function удалитьЗадачу() {
        // Удаление задачи из массива и из отображения
        items.splice(index, 1);
        out.removeChild(li);
        обновитьСчетчик();
    }

    btnDelete.addEventListener('click', удалитьЗадачу);

    let click = 1;

    function редактироватьЗадачу() {
        // Переключение режима редактирования задачи
        spanName.contentEditable = click === 1 ? 'true' : 'false';
        click = 3 - click;
    }

    editBtn.addEventListener('click', редактироватьЗадачу);

    // Добавление элементов в li и возврат li
    li.append(inpCheck, spanName, editBtn, btnDelete);
    return li;
}

btn.addEventListener('click', () => {
    // Добавление новой задачи при клике на кнопку
    const новаяЗадача = {
        name: inp.value,
        priority: sel.value,
        checked: false,
    };

    items.push(новаяЗадача);
    // Добавление новой задачи в отображение
    out.appendChild(создатьЗадачу(новаяЗадача, items.length - 1));
    inp.value = '';
    обновитьСчетчик();
});

let params = [1, 2, 3]
function Vlad(params) {
  console.log(params);
}

Vlad(params)