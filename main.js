let timer;
let timeLeft = 25 * 60; // 25 minutos
let isRunning = false;

const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const partnerImg = document.getElementById("partner");

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timeDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    partnerImg.src = "assets/partner-read.png"; // Cambia a leer

    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplay();
      } else {
        pauseTimer(); // Al terminar, pausamos
      }
    }, 1000);
  }
}

function pauseTimer() {
  isRunning = false;
  clearInterval(timer);
  partnerImg.src = "assets/partner-sleep.png"; // Cambia a dormir
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);

// Inicial
updateTimerDisplay();
