function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function launchRocket() {
  let rocket = document.getElementById("rocket");
  rocket.classList.add("launch");
}