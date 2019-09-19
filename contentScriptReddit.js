console.log("KeyTabber running");

var aElemets;
var i = -1;

function eventFire(el, etype) {
  if (el.fireEvent) {
    el.fireEvent("on" + etype);
  } else {
    var evObj = document.createEvent("Events");
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

document.addEventListener("keydown", logKey);
function logKey(e) {
  if (e.which == 9) {
    e.preventDefault();
    aElemets = document.querySelectorAll(".SQnoC3ObvgnGjWt90zD9Z");

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

    aElemets[i].focus();
    aElemets[i].classList.add("boxshadow");
  }

  console.log(e.which);
  if (e.which == 38 || e.which == 40) {
    console.log("firing");
    //eventFire(document.querySelector(".yk4f6w-0.cCMdtd"), "click");
    console.log(document.querySelector(".yk4f6w-0.cCMdtd"));
    //.focus();
  }
}

function removeClass() {
  try {
    aElemets[i].classList.remove("boxshadow");
  } catch (e) {}
}
