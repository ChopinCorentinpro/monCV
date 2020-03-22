function presentation() {       
  var elmnt = document.getElementById("num");
  elmnt.scrollIntoView();
  var active = document.getElementById("menu")
  active.style.visibility =('visible');
  var img = document.getElementById("imenu")
  img.style.visibility =('visible')
  var del = document.getElementsByClassName("next")
  del.style.visibility = ('hidden')
}

function alerte() {
alert("Lien indisponnible !")
}
setTimeout(function() {
  // Code…
var time = document.getElementById('msg');
time.style.visibility = ('visible');
var timea = document.getElementById('tmsg');
timea.style.visibility = ('visible');
}, 5000);
function Dem() {
  var rafraiche = document.getElementsByClassName("pmoi");
  rafraiche.scrollIntoView();
}


