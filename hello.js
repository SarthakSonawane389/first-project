// Get elements from DOM
const timeBox = document.getElementById("timebox");
const startBtn = document.getElementById("b1");
const stopBtn = document.getElementById("b2");

let seconds = 0;
let minutes = 0;
let timer = null;

// Function to update time
function updateTime() {
  seconds++;

  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  // Format time as MM : SS
  let sec = seconds < 10 ? "0" + seconds : seconds;
  let min = minutes < 10 ? "0" + minutes : minutes;

  timeBox.textContent = `${min} : ${sec}`;
}

// START button
startBtn.addEventListener("click", () => {
  if (timer === null) {
    timer = setInterval(updateTime, 1000);
  }
});

// STOP button
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});
