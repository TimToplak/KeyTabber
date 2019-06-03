console.log("KeyTabber running");

function eventFire(el, etype) {
  if (el.fireEvent) {
    el.fireEvent("on" + etype);
  } else {
    var evObj = document.createEvent("Events");
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}
var ytd_browse;
//loading direct to watch?v=... don't have ytd-browse
if (document.getElementById("show-more-button")) {
  eventFire(document.getElementById("show-more-button"), "click");
}

var aElemets;
var i = -1;

document.addEventListener("yt-navigate-finish", function(event) {
  if (document.getElementById("show-more-button")) {
    eventFire(document.getElementById("show-more-button"), "click");
  }
  removeClass();
  i = -1;
});

function parseLocation() {}

document.addEventListener("keydown", logKey);
function logKey(e) {
  if (e.which == 9) {
    e.preventDefault();

    var part;
    if (document.querySelector("ytd-browse[role='main']")) {
      part = document.querySelector("ytd-browse[role='main']");
    } else {
      part = document.querySelector("ytd-watch-flexy");
    }

    aElemets = part.querySelectorAll("[id='video-title']");
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

    if (aElemets[i].nodeName == "A") {
      aElemets[i].focus();
      aElemets[i].classList.add("boxshadow");
    } else {
      aElemets[i].closest("a").focus();
      aElemets[i].closest("a").classList.add("boxshadow");
    }
  }
}

function removeClass() {
  try {
    if (aElemets[i].nodeName == "A") {
      aElemets[i].classList.remove("boxshadow");
    } else {
      aElemets[i].closest("a").classList.remove("boxshadow");
    }
  } catch (e) {}
}
