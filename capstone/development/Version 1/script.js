(function() {
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    const wheel = document.querySelector('.wheel');
    const startBtn = document.querySelector('.btn');
    let deg = 0;

    startBtn.addEventListener('click', () => {
        startBtn.style.pointerEvents = 'none';
        deg = Math.floor(5000 + Math.random() * 5000); // Calculate new rotation between 5000 and 10,000
        wheel.style.transition = 'all 10s ease-out';
        wheel.style.transform = `rotate(${deg}deg)`; // Rotate wheel
        wheel.classList.add('blur'); //Blur Wheel
    });

    wheel.addEventListener('transitionend', () => {
        wheel.classList.remove('blur'); // Remove blur
        startBtn.style.pointerEvents = 'auto';
        wheel.style.transition = 'none'; //Instant Rotation
        const actualDeg = deg % 360; //Rotate in Circles
        wheel.style.transform = `rotate(${actualDeg}deg)`; //No animation
    });
})();