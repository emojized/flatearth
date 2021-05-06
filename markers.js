

var marker = L.marker(new L.LatLng(592, 748), {
draggable: false
}).addTo(map);

marker.bindPopup("<b>Zürich</b>").openPopup();

var nyc = L.marker(new L.LatLng(423.875, 603), {
draggable: false
}).addTo(map);
nyc.bindPopup("<b>New York</b>").openPopup();

var nullisland = L.marker(new L.LatLng(503.1796875, 964.125), {
draggable: false
}).addTo(map);
nullisland.bindPopup("<b>Null Island</b>").openPopup();

var real_middle = L.marker(new L.LatLng(600, 600), {
draggable: false
}).addTo(map);
real_middle.bindPopup("<b>Real Middle</b>").openPopup();

var tester = L.marker(new L.LatLng(25, 1000), {
draggable: true
}).addTo(map);tester.bindPopup("<b>Location Tester</b>").openPopup();

tester.on('dragend', function (e) {
    console.log('lat'+tester.getLatLng().lat);
    console.log('long'+tester.getLatLng().lng);
});
