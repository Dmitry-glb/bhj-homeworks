const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
        if (this.classList.contains('hole_has-mole')) {
            dead.textContent = parseInt(dead.textContent) + 1;
            if (parseInt(dead.textContent) === 10) {
                alert('Победа! Вы убили 10 кротов!');
                dead.textContent = 0;
                lost.textContent = 0;
            }
        } else {
            lost.textContent = parseInt(lost.textContent) + 1;
            if (parseInt(lost.textContent) === 5) {
                alert('Поражение! Слишком много промахов!');
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
    };
}