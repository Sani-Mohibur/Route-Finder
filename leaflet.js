// Code from leafletjs.com
var map = L.map("map").setView([23.8041, 90.4152], 13); // Coordinates of Dhaka 23.8041° N, 90.4152° E

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([23.8041, 90.4152])
  .addTo(map)
  .bindPopup("Dhaka Bus Terminal")
  .openPopup();
