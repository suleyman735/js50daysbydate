// Map initialization 
var map = L.map('map').setView([35.9375, 14.3754], 10);

//osm layer
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);

// L.geoJson(polygon1).addTo(map)
// L.geoJson(polygon2).addTo(map)
L.geoJson(polygon3).addTo(map)
//console.log(polygon1)

// L.geoJson(polygon1, {
//     onEachFeature: function (feature,layer) {
//         var poly1 = feature.geometry
//         //console.log(poly1)

//         L.geoJson(polygon2, {
//             onEachFeature: function (feature, layer) {
//                 var poly2 = feature.geometry
//                 console.log({poly1,poly2})

//                 var intersection = turf.intersect(poly1,poly2)
//                 // var squared = turf.square(intersection);
//                 // console.log(squared)
//                 console.log({poly1,poly2, intersection})

//                 L.geoJson(intersection).addTo(map)

//             }
//         })
//     }

//     })

//     var line = turf.lineString([[83, 27], [84, 26], [84, 29], [83, 28]]);

// var length = turf.length(line, {units: 'kilometers'});
// console.log(length)


// var pointOnPolygon = turf.pointOnFeature(polygon1);
// L.marker([[83, 27], [84, 26], [84, 29], [83, 28]]).addTo(map);
// console.log(pointOnPolygon)

// var point1 = turf.point([83, 27]);
// var point2 = turf.point([84, 28]);

// var midpoint = turf.midpoint(point1, point2);
// console.log(midpoint)
// L.marker([80.49772848242571,27.500893558922275]).addTo(map)
// .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
// .openPopup();;
// console.log(midpoint)


var polygon = turf.polygon([[
    [14.3754,
        35.9375],
        [14.3704,
            35.9375],
        [14.3754,
            35.9475],
        [14.3754,
            35.9375]
    ]]);

    var point1 = turf.point([14.3754,35.9375]);
    var point2 = turf.point([14.3754,35.9475]);

var midpoint = turf.midpoint(point1, point2);
console.log(midpoint)

// var pointOnPolygon = turf.pointOnFeature(polygon);
// console.log(pointOnPolygon)



L.marker([35.9425,14.375399999999999]).addTo(map)
.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
.openPopup();

