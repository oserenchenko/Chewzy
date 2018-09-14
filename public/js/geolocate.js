//GEOLOCATION
initMap = function() {
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      window.pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      $("#useGeolocation").attr({
        lat: pos.lat,
        lng: pos.lng
      });
      $(".useGeolocation")
        .removeClass("useGeolocation")
        .addClass("big-button");
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
};

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
