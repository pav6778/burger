$(function() {
$(".addBurger").on("submit", function(event) {

    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger_menu").val().trim(),
      devoured: 0
    };


    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");

        location.reload();
      }
    );
});
$(".devour").on("click", function(){
    var id = $(this).data("id");
    var newstate = $(this).data("devoured");

    var eaten = {
      devoured: true
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eaten
    }).then(
      function() {
        console.log("changed devour to", newstate);

        location.reload();
      }
    );
})
});