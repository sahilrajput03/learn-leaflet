const map = L.map('map-1', {
	closePopupOnClick: false,
}).setView([51.505, -0.09], 13)

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map)

// My Notes: (Lattitude, Longitude) = (y, x)

// 11 Sand Pond Rd, Hardwick Township, NJ
const marker1 = L.marker([41.055877, -74.95479]).addTo(map) // considering this as central point, below are distances from this point.
const marker2 = L.marker([41.045877, -74.94479]).addTo(map) // near 1 (1150 metres, 0.71 miles)
const marker3 = L.marker([41.048899, -74.947958]).addTo(map) // near 2 (772.5 metres, 0.48 miles)
const marker4 = L.marker([41.045877, -74.99479]).addTo(map) // near 3 (4462 metres, 2.7 miles)

marker1.bindPopup('I am marker1 (11 Sand Pond Rd, Hardwick Township, NJ)', {autoClose: false, autoPan: false}).openPopup()
marker2.bindPopup('I am marker2', {autoClose: false, autoPan: false}).openPopup()
marker3.bindPopup('I am marker3', {autoClose: false, autoPan: false}).openPopup()
marker4.bindPopup('I am marker4', {autoClose: false, autoPan: false}).openPopup()

const markerArray = [marker1, marker2, marker3, marker4]

// Zoom to a list of markers `markerArray` With `featureGroup`
const group = new L.featureGroup(markerArray)
const bounds = group.getBounds()
map.fitBounds(bounds)

// TEMPORARY ( to show gps locations of when we click anywhere on map)
var popup = L.popup()
map.on('click', (e) => {
	popup
		.setLatLng(e.latlng)
		.setContent('You clicked the map at ' + e.latlng.toString())
		.openOn(map)
})
