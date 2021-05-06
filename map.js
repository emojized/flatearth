// map

var map = L.map('map', {
   	crs: L.CRS.Simple
   });
   var bounds = [[0,0], [1200,1200]];
   var image = L.imageOverlay('maps/air_age_bigger.jpg', bounds).addTo(map);
// on localhost much bigger files work
map.fitBounds(bounds);


