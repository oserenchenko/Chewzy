function addToMySql() {
  return $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "/api/users",
    data: JSON.stringify({
      email: $("#signup-email")
        .val()
        .trim()
    })
  });
}

$("#submit-signup").on("click", function(event) {
  event.preventDefault();

  addToMySql();

  var email = $('#signup-email').val();
  var password = $('#signup-password').val();

  console.log(email);
  console.log(password)
  

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://chewzy.auth0.com/dbconnections/signup",
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "cache-control": "no-cache",
      "postman-token": "dc399309-9780-237b-65cc-56545f11df8d"
    },
    "processData": false,
    // "data": "{\n   \"email\":\"bb1s@bb.com\",\n   \"password\":\"12pp@gggg\",\n   \"connection\": \"Username-Password-Authentication\"\n   \n    }"
    // "data": "{\"email\": \"hello22@h.com\",\"password\": \"$bb1@U__q\",\"connection\": \"Username-Password-Authentication\"\n   \n    }"

    // "data": "{\n   \"email\":\"$('#signup-email').val()\",\n   \"password\":\"$('#signup-password').val()\",\n   \"connection\": \"Username-Password-Authentication\"\n   \n    }"
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
});
