var map = L.map('map', {
   	crs: L.CRS.Simple
   });
   var bounds = [[0,0], [1200,1200]];
   var image = L.imageOverlay('maps/air_age_bigger.jpg', bounds).addTo(map);
// on localhost much bigger files work
map.fitBounds(bounds);
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

nullisland.on('dragend', function (e) {
    console.log('lat'+nullisland.getLatLng().lat);
    console.log('long'+nullisland.getLatLng().lng);
});
