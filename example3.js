const map = L.map('map-1', {
	closePopupOnClick: false,
}).setView([51.505, -0.09], 13)

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map)

// My Notes: (Lattitude, Longitude) = (y, x)

const marker1 = L.marker([51.5, -0.09]).addTo(map)
const marker2 = L.marker([51.501, -0.095]).addTo(map)
const marker3 = L.marker([51.502, -0.092]).addTo(map)

marker1.bindPopup('I am marker1', {autoClose: false, autoPan: false}).openPopup()
marker2.bindPopup('I am marker2', {autoClose: false, autoPan: false}).openPopup()
marker3.bindPopup('I am marker3', {autoClose: false, autoPan: false}).openPopup()

const markerArray = [marker1, marker2, marker3]

/** 
 * Zoom to a list of markers `markerArray`
 * Source: - SO: How to set zoom level/view of leaflet map: [Click here](https://stackoverflow.com/questions/48450273/how-to-set-zoom-level-view-of-leaflet-map)
*/
// Way 1: With `featureGroup`
const group = new L.featureGroup(markerArray)
const bounds = group.getBounds()

// Way 2: With latLngBounds`
// const bounds = L.latLngBounds(markerArray.map(m => m.getLatLng()))
// console.log('bounds?', bounds) // { _northEast: { lat: 51.502, lng: -0.09 },_southWest: { lat: 51.5, lng: -0.095 } };

/** 
 * Zoom Technique
 */
// Way 1: instant zoom
map.fitBounds(bounds)

// Way 2: with a smooth animation
// map.flyToBounds(bounds)
