let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const timeDisplay = document.getElementById('time');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

startStopButton.addEventListener('click', function() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
    startStopButton.textContent = 'Start';
  } else {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTime, 1000);
    isRunning = true;
    startStopButton.textContent = 'Stop';
  }
});

resetButton.addEventListener('click', function() {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  timeDisplay.textContent = '00:00:00';
  startStopButton.textContent = 'Start';
});

function updateTime() {
  elapsedTime = Date.now() - startTime;
  const totalSeconds = Math.floor(elapsedTime / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  timeDisplay.textContent = 
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
  return number < 10 ? '0' + number : number;
}
