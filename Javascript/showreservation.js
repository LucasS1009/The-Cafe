document.getElementById("send").onclick = reservation
function reservation() {
  var name = document.getElementById("nom").value;
  var nombre = document.getElementById("nombre").value;
  var date2 = document.getElementById("date2").value;
  var time = document.getElementById("time").value;
  var msg = document.getElementById("msg").value;

  var contact = [name, nombre, date2, time, msg];

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  console.log("ok");
}
xhttp.open("GET", "PHP/reservation.php?q="+contact);
xhttp.send();
}
