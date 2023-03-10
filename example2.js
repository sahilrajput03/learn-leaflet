// For map:
// `closePopupOnClick: false` to prevent automativ popup close on map click
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

// For popups:
// `autoClose: false` to prevent close of popup when another popup is opened
// `autoPan: false` to prevent panning of map when popup is not entierly inside map

marker1.bindPopup('I am marker1', {autoClose: false, autoPan: false}).openPopup()
marker2.bindPopup('I am marker2', {autoClose: false, autoPan: false}).openPopup()
marker3.bindPopup('I am marker3', {autoClose: false, autoPan: false}).openPopup()