function meteo(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("meteo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "PHP/meteo.php?");
    xhttp.send();
    console.log("ok");
}
meteo();
