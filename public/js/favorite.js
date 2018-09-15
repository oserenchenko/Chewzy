var restaurant;

$("#favorite").on("click", function() {
  restaurant = {
    name: $(".name").text(),
    address: $(".address").text(),
    cuisines: $(".cuisines").text(),
    userRating: $(".userRating ").text(),
    phoneNum: $(".phoneNum").text(),
    priceLevel: $(".priceLevel").text(),
    website: $(".website").attr("href"),
    photoUrl: $(".photoUrl").attr("src"),
    email: $(".user")
      .text()
      .trim()
  };

  $.ajax("/api/favorite", {
    type: "POST",
    data: restaurant
  }).then(function() {
    alert("adding restaurant to favorites");
  });
});

$(document).on("click", "#favorites-button", function() {
  var email = $(".user")
    .text()
    .trim();
  $.ajax("/favorites", {
    type: "POST",
    data: {
      email: email
    }
  }).then(function() {
    console.log("going to user favorites page");
    window.location.href = "/favorites";
  });
});
