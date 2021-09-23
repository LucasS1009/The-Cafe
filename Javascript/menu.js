document.getElementById("eat3").onclick = menu
function menu(){
  console.log("Bonjour");
  document.getElementById("eat3").style.backgroundColor = "green";
  document.getElementById("eat3").style.color = "white";
  document.getElementById("drink3").style.backgroundColor = "white";
  document.getElementById("drink3").style.color = "black";
}

document.getElementById("drink3").onclick = menu2
function menu2(){
  console.log("Bonjour");
  document.getElementById("drink3").style.backgroundColor = "green";
  document.getElementById("drink3").style.color = "white";
  document.getElementById("eat3").style.backgroundColor = "white";
  document.getElementById("eat3").style.color = "black";
}


var timer = 10

if (timer < 0) {

  setInterval(myTimer,1000);

}

function myTimer() {
  (timer--)
  document.getElementById("time").innerHTML = timer;
  console.log(timer);
  if (timer === 0) {
    alert("trop tard");
    document.getElementById("time").style.display = "none";
  }

}
