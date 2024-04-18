(function(){
    'use strict';

    const fs = document.querySelector('.fa-expand');
    const mute = document.querySelector('#mute');
    
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');

    const intervalID = setInterval(checkTime, 1000);

    const video = document.getElementById('video');
    const videov = document.getElementById('video-vertical');

    fs.addEventListener('click', function(){

        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    // Background Music
    mute.addEventListener('click', musicPlay);
    function musicPlay() {
        videov.play();
        document.removeEventListener('click', musicPlay);
    }


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
        // vertical video
        if (1 < videov.currentTime && videov.currentTime < 4){
            line1.className = "showing";
        } else {
            line1.className = "hidden";
        }
        if (8 < videov.currentTime && videov.currentTime < 11) {
            line2.className = "showing";
        } else {
            line2.className = "hidden";
        }
        if (12 < videov.currentTime && videov.currentTime < 16) {
            line3.className = "showing";
        } else {
            line3.className = "hidden";
        }
    }    

})();