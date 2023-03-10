// 11 Sand Pond Rd, Hardwick Township, NJ
const USER_LOCATION = [41.055877, -74.95479]

// 300 miles radius => 600 miles diameter => (600 miles = 965606 metres) square
// 965606 metres (600 miles)
const DISTANCE = 965606

// Zoom Levels: https://leafletjs.com/examples/zoom-levels/
const INITIAL_ZOOM = 5 // 0 means fit world in view
const map = L.map('map-1', {
	closePopupOnClick: false,
}).setView(USER_LOCATION, INITIAL_ZOOM)

window.map = map

// creating a openstreet map `tileLayer`
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 17, // maximum zoom level
	minZoom: 5, // minimum zoom level
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map)

// My Notes: (Lattitude, Longitude) = (y, x)

// 11 Sand Pond Rd, Hardwick Township, NJ
const marker1 = L.marker(USER_LOCATION).addTo(map) // considering this as central point, below are distances from this point.
const marker2 = L.marker([41.045877, -74.94479]).addTo(map) // near 1 (1150 metres, 0.71 miles)
const marker3 = L.marker([41.048899, -74.947958]).addTo(map) // near 2 (772.5 metres, 0.48 miles)
const marker4 = L.marker([41.045877, -74.99479]).addTo(map) // near 3 (4462 metres, 2.7 miles)
//
marker1.bindPopup('You', {autoClose: false, autoPan: false}).openPopup()
marker2.bindPopup('eventLoc1', {autoClose: false, autoPan: false}).openPopup()
marker3.bindPopup('eventLoc2', {autoClose: false, autoPan: false}).openPopup()
marker4.bindPopup('eventLoc3', {autoClose: false, autoPan: false}).openPopup()
//
const markerArray = [marker1, marker2, marker3, marker4]
//
// Zoom to a list of markers `markerArray` With `featureGroup`
// const group = new L.featureGroup(markerArray)
// const bounds = group.getBounds()
// map.fitBounds(bounds)

// Fit map to an area of square of side 600 miles (corresponds to zoomLevel=6)
// map.fitBounds(map.getCenter().toBounds(DISTANCE))
map.flyToBounds(map.getCenter().toBounds(DISTANCE))

// Learn Shapes (official): Full Example: https://leaflet.github.io/Leaflet.draw/docs/examples/full.html
// 1. map.getCenter() return type is `LatLng`

var popup = L.popup()

// TEMPORARY ( to show gps locations of when we click anywhere on map)
// map.on('click', (e) => {
// 	popup
// 		.setLatLng(e.latlng)
// 		.setContent('You clicked the map at ' + e.latlng.toString())
// 		.openOn(map)
// })

// map center
popup
	.setLatLng(map.getCenter())
	// .setContent('map center: ' + centerLatLng.toString())
	.setContent('map center')
	.openOn(map)

// Draw rectangle
const rectangleOptions = {
	// stroke: false, // default=true
	fill: false, // default=true
	// color: '#00f',
	// opacity: 0.5,
}

// Create rectangle and circle, and add them to map
// rectangle: https://leafletjs.com/reference.html#rectangle , Circle: https://leafletjs.com/reference.html#circle
var rectangle = L.rectangle(map.getCenter().toBounds(DISTANCE), rectangleOptions).addTo(map)
var circle = L.circle(map.getCenter(), {radius: DISTANCE / 2, color: "red",}).addTo(map)

Object.assign(window, {r: rectangle, c: circle}) // BTW: All `var` variables are accessbile directly in browser console already

// To get cener of map when the mouse is moved over the map (this updates even when the map panned (moved) via click-hold and drag way)
map.addEventListener('mousemove', function (ev) {
	// Show/Update popup with the coordinates of center
	popup.setLatLng(map.getCenter())

	// update rectangle bounds
	rectangle.setBounds(map.getCenter().toBounds(DISTANCE))

	// update circle bounds
	c.setLatLng(map.getCenter())
})
