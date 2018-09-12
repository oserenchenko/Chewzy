//restaurant variables
var name = "";
var address = "";
var cuisines = "";
var userRating = "";
var phoneNum = "";
var priceLevel = "";
// var reviews;
var website = "";
var photoUrl = "";
var restaurant;

$("#favorite").on("click", function() {
  restaurant = {
    name: $(".name").text(),
    address: $(".address").text(),
    cuisines: $(".cuisines").text(),
    userRating: $(".userRating ").text(),
    phoneNum: $(".phoneNum").text(),
    priceLevel: $(".priceLevel").text(),
    website: $(".website").text(),
    photoUrl: $(".photoUrl").attr("src"),

    // UserID:
  };

  console.log(restaurant);

  $.ajax("/api/favorite", {
    type: "POST",
    data: restaurant
  }).then(function() {
    console.log("adding restaurant to favorites");
  });
});
