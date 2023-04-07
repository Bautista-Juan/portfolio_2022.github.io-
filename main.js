function myFunction() {
    var x = document.querySelector("#myLinks");
   if (x.style.display === "block") {
    x.style.display = "none";
   } else {
    x.style.display = "block";
   }
}

var css = document.querySelector(".linear");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);