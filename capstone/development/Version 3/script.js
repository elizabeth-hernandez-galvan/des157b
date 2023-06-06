(function() {
    "use strict";
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    const textOutput = document.getElementById("output"); 

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
        console.log(deg);
        
        if (deg >= 5000 && deg < 5500){
            textOutput.innerHTML = "<h3 class='title'>The Civic Engagement Panel</h3><h4>What Departments did the City Hall Building also house?</h4>"; 
        }
        if (deg >= 5500 && deg < 6000){
            textOutput.innerHTML = "<h3 class='title'>The Civic Engagement Panel</h3><h4>In 1944, what structure was built with the intention of serving as the City's First High School?</h4>"; 
        }
        if (deg >= 6000 && deg < 6500){
            textOutput.innerHTML = "<h3 class='title'>Children's Panel</h3><h4>There were native Patwin children forcibly removed from our area to be Christianized. Where were they taken?</h4>"; 
        }
        if (deg >= 6500 && deg < 7000){
            textOutput.innerHTML = "<h3 class='title'>Community and Volunteerism Panel</h3><h4>Who was Hattie Weber?</h4>"; 
        }
        if (deg >= 7000 && deg < 7500){
            textOutput.innerHTML = "<h3 class='title'>Community and Volunteerism Panel</h3><h4>Who were the citizen pioneers who laid the foundation for the Davis public library?</h4>"; 
        }  
        if (deg >= 7500 && deg < 8000){
            textOutput.innerHTML = "<h3 class='title'>Community and Volunteerism Panel</h3><h4>What work did women do through the University Farm Circle that went unrecognized?</h4>"; 
        }
        if (deg >= 8000 && deg < 8500){
            textOutput.innerHTML = "<h3 class='title'>The Yolo County Panel</h3><h4>What crops can be seen represented in the seal?</h4>"; 
        }
        if (deg >= 8500 && deg < 9000){
            textOutput.innerHTML = "<h3 class='title'>The Yolo County Panel</h3><h4>Who were the original ancestors of the land we inhabit?</h4>"; 
        }
        if (deg >= 9000 && deg < 9500){
            textOutput.innerHTML = "<h3 class='title'>Humanitarian and Social Justice Panel</h3><h4>What was the goal of the Davis Free Clinic created by Dr. John H. Jones?</h4>"; 
        }
        if (deg >= 9500 && deg <= 10000){
            textOutput.innerHTML = '<h3 class="title">Business and Commerce Panel</h3><h4>Who was "Solano Bill"?</h4>'; 
        }
    });
})();