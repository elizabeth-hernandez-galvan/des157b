(function(){ //open IIFE
    'use strict';
    console.log('reading js');

    let globalData;
    let numDataPoints;

    const date = document.querySelector('#date');
    const time = document.querySelector('#time');
    const wallpaper = document.querySelector('#image-url');

    async function getData() {
        const timeTaken = await fetch('data.json');
        const data = await timeTaken.json();
        // console.log(data);
        const dataPoints = Object.keys(data);
        globalData = Object.values(data);
        numDataPoints = dataPoints.length;
    }

    function showTime(point, data) {
        date.innerHTML = data[point].day;
        time.innerHTML = data[point].time;
        wallpaper.src = data[point].image;
        console.log(data[point].image)
    }

    function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        console.log(bgColor);
        document.body.style.background = bgColor;
        }
        random_bg_color();

    document.addEventListener('mousemove', reportPos);

    let prevLoc = 0;

    function reportPos(event) {
        const windowSize = window.innerWidth;
        //The window needs to be divided into sections for each time in the JSON data
        const timeSection = windowSize / numDataPoints;
        const xPos = event.clientX;
        const changeTime = Math.floor(xPos / timeSection);

        // When you move the mouse, change the interface.
        if (changeTime !== prevLoc) {
            showTime(changeTime, globalData);
            prevLoc = changeTime;
        }
    }

   

    getData();
}());