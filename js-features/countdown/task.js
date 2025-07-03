const timerElement = document.getElementById('timer');
let timeLeft = parseInt(timerElement.textContent);

function updateTimer() {
    timerElement.textContent = timeLeft;
    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateTimer, 1000);
    } else {
        alert('Вы победили в конкурсе!');
    }
}

updateTimer();