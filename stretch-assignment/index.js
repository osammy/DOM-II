//Your code here 

const blocks = document.querySelectorAll(".block");

blocks.forEach(block => {

    block.addEventListener('click', function(e) {
        console.log(e.target);
        let arr = [];
        blocks.forEach(el =>{
            console.log(el.style.order === "")
            if(el.style.order === "") arr.push(0);
            else arr.push(Number(el.style.order));
            
        })

        let minVal = Math.min.apply(Math,arr);
        if( minVal!== 0 && Number(e.target.style.order) === minVal) return;
        e.target.style.order = String(minVal - 1);
    })

    // block.addEventListener('mousedown',function(e){
    //     alert("yes")
    // })
});


// const startTime = +(new Date());
// const horizon = blocks[0];
// console.log(horizon);

// (function update(){
//     // console.log("called")
//     var dif = (new Date()).getTime() - startTime;
//     dif *= 0.05;
//     horizon.style.left = (100 - dif)+'px';
//     window.requestAnimationFrame( update, horizon );
// })();

var start = null;
var element = blocks[0];

function step(timestamp) {
    console.log(timestamp)
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.transform = 'translateX(' + Math.min(progress / 10, 200) + 'px)';
  if (progress < 200) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
