// GUIDE FOLLOWED: https://leafletjs.com/examples/quick-start/
// EXAMPLES: https://leafletjs.com/examples.html

const map = L.map('map-1').setView([51.505, -0.09], 13)

// HOME: 66 luxmi enclave
// const map = L.map('map-1').setView([30.668056, 76.844620], 13)

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map)

var marker = L.marker([51.5, -0.09]).addTo(map)

var circle = L.circle([51.508, -0.11], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 500,
}).addTo(map)

var polygon = L.polygon([
	[51.509, -0.08],
	[51.503, -0.06],
	[51.51, -0.047],
]).addTo(map)

// Binding popups: Popups are usually used when you want to attach some information to a particular object on a map.
marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup()
circle.bindPopup('I am a circle.')
polygon.bindPopup('I am a polygon.')

// You can also use popups as layers (when you need something more than attaching a popup to an object):
// Here we use `openOn()` instead of addTo because it handles automatic closing of a previously opened popup when opening a new one which is good for usability.
var popup = L.popup().setLatLng([51.513, -0.09]).setContent('I am a standalone popup.').openOn(map)

// event object (e) has latlng property which is a location at which the click occurred.
// map.on('click', (e) => alert('You clicked the map at ' + e.latlng))

// Awesome: Let’s improve our example by using a popup instead of an alert:
var popup = L.popup()
map.on('click', (e) => {
	popup
		.setLatLng(e.latlng)
		.setContent('You clicked the map at ' + e.latlng.toString())
		.openOn(map)
})
