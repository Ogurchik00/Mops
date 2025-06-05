const buttonToch = document.querySelector('.touch-me')
const countDis = document.querySelector('.stata-num')
let count = 0
const imgFon = document.querySelector('.fon')
let rightValue = 0

buttonToch.addEventListener('click', () => {
    count += 1
    countDis.textContent = count
    rightValue += 5
    imgFon.style.right = `${rightValue}px`;
})