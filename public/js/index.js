//global variables
var geolocLat;
var geolocLng;
var inputLat;
var inputLng;

//GRABBING GEOLOCATION LAT AND LNG
$("#useGeolocation").on("click", function() {
  geolocLat = $(this).attr("lat");
  geolocLng = $(this).attr("lng");
  console.log("Geolocation Lat and Long: " + geolocLat + ", " + geolocLng);
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
  google.maps.event.addListener(autocomplete, "place_changed", function () {
    var placeObj = autocomplete.getPlace();
    inputLat = placeObj.geometry.location.lat();
    inputLng = placeObj.geometry.location.lng();
    console.log("Input City Lat and Long: " + inputLat + ", " + inputLng);
  });
});
