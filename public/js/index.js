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
var group1Cuisines =
  "6, 152, 151, 175, 201, 132, 159, 22, 111, 121, 158, 202, 229, 287, 928, 153, 203, 958, 651, 316, 149, 112, 45, 205, 134, 228, 114, 140, 135, 218, 207, 178, 67, 901, 136, 66, 69, 70, 137, 74, 147, 75, 117, 961, 962, 139, 162, 219, 87, 361, 84, 601, 691, 210, 119, 611, 267, 89, 86, 211, 190, 93, 761, 142, 451, 264, 641, 99, 965";
var group2Cuisines =
  "1, 2, 131, 193, 955, 168, 381, 25, 192, 411, 541, 298, 274, 156, 181, 521, 148, 55, 60, 73, 996, 995, 82, 970, 320, 304, 83, 461, 471, 141, 177, 997, 179, 964, 150, 95";
var group3Cuisines = "1, 193, 5, 491, 55, 461, 471, 318";
var group4Cuisines = "143, 998, 308";
var group5Cuisines = "5, 247, 161, 881, 100, 959, 501, 164, 163";

//randdom number function
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function for grabbing survey answers
function pickingCuisines() {
  var surveyAnsArr = [];
  var largestNumber = 0;
  for (i = 1; i < 6; i++) {
    surveyAnsArr.push($("." + i).val());
  }
  for (var arrayIndex = 0; arrayIndex < surveyAnsArr.length; arrayIndex++) {
    if (surveyAnsArr[arrayIndex] > largestNumber) {
      largestNumber = surveyAnsArr[arrayIndex];
    }
  }

  var groupLargestVal = surveyAnsArr.indexOf(largestNumber) + 1;
 
  if (groupLargestVal === 1) {
    cuisines = group1Cuisines;
  } else if (groupLargestVal === 2) {
    cuisines = group2Cuisines;
  } else if (groupLargestVal === 3) {
    cuisines = group3Cuisines;
  } else if (groupLargestVal === 4) {
    cuisines = group4Cuisines;
  } else if (groupLargestVal === 5) {
    cuisines = group5Cuisines;
  } else {
    cuisines = "";
  }
}

//loop through restaurant api results and push to restaurants array

function restaurantPush(responseArr) {

  const restArr = [];


  for (var i = 0; i < responseArr.length; i++) {
    var restaurant = responseArr[i].restaurant;
    var newRestaurant = {
      id: restaurant.id,
      name: restaurant.name,
      cuisines: restaurant.cuisines,
      address: restaurant.location.address,
      lat: restaurant.location.latitude,
      lng: restaurant.location.longitude,
      userRating: restaurant.user_rating.aggregate_rating,
    };
    restArr.push(newRestaurant);
  }

  console.log(restArr);

  var user = {
    userEmail: $("#submit").attr("email")
  }
  restArr[0].userEmail;

  $.ajax("/search_results", {
    type: "POST",
    data: {
      data: restArr,
      user: user
    }
  }).then(function () {
    console.log("adding new restaurant");
    window.location.href = "/search_results";
  });

}

//zomato api call function
function zomatoCall(latitude, longitude, start) {
  console.log("category", category);
  console.log("cuisines", cuisines);
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
  }).then(function (response) {
    if (numCall === 0) {
      var numResults = response.results_found - 5;
      var randomStart = getRandomInt(0, 90);
      if (randomStart <= numResults) {
        zomatoCall(userLat, userLng, randomStart);
        numCall += 1;
      } else {
        randomStart = getRandomInt(0, numResults);
        zomatoCall(userLat, userLng, randomStart);
        numCall += 1;
      }
    } else if (numCall === 1) {
      var responseArr = response.restaurants;
      console.log(responseArr);
      restaurantPush(responseArr);
    }
  });
}

//GRABBING GEOLOCATION LAT AND LNG
$("#useGeolocation").on("click", function () {
  userLat = $(this).attr("lat");
  userLng = $(this).attr("lng");
});

//GRABBING INPUT CITY LAND AND LNG
$(document).ready(function () {
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
    userLat = placeObj.geometry.location.lat();
    userLng = placeObj.geometry.location.lng();
  });
});

//ON SURVEY SUBMIT CLICK
$("#submit").on("click", function () {
  event.preventDefault();
  pickingCuisines();
  if (userLat > 0 && userLng < 0) {
    if ($("#category-select").val() === "0") {
      category = "";
      console.log(category);
      zomatoCall(userLat, userLng, start);
      numCall = 0;
      start = 0;
    } else {
      category = $("#category-select").val();
      console.log(category);
      zomatoCall(userLat, userLng, start);
      numCall = 0;
      start = 0;
    }
  } else {
    alert("Please select a location.");
  }
});