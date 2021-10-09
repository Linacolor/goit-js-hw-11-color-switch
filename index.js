const refs = {
  startBtnEl: document.querySelector('[data-action="start"]'),
  stopBtnEl: document.querySelector('[data-action="stop"]'),
  bodyEl: document.getElementById('body'),
}


const { startBtnEl, stopBtnEl, bodyEl } = refs

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
]
startBtnEl.addEventListener('click', changeColor)
stopBtnEl.addEventListener('click', stopChangeColor)
// console.log(stopBtnEl)
// console.log(bodyEl)

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

let intervalID = null
function changeColor() {
  intervalID = setInterval(() => {
    bodyEl.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)]
  }, 1000)
}

function stopChangeColor() {
  clearInterval(intervalID)
}
