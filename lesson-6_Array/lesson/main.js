 // Task 1
 let btnMinus = document.querySelector('.btnMinus')
 let btnPlus = document.querySelector('.btnPlus')
 let countOut = document.querySelector('.countOut')

 let count = 0

//  function Plus() {
//      countOut.innerHTML = count++
//  }

//  function Minus() {
//      countOut.innerHTML = count--
//  }

function Plus() {
  countOut.innerHTML = count++
}

function Minus() {
  if (countOut.innerHTML > 0) {
    countOut.innerHTML = count--
  } else if (countOut.innerHTML < 0) {
    countOut.innerHTML = 0
  }
}

 btnPlus.onclick = Plus

 btnMinus.onclick = Minus

 // Task 2
 
 let btn1 = document.querySelector('.btn')
 let out1 = document.querySelector('.out')
 let countOut1 = document.querySelector('.count')

 let count1 = 1

 btn1.onclick = () => {
    let inp1 = document.querySelector('.inp').value
    out1.innerHTML += `<li>${inp1}</li>`
    countOut1.innerHTML = count1++
 }


// Task 3
const items = [
    {
      name: 'Test1',
      id: 123,
    },
     {
      name: 'Test2',
      id: 223,
    },
     {
      name: 'Test3',
      id: 323,
    },
     {
      name: 'Test4',
      id: 423,
    },
    
  ]

  let btn2 = document.querySelector('.btn2')
  let out2 = document.querySelector('.out2')

  btn2.onclick = () => {
    let inp2 = document.querySelector('.inp2').value
    items.map(item => {
        if (inp2 == item.id) {
            out2.innerHTML = item.name
        }
    })
  }
  
  

