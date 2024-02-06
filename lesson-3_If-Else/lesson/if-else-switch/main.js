let sel = document.querySelector('.select')
let btn = document.querySelector('.btn')

btn.onclick = () => {

    console.log(sel.value);

    switch ('sel.value') {
        case '0':
            console.log("Камінь");
            break;
        case '1':
            console.log("Ножиці");
            break;
        case '2':
            console.log("Бумага");
            break;
        default:
            console.log("Не обрано");
            break;
    }
}

