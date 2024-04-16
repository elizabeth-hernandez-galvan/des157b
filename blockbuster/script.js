(function(){
    'use strict';

    const fs = document.querySelector('.fa-expand');
    const section = document.querySelector('#section');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');

    const intervalID = setInterval(checkTime, 1000);

    const video = document.getElementById('video');

    fs.addEventListener('click', function(){

        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });



    function checkTime() {
        if (1 < video.currentTime && video.currentTime < 4){
            line1.className = "showing";
        } else {
            line1.className = "hidden";
        }
        if (8 < video.currentTime && video.currentTime < 11) {
            line2.className = "showing";
        } else {
            line2.className = "hidden";
        }
        if (12 < video.currentTime && video.currentTime < 16) {
            line3.className = "showing";
        } else {
            line3.className = "hidden";
        }
    }    

})();