//restaurant variables
var name = "";
var address = "";
var lat = "";
var lng = "";
var cuisines = "";
var userRating = "";
var phoneNum = "";
var photo = "";
var priceLevel = "";
var reviews;
var website = "";
var photoUrl = "";
var userEmail;
var oneResult;
var user;

//when a restaurant is selected
$(document).on("click", ".selectRestaurant", function () {
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
    .children(".userRating")
    .text();
  userEmail = $(".user").text().trim();
  lat = $(this).attr("lat");
  lng = $(this).attr("lng");

  var googleUrl =
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=AIzaSyA2pDiGU9PjqQheeVvFvAefz7qgOCipwbA&fields=name,formatted_address,place_id&input=" +
    name +
    "&inputtype=textquery&locationbias=point:" +
    lat +
    "," +
    lng;

  $.ajax({
    url: googleUrl,
    method: "GET"
  }).then(function (response) {
    // console.log(response);
    var restaurantID = response.candidates[0].place_id;

    var detailsUrl =
      "https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyA2pDiGU9PjqQheeVvFvAefz7qgOCipwbA&placeid=" +
      restaurantID;

    $.ajax({
      url: detailsUrl,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      phoneNum = response.result.formatted_phone_number;
      photo = response.result.photos[0].photo_reference;
      priceLevel = response.result.price_level;
      reviews = response.result.reviews;
      website = response.result.website;

      photoUrl =
        "https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyA2pDiGU9PjqQheeVvFvAefz7qgOCipwbA&placeid&photoreference=" +
        photo +
        "&maxheight=200";

      oneResult = {
        name: name,
        address: address,
        lat: lat,
        lng: lng,
        cuisines: cuisines,
        userRating: userRating,
        phoneNum: phoneNum,
        priceLevel: priceLevel,
        reviews: reviews,
        website: website,
        photoUrl: photoUrl

      };

      user = {
        userEmail: userEmail
      };

      console.log(oneResult);

      $.ajax("/one_result", {
        type: "POST",
        data: {
          data: oneResult,
          user: user
        }
      }).then(function () {
        console.log("adding one restaurant");
        window.location.href = "/one_result";
      });
    });
  });
});