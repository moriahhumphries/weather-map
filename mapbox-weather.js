
mapboxgl.accessToken = 'pk.eyJ1IjoibW9yaWFoaHVtcGhyaWVzIiwiYSI6ImNrOGo2c283ZDA0azgzbHBxZGVtMWdzNjcifQ.Hoq9gRxqSSGKBQ_zK17yog';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-96.839450, 32.951550],
    zoom: 11,

});

var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-96.839450, 32.951550])
    .addTo(map);

var lngLat = "";
function onDragEnd() {
    lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML =
        'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    console.log(lngLat);
}

marker.on('dragend', onDragEnd);


// function reverseGeocode(coordinates, token) {
//     var baseUrl = 'https://api.mapbox.com';
//     var endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
//         .then(function(res) {
//             return res.json();
//         })
//         // to get all the data from the request, comment out the following three lines...
//         .then(function(data) {
//             return data.features[0].place_name;
//         });
// }
// reverseGeocode({lng: -99.4861, lat: 29.4260}, mapBoxToken).then(function(results) {
//     // logs the address for The Alamo
//     console.log(results);
// });
//
// var markerOptions = {
//     color: "orange",
//
// };
//
// var restaurants = [
//     {
//         name: 'Taste of Chicago',
//         food: 'Deep dish pizza'
//     },
//     {
//         name: 'Pluckers',
//         food: 'Chicken wings'
//     },
//     {
//         name: 'Zoe\'s Kitchen',
//         food: 'Mediterranean'
//     },
// ];
//
// restaurants.forEach(function(restaurant, index) {
//     console.log('Name: ' + (restaurant.name));
//     console.log('Food: ' + restaurant.food);
//
// });
//
//
// var chiMarker = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-96.839450, 32.951550])
//     .addTo(map);
//
//
// var pluMarker = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-96.830040, 32.968610])
//     .addTo(map);
//
// var zoeMarker = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-96.802800, 32.895770])
//     .addTo(map);
//
//
//
// map.on('click', function () {
//     var favoriteRestaurant = new mapboxgl.Popup()
//         .setHTML("<h3>Taste of Chicago</h3>")
//         .addTo(map);
//
//     chiMarker.setPopup(favoriteRestaurant);
// });
//
//
// map.on('click', function () {
//     var secondRestaurant = new mapboxgl.Popup()
//         .setHTML("<h3>Pluckers</h3>")
//         .addTo(map);
//
//     pluMarker.setPopup(secondRestaurant);
// });
//
// map.on('click', function () {
//     var zoeRestaurant = new mapboxgl.Popup()
//         .setHTML("<h3>Zoe's Kitchen</h3>")
//         .addTo(map);
//
//     zoeMarker.setPopup(zoeRestaurant);
// });
//


