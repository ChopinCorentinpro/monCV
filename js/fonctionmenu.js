function presentation() {       
  var elmnt = document.getElementById("present");
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
function present() {
  var present = document.getElementById("present");
  present.scrollIntoView();
}
function exper() {
  var exper = document.getElementById("experiences");
  exper.scrollIntoView();
}
function dipl() {
  var exper = document.getElementById("diplome");
  exper.scrollIntoView();
}
function passion() {
  var exper = document.getElementById("passion");
  exper.scrollIntoView();
}
