//your code here
$(document).ready(function() {
  // Fetch the initial user's data
  fetchUser();

  // Show additional info when a button is clicked
  $("#additionalInfo").on("click", "button", function() {
    var attr = $(this).data("attr");
    $("#info").empty();
    $("#info").append(userData[attr]);
  });

  // Fetch a new user's data when the "Get New User" button is clicked
  $("#getUser").on("click", function() {
    fetchUser();
  });
});

var userData = {};

function fetchUser() {
  $.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function(data) {
      var user = data.results[0];
      userData = {
        "name": user.name.first + " " + user.name.last,
        "photo": user.picture.large,
        "age": user.dob.age,
        "email": user.email,
        "phone": user.phone
      };

      $("#name").html(userData.name);
      $("#photo").attr("src", userData.photo);
    }
  });
}
