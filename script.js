(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const t1 = document.getElementById("t1");
    const t2 = document.getElementById("t2");
    const t3 = document.getElementById("t3");
    const t4 = document.getElementById("t4");
    const rain = document.querySelector('.rain');
    const sections = document.querySelectorAll('section');
    let mode = 'winter';

    button.addEventListener('click', function() {
        if (mode === 'winter') {
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            t1.style.color = "black";
            t2.style.color = "black";
            t3.style.color = "black";
            t4.style.color = "black";
            rain.classList.replace('rain' , 'sunny');
            // heading.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'summer';
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            rain.classList.replace('sunny' , 'rain');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'winter'
        }
    })
})()