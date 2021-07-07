//Your code here
//events
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

const blocks = document.querySelectorAll(".block");

blocks.forEach(block => {
  block.addEventListener("click", function(e) {
    console.log(e.target);
    let arr = [];
    blocks.forEach(el => {
      console.log(el.style.order === "");
      if (el.style.order === "") arr.push(0);
      else arr.push(Number(el.style.order));
    });

    let minVal = Math.min.apply(Math, arr);
    if (minVal !== 0 && Number(e.target.style.order) === minVal) return;
    e.target.style.order = String(minVal - 1);
  });

  

  block.addEventListener("mousedown", function(e) {
    animFrame = requestAnimationFrame(step);
  });

  block.addEventListener("mouseup", function(e) {
      cancelAnimationFrame(animFrame);
  });
});

var start = null;
var element = blocks[0];
let animFrame;

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  //   element.style.transform = 'translateX(' + Math.min(progress / 10, 200) + 'px)';
  element.style.transform = "translateX(" + Math.min(progress / 10) + "px)";
  if (progress < Infinity) {
    animFrame = requestAnimationFrame(step);
  }
}
