// Minimal countdown timer
let timerDisplay = document.getElementById("timer");
let progressBar = document.getElementById("progress-bar");

let totalSeconds = 50 * 60; // 50 minutes
let elapsedSeconds = 0;

function startTimer() {
    let interval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(interval);
            alert("Flight landed! Focus session complete.");
            return;
        }
        totalSeconds--;
        elapsedSeconds++;

        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;

        let percent = (elapsedSeconds / (50*60)) * 100;
        progressBar.style.width = percent + "%";
    }, 1000);
}

startTimer();
