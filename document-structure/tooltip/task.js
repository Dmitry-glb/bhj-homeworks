const tooltips = document.querySelectorAll('.has-tooltip');

tooltips.forEach(tooltip => {
    tooltip.addEventListener('click', (event) => {
        event.preventDefault();
        
        const activeTooltip = document.querySelector('.tooltip_active');
        if (activeTooltip) {
            activeTooltip.remove();
        }
        
        const existingTooltip = document.querySelector('.tooltip');
        if (existingTooltip && existingTooltip.textContent === tooltip.title) {
            return;
        }
        
        const newTooltip = document.createElement('div');
        newTooltip.classList.add('tooltip', 'tooltip_active');
        newTooltip.textContent = tooltip.title;
        
        const { left, bottom } = tooltip.getBoundingClientRect();
        newTooltip.style.left = `${left + window.scrollX}px`;
        newTooltip.style.top = `${bottom + window.scrollY}px`;
        
        document.body.appendChild(newTooltip);
    });
});