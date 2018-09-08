//global variables
var geolocLat;
var geolocLng;
var inputLat;
var inputLng;
var zomatoKey = "a5f2331fdb252500e9812d3c14bd810f";
var count = 5;

//
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function zomatoCall(latitude, longitude) {
  var url =
    "https://developers.zomato.com/api/v2.1/search?apikey=" +
    zomatoKey +
    "&start=1&count=" +
    count +
    "&lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&radius=8000";

  $.ajax({
    url: url,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
}

//GRABBING GEOLOCATION LAT AND LNG
$("#useGeolocation").on("click", function() {
  geolocLat = $(this).attr("lat");
  geolocLng = $(this).attr("lng");
  console.log("Geolocation Lat and Long: " + geolocLat + ", " + geolocLng);
  zomatoCall(geolocLat, geolocLng);
});

//INPUT CITYs
$(document).ready(function() {
  var input = document.getElementById("inputCity");
  var options = {
    types: ["(cities)"],
    componentRestrictions: {
      country: "us"
    }
  };

  autocomplete = new google.maps.places.Autocomplete(input, options);
  google.maps.event.addListener(autocomplete, "place_changed", function() {
    var placeObj = autocomplete.getPlace();
    inputLat = placeObj.geometry.location.lat();
    inputLng = placeObj.geometry.location.lng();
    console.log("Input City Lat and Long: " + inputLat + ", " + inputLng);
    zomatoCall(inputLat, inputLng);
  });
});
