//Your code goes here
var animateHTML = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll(".text-content");
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          "text-content",
          "text-content animated delay-2s slideInRight"
        );
        // elems[i].classList.add("animated, delay-2s, bounceIn");
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();

//ondrag,ondragover,ondragstart,drop
const textDiv = document.getElementById("text-node");
textDiv.addEventListener("drop", drop);
textDiv.addEventListener("dragover", allowDrop);

const draggable = document.getElementById("dragtarget");
draggable.addEventListener("dragstart", dragStart);
draggable.addEventListener("drag", dragging);

function dragStart(event) {
  console.log("started drag");
  event.dataTransfer.setData("Text", event.target.id);
  document.getElementById("targetImg").style.visibility = "hidden";

  document.querySelector(".droptarget").style.border = "3px dashed #ccc";
}

function dragging(event) {
  console.log("dragging...");
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  document.getElementById("targetImg").style.visibility = "visible";
  document.querySelector(".droptarget").style.border = "none";
}

function handleSelect(event) {
  alert("selected");
}

function init() {
  console.log("window loaded");
}

const texts = document.querySelectorAll(".text-content");

console.log(texts);

texts.forEach(el => {
  el.addEventListener("select", handleSelect);
});

//onload
window.addEventListener("load", init);

//dblclick
document.getElementById("targetImg").addEventListener("dblclick", function() {
  console.log("clicked");
});

function handleNetworkState(event) {
  // console.log(event);
  // console.log("this is changing my network");
  alert(`you are ${event.type}`);
}

window.addEventListener("offline", handleNetworkState);
window.addEventListener("online", handleNetworkState);
//stopping propagation

const btn = document.querySelectorAll(".btn");
btn.forEach(el => {
  el.addEventListener("click", function(e) {
    alert("been clicked");
    e.stopPropagation();
  });
});

const destination = document.querySelectorAll(".destination");
destination.forEach(el => {
  el.addEventListener("click", function(e) {
    console.log("clicked parent div!");
  });
});

const anchor = document.querySelectorAll("a");
anchor.forEach(el => {
  el.addEventListener("click", function(e) {
    e.preventDefault();
  });
});
