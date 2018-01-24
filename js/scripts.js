function Ticket (name, age, movie, time) {
  this.firstName = name;
  this.patronAge = age;
  this.selectMovie = movie;
  this.patronTime = time;
}

// Address.prototype.fullAddress = function() {
//   return this.street + ", " + this.city + ", " + this.state;
// };

// function resetFields() {
//       $("input#name-input").val("");
//       $("input#age").val("");
//       $("input.movie").val("");
//       $("input.time").val("");
//
// }



$(document).ready(function() {


  $("form").submit(function(event) {
    event.preventDefault();
    var yourName = $("#name-input").val();
      debugger
      console.log(yourName);
    // var yourAge = $("input#age").val();
    // var yourMovie = $("input:radio[name=movie]:checked").val();
    // var yourTime = $("input:radio[name=time]:checked").val();

    // var newPatron = new Movie(yourName, yourAge, yourMovie, yourTime);

  });
});
