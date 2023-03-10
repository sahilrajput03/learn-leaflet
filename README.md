# Learn Leaflet

- My Leaflet Notes: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/master/learn-leaflet.md)


```js
// create rectangle
// L.rectangle(<LatLngBounds> latLngBounds, <Polyline options> options?)


// https://haneefputtur.com/javascript-to-create-rectangle-based-on-a-longitude-latitude-in-leaflet.html
function DrawCircle(lat, lng) {
	var circle = L.circle([lat, lng], {
		color: "red",
		fillColor: "#f03",
		fillOpacity: 0.0,
		radius: 6000.0
	}).addTo(map);
	group.addLayer(circle);
	var rectangle = L.rectangle(circle.getBounds(), {
		stroke: false,
		fill: true,
		color: '#00f',
		opacity: 0.1
	}).addTo(map);
	group.addLayer(rectangle);
}
```