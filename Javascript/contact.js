function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

console.log(getCookie("tab"));

document.getElementById("send").onclick = tab;

var now = new Date();

var contact = []

function tab(){

console.log("blabla")

var name = document.getElementById("nom").value;
var nombre = document.getElementById("nombre").value;
var date2 = document.getElementById("date2").value;
var date2 = document.getElementById("time").value;
var msg = document.getElementById("msg").value;

contact = [name, nombre, date2, time, msg];
document.cookie = `tab=${contact}`;
}
//console.log(contact[2]);
//console.log(now);
//var date3 = new Date(contact[2]);
//var age = (now - date3)/1000/60/60/24/7/52;
//console.log(age);


//if (age > 13) {
  //document.getElementById("result").style.backgroundColor = "green";
  //document.getElementById("result").innerHTML = "Bienvenue"
//} else {
  // document.getElementById("result").style.backgroundColor = "red"
  // document.getElementById("result").innerHTML = "Pas possible"
// }
// }
//créer un cookie
