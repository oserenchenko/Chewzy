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

  var settings = {
    async: true,
    crossDomain: true,
    url: "https://chewzy.auth0.com/dbconnections/signup",
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    processData: false,
    data:
      '{"client_id": "JxnFm16AZBUIct7gspk5rJMJwtUqbi6Y","email": "$(\'#signup-email\').val()","password": "$(\'#signup-password\').val()","connection": "Username-Password-Authentication","user_metadata": {"name": "john","color": "red"}}'
  };

  $.ajax(settings).done(function(response) {
    console.log(response);
  });
});
