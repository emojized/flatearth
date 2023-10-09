// map


let bounds = [[0,0], [1200,1200]];
let image1 = L.imageOverlay('maps/air_age_bigger.jpg', bounds);

let image2 = L.imageOverlay('maps/flat_earth_xxl.jpg', bounds);

let map1Group = L.layerGroup([image1]);
let map2Group = L.layerGroup([image2]);

let map = L.map('map', {
     crs: L.CRS.Simple,
     layers: [map1Group, map2Group],
     drawControl: true
    })
// on localhost much bigger files work
map.fitBounds(bounds);

var baseMaps = {
      "Air Age Map": map1Group,
      "flat earth xxl": map2Group,
    };
 L.control.layers(baseMaps).addTo(map);
 
 var drawnItems = new L.FeatureGroup();
 map.addLayer(drawnItems);
 var drawControl = new L.Control.Draw({
     edit: {
         featureGroup: drawnItems
     }
 });
 map.addControl(drawControl);