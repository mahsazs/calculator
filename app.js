const screenCal = document.getElementById('screen')
const point = document.getElementById('point')
//let signElem = document.getElementById('signElem')
let setPoint = false
let num1,num2,result
let op
let setResult = false

let numbers = document.querySelectorAll('.number')
numbers.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        if (screenCal.textContent === ''){

            screenCal.textContent = e.target.value
        } else {
           // screenCal.textContent.clear
            screenCal.textContent += e.target.value
        }
    })
})

const rstBtn = document.getElementById('reset')
rstBtn.addEventListener("click",()=> {
    screenCal.textContent=''
   // signElem.textContent = '0'
    setPoint = false
    setResult = false
})

const signBtn = document.getElementById('sign')
signBtn.addEventListener('click',(e)=>{
   screenCal.textContent = screenCal.textContent*-1

})

const percent = document.getElementById('percent')
percent.addEventListener('click',(e)=>{
    screenCal.textContent = screenCal.textContent* 0.01
})

point.addEventListener('click',(e)=>{
    if (!setPoint){
        screenCal.textContent += "."
        setPoint = true
    }
})

const divisionBtn = document.getElementById('divide')
divisionBtn.addEventListener('click',(e)=>{
        setPoint =false
        if(setResult){
            num1 = Number (screenCal.textContent)
            setResult = false
        }
        else{
            num1 = Number (screenCal.textContent)
        }
    screenCal.textContent = ''
    op = '/'

})

const multiplyBtn = document.getElementById('multiply')
multiplyBtn.addEventListener('click',(e)=>{
    setPoint =false
    if (setResult === false){
        num1 = Number (screenCal.textContent)
    } else {
        num2 = Number (screenCal.textContent)
    }
    screenCal.textContent = ''
    op = '*'

})

const minusBtn = document.getElementById('minus')
minusBtn.addEventListener('click',(e)=>{
    setPoint =false
    if (setResult){
         num1 = Number (screenCal.textContent)
         setResult = false
    } else {
       num1 = Number (screenCal.textContent)
       
    }
    screenCal.textContent = ''
    op = '-'
})

const plusBtn = document.getElementById('plus')
plusBtn.addEventListener('click',(e)=> {
    setPoint =false
    if (setResult === false){
        num1 = Number (screenCal.textContent)
    } else {
        num2 = Number (screenCal.textContent)
    }
   
    screenCal.textContent = ''
    op = '+'
})

const equal = document.getElementById('equal')
equal.addEventListener('click',(e)=>{
    setPoint =false
   if (setResult === false) {
        num2 = Number(screenCal.textContent)
    }else {
       num1 = Number(screenCal.textContent) 
    }

    switch (op){
        case "+":
            result =num1 + num2
            break
        case "-":
            result =num1 - num2
            break
        case "*":
            result =num1 * num2
            break
        case "/":
           result =num1 / num2
            break
    }
    screenCal.textContent = result
    setResult = true
})