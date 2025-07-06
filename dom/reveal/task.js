const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    reveals.forEach(reveal => {
        const { top, bottom } = reveal.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (top < windowHeight && bottom > 0) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
});