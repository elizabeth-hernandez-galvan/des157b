(function(){ //open IIFE
    'use strict';
    console.log('reading js');

    let globalData;
    let numDataPoints;

    const date = document.querySelector('#date');
    const time = document.querySelector('#time');
    const colorbackground = document.querySelector('body');
    const wallpaper = document.querySelector('#wallpaper');

    async function getData() {
        const timeTaken = await fetch('data.json');
        const data = await timeTaken.json();
        // console.log(data);
        const dataPoints = Object.keys(data);
        globalData = Object.values(data);
        numDataPoints = dataPoints.length;
    }

    function showTime(point, data) {
        date.innerHTML = `${data[point].day}, ${data[point].date}`;
        time.innerHTML = data[point].time_taken;
        colorbackground.style.backgroundColor = data[point].color;
        wallpaper.src = data[point].wallpaper;
    }

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