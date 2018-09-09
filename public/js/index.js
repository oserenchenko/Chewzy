//global variables
var userLat = 0;
var userLng = 0;
var zomatoKey = "a5f2331fdb252500e9812d3c14bd810f";
var count = 5;
var start = 0;
var category = "";
var cuisines = "";
var numCall = 0;
var restaurantsArr = [];

//randdom number function
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//loop through restaurant api results and push to restaurants array
function restaurantPush(responseArr) {
  for (var i = 0; i < responseArr.length; i++) {
    restaurantsArr.push(responseArr[i].restaurant);
  }
  console.log(restaurantsArr);
  var restaurant = restaurantsArr[0];
  var newRestaurant = {
    id: restaurant.id,
    name: restaurant.name,
    cuisines: restaurant.cuisines,
    address: restaurant.location.address,
    lat: restaurant.location.latitude,
    lng: restaurant.location.longitude,
    userRating: restaurant.user_rating.aggregate_rating
  };

  console.log(newRestaurant);

  $.ajax("/api/search_results", {
    type: "POST",
    data: newRestaurant
  }).then(function() {
    console.log("adding new restaurant");
    location.reload();
  });
}

//zomato api call function
function zomatoCall(latitude, longitude, start) {
  var url =
    "https://developers.zomato.com/api/v2.1/search?apikey=" +
    zomatoKey +
    "&start=" +
    start +
    "&count=" +
    count +
    "&lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&radius=8000" +
    "&category=" +
    category +
    "&cuisines=" +
    cuisines;

  $.ajax({
    url: url,
    method: "GET"
  }).then(function(response) {
    // console.log(response);
    if (numCall === 0) {
      var numResults = response.results_found - 5;
      var randomStart = getRandomInt(0, 90);
      if (randomStart <= numResults) {
        zomatoCall(userLat, userLng, randomStart);
        restaurantPush(response.restaurants);
        numCall += 1;
      } else {
        randomStart = getRandomInt(0, numResults);
        zomatoCall(userLat, userLng, randomStart);
        restaurantPush(response.restaurants);
        numCall += 1;
      }
    }
  });
}

//GRABBING GEOLOCATION LAT AND LNG
$("#useGeolocation").on("click", function() {
  userLat = $(this).attr("lat");
  userLng = $(this).attr("lng");
});

//GRABBING INPUT CITY LAND AND LNG
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
    userLat = placeObj.geometry.location.lat();
    userLng = placeObj.geometry.location.lng();
  });
});

//ON SURVEY SUBMIT CLICK
$("#submit").on("click", function() {
  event.preventDefault();
  if (userLat > 0 && userLng < 0) {
    zomatoCall(userLat, userLng, start);
    numCall = 0;
    start = 0;
  } else {
    alert("Please select a location.");
  }
});
