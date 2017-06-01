// dropdown meny
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// hamburgar meny
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").classList.add("shadow")

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").classList.remove("shadow")
}

// Random ideas
var adjektiv = ["Big", "Fast", "Small", "Slow", "Bad", "Cheap", "Good", "Narrow", "Wide", "Loud", "Quiet", "Heavy", "Light"];
var objekt = ["flowers", "house", "bread", "monitor", "site", "app", "thing"]

function randomIdea() {
  document.getElementById("stepsCount2").classList.add("hide")
  document.getElementById("stepsCount3").classList.add("show")

  document.getElementById("myStep2").classList.add("hide")
  document.getElementById("myStep3").classList.add("show")

  document.getElementById("backBTNstep2ID").classList.add("hide")
  document.getElementById("backBTNstep3ID").classList.add("show")

  var ord1 = adjektiv[Math.floor(Math.random() * adjektiv.length)];
  var ord2 = objekt[Math.floor(Math.random() * objekt.length)];

  var resultat = ord1 + " " + ord2

  var variabel = document.getElementById("randomProduct")

  var text = document.createTextNode(resultat);
  variabel.appendChild(text);
}

function showStep2() {
  document.getElementById("stepsCount2").classList.remove("hide")
  document.getElementById("stepsCount3").classList.remove("show")

  document.getElementById("myStep2").classList.remove("hide")
  document.getElementById("myStep3").classList.remove("show")

  document.getElementById("backBTNstep2ID").classList.remove("hide")
  document.getElementById("backBTNstep3ID").classList.remove("show")


  $(".removeContent").empty();
}
