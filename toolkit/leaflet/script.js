(function(){
    'use strict';

    // add your script here
    const map = L.map('map').setView([38.736025,-121.668464], 10.5);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const marker = L.marker([38.560356, -121.746594]).addTo(map);
    const circle = L.circle([38.853060, -121.627410], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 1500
    }).addTo(map);

    const polygon = L.polygon([
        [38.546181,-121.728983],
        [38.546685,-121.729080],
        [38.546827,-121.730422],
        [38.545972,-121.730465]
    ]).addTo(map);

    marker.bindPopup("<b>Hello world!</b><br>This is where I first met my dog Jiji <3").openPopup();
    circle.bindPopup("<b>Hello world!</b><br>This is where I met my first dog Luna  <3").openPopup();
    polygon.bindPopup("<b>Hello world!</b><br>This is my favorite dog park <3").openPopup();

    const popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);


    
}());