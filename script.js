(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    // const heading = document.querySelectorAll('h3');
    const banner = document.querySelector('#banner');
    const rain = document.querySelector('.rain');
    const sun = document.querySelector('.sun');
    // const text = document.querySelectorAll('.text');
    const sections = document.querySelectorAll('section');
    let mode = 'winter';

    button.addEventListener('click', function() {
        if (mode === 'winter') {
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            rain.classList.replace('rain' , 'sun');
            // heading.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'summer';
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            rain.classList.replace('sun' , 'rain');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'winter'
        }
    })
})()