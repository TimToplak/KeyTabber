console.log("KeyTabber running");

var aElemets;
var i = -1;

document.addEventListener("keydown", logKey);
function logKey(e) {
  if (e.which == 9) {
    e.preventDefault();
    aElemets = document.querySelectorAll("[class='LC20lb']");

    removeClass();
    if (e.shiftKey) {
      i--;
      if (i < 0) {
        i = 0;
      }
    } else {
      i++;
      if (i > aElemets.length - 1) {
        i = aElemets.length - 1;
      }
    }

    aElemets[i].closest("a").focus();
    aElemets[i].closest("a").classList.add("boxshadow");
  }
}

function removeClass() {
  try {
    aElemets[i].closest("a").classList.remove("boxshadow");
  } catch (e) {}
}
