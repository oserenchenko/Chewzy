//restaurant variables
var name = "";
var address = "";
var lat = "";
var lng = "";
var cuisines = "";
var userRating = "";
var phoneNum = "";
var priceLevel = "";
var priceDollar;
var reviews;
var website = "";
var photoUrl = "";
var userEmail;
var oneResult;
var user;

function priceSign(priceNum) {
  if (priceNum === 1) {
    priceDollar = "$";
  } else if (priceNum === 2) {
    priceDollar = "$$";
  } else if (priceNum === 3) {
    priceDollar = "$$$";
  } else if (priceNum === 4) {
    priceDollar = "$$$$";
  } else {
    priceDollar = "";
  }
}

var map;
var service;
var infowindow;

function initMap() {
  var mapCenter = new google.maps.LatLng(-33.8617374, 151.2021291);

  map = new google.maps.Map(document.getElementById("map"), {
    center: mapCenter,
    zoom: 15
  });

  var request = {
    query: name,
    locationBias: {
      lat: lat,
      lng: lng
    },
    fields: ["place_id"]
  };

  service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      var placeId = place.place_id;
      var request = {
        placeId: placeId
      };

      service = new google.maps.places.PlacesService(map);
      service.getDetails(request, callback);

      function callback(place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          phoneNum = place.formatted_phone_number;
          photoUrl = place.photos[0].getUrl;
          priceLevel = place.price_level;
          priceSign(priceLevel);
          reviews = place.reviews;
          website = place.website;

          oneResult = {
            name: name,
            address: address,
            lat: lat,
            lng: lng,
            cuisines: cuisines,
            userRating: userRating,
            phoneNum: phoneNum,
            priceLevel: priceDollar,
            reviews: reviews,
            website: website,
            photoUrl: photoUrl
          };

          user = {
            userEmail: userEmail
          };

          $.ajax("/one_result", {
            type: "POST",
            data: {
              data: oneResult,
              user: user
            }
          }).then(function() {
            console.log("adding one restaurant");
            window.location.href = "/one_result";
          });
        }
      }
    }
  }
}

//when a restaurant is selected
$(document).on("click", ".selectRestaurant", function() {
  name = $(this)
    .children(".name")
    .text();
  address = $(this)
    .children(".address")
    .text();
  cuisines = $(this)
    .children(".cuisines")
    .text();
  userRating = $(this)
    .children(".rating-wrap")
    .attr("rating");
  userEmail = $(".user")
    .text()
    .trim();
  lat = parseFloat($(this).attr("lat"));
  lng = parseFloat($(this).attr("lng"));

  initMap();
});
