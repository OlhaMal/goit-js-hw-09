function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEL = document.querySelector('body')
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
stopBtn.disabled = true;
let timerId = null;

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    stopBtn.disabled = false

    timerId = setInterval(() => {
        bodyEL.style.backgroundColor = getRandomHexColor()
    }, 700)
})

stopBtn.addEventListener('click', () => {
    stopBtn.disabled= true;
    startBtn.disabled = false;
    clearInterval(timerId);
})