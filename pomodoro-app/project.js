const sound = new Audio("pomodoro-app/finish-effect.wav");
const startBtn = document.getElementById("startBtn");
const startBtnText = document.querySelector("#startBtn .button_content");
const startBtnIcon = document.querySelector("#startBtn .button_suffix");
const resetBtn = document.getElementById("resetBtn");
const minutes = document.getElementById("min");
const seconds = document.getElementById("sec");
const circle = document.querySelector(".circle");

let isRunning = false;
let timer;
let totalTime = 25 * 60;

function startTimer() {
    if (isRunning) {
        // Pause the timer
        clearInterval(timer);
        isRunning = false;
        startBtnText.textContent = "Start";
        startBtnIcon.innerHTML = '<svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;"><path fill="#666" fill-rule="evenodd" d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6 11l5.5-3L6 5v6Z" clip-rule="evenodd" style="fill:currentColor;"></path></svg>';
        startBtn.classList.remove("state-pause");
        circle.classList.remove("state-finished");
    } else {
        // Start the timer
        isRunning = true;
        startBtnText.textContent = "Pause";
        startBtnIcon.innerHTML = '<svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;"><path fill="currentColor" fill-rule="evenodd" d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-5.5-2.5h-5v5h5v-5Z" clip-rule="evenodd"></path></svg>';
        startBtn.classList.add("state-pause");
        timer = setInterval(() => {
            if (totalTime <= 0) {
                clearInterval(timer);
                sound.play();
                circle.classList.add("state-finished");
                isRunning = false;
                startBtnText.textContent = "Start";
                startBtnIcon.innerHTML = '<svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;"><path fill="#666" fill-rule="evenodd" d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6 11l5.5-3L6 5v6Z" clip-rule="evenodd" style="fill:currentColor;"></path></svg>';
                startBtn.classList.remove("state-pause");
                totalTime = 25 * 60;
            } else {
                totalTime--;
                updateDisplay();
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    totalTime = 25 * 60;
    updateDisplay();
    startBtnText.textContent = "Start";
    startBtnIcon.innerHTML = '<svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;"><path fill="#666" fill-rule="evenodd" d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6 11l5.5-3L6 5v6Z" clip-rule="evenodd" style="fill:currentColor;"></path></svg>';
    startBtn.classList.remove("state-pause");
    circle.classList.remove("state-finished");
}

function updateDisplay() {
    const mins = Math.floor(totalTime / 60);
    const secs = totalTime % 60;
    minutes.textContent = String(mins).padStart(2, '0');
    seconds.textContent = String(secs).padStart(2, '0');
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();