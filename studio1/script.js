(function() {
    'use strict';

    const myVideo = document.querySelector('#myVideo');
    const fs = document.querySelector('.fa-expand');

    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    // const line4 = document.querySelector('#line4');
    // const line5 = document.querySelector('#line5');

    const quote = {
        start: [0,3,7],
        stop:[2,6,10],
        line: [line1, line2, line3]
    }

    const loading = document.querySelector('.fa-paw');
    myVideo.addEventListener('playing', function () {
        loading.style.display = 'none';
    });

    myVideo.addEventListener('mousemove', function(event) {
        console.log(event.clientX);
        myVideo.playbackRate = event.clientX / 200 + 0.25;
    });

    const intervalID = setInterval(checkTime, 1000);
    
    function checkTime(){
        console.log(parseInt(myVideo.currentTime));

        for(let i = 0; i < quote.start.length; i++) {
            if (quote.start[i] < myVideo.currentTime && myVideo.currentTime < quote.stop[i] ) {
                quote.line[i].className = "showing";
            } else {
                quote.line[i].className = "hidden";
            }
        }
    }

    fs.addEventListener('click', function() {
        // The fullscreenElement attribute returns null if the element is in windowed mode
        if (!document.fullscreenElement) {
            // document.documentElement returns the Element that is a direct child of the document, the <html> element
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();

        }
    });

})();