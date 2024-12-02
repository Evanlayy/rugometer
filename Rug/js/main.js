console.log('Script loaded');

document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('.submit-button');
    const mercury = document.querySelector('.mercury');
    const targetValue = 75;  // Target percentage for mercury
    
    if (submitButton) {
        console.log('Submit button found');
        
        submitButton.addEventListener('click', function() {
            console.log('Button clicked');
            // Show the elements
            document.querySelector('.thermometer').classList.add('visible');
            document.querySelector('.info-boxes').classList.add('visible');
            
            // Start the mercury animation after elements are visible
            setTimeout(() => {
                mercury.style.height = `${targetValue}%`;
            }, 500);
        });
    } else {
        console.error('Submit button not found');
    }
}); 