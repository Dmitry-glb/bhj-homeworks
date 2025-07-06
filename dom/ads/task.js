const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;

    function rotate() {
        cases[currentIndex].classList.remove('rotator__case_active');
        
        currentIndex = (currentIndex + 1) % cases.length;
        
        const nextCase = cases[currentIndex];
        nextCase.classList.add('rotator__case_active');
        
        const speed = parseInt(nextCase.dataset.speed) || 1000;
        const color = nextCase.dataset.color || 'black';
        nextCase.style.color = color;
        
        setTimeout(rotate, speed);
    }
    
    rotate();
});