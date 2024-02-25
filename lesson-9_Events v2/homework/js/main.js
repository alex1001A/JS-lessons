let inp = document.querySelector('.inp')
let sel = document.querySelector('.select')
let btn = document.querySelector('.btn')
let out = document.querySelector('.out')
let count = document.querySelector('.count')

let items = []

btn.addEventListener('click', () => {

    const newItem = {
        name: inp.value,
        priority: sel.value,
    };

    items.push(newItem);

    out.innerHTML = ''

    items.map((item, index) => {
        out.append(createTask(item, index))
    })

    console.log(items);

    inp.value = ''

    count.innerHTML = +count.innerHTML + 1
})


function createTask(item, index) {

    let li = document.createElement('li')
    li.classList.add('li')

    let inpCheck = document.createElement('input')
    inpCheck.type = 'checkbox'

    let spanName = document.createElement('span')
    spanName.classList.add('span')
    spanName.innerHTML = `${item.name}`
    spanName.setAttribute('contenteditable', 'false')

    if (item.priority == 'low') {
        spanName.classList.add('low')
    } else if (item.priority == 'middle') {
        spanName.classList.add('middle')
    } else if (item.priority == 'high') {
        spanName.classList.add('high')
    }

    let editBtn = document.createElement('button')
    editBtn.classList.add('btn-edit')
    editBtn.innerHTML = '✏️'

    let btnDelete = document.createElement('button')
    btnDelete.classList.add('btn-remove')
    btnDelete.innerHTML = '❌'

    inpCheck.addEventListener('change', () => {
            if (inpCheck.checked) {
                spanName.style.textDecoration = 'line-through'
            } else {
                spanName.style.textDecoration = ''
            }
    })

    function removeTask(item, index) {
        if (inpCheck.checked == false && items.splice(index, 1)) {
            count.innerHTML = +count.innerHTML - 1
        } else if (inpCheck.checked == true && items.splice(index, 1)) {
            count.innerHTML = count.innerHTML
        }
        // Удаляем элемент из массива по индексу
        // items.splice(index, 1);
        // Перерисовываем список задач
        out.innerHTML = '';
        items.map((item, index) => {
            out.append(createTask(item, index));
        });
        // есть бага, если задача Чекнута, и мы ее удаляем, то слетают все 
        // чекбоксы, которые так же были отмечены
    }
    
    btnDelete.addEventListener('click', () => {
        removeTask(item, index)
    })
    
    let click = 1
    
    function editTask() {
        

        if (click == 1) {
            spanName.contentEditable = 'true'
            click = 2
        } else if(click == 2) {
            spanName.contentEditable = 'false'
            click = 1
        }
    }
    
    editBtn.addEventListener('click', () => {
        editTask()
    })
    
    inpCheck.addEventListener('change', () => {
        if (inpCheck.checked) {
            count.innerHTML = +count.innerHTML - 1
        } else {
            count.innerHTML = +count.innerHTML + 1
        }
    })

    li.append(inpCheck, spanName, editBtn, btnDelete)

    return li
}





// out.innerHTML = ` <li><input type="checkbox"><span class="${testJbj.peotity}">Test</span> <button>Х</button></li>`
