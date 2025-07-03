const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
let isSmall = false;

cookie.onclick = function() {
    counter.textContent = parseInt(counter.textContent) + 1;
    if (isSmall) {
        cookie.width = 200;
    } else {
        cookie.width = 180;
    }
    isSmall = !isSmall;
};