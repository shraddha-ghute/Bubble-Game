var hitrn=0;
function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

function makeBubble(){
    var clutter ="";
    for(var i=1; i<160; i++){
        var rn= Math.floor(Math.random()*10) 
        /* random methods gives any decimal number between 0 and 1 so,one digit ka 1 point vala
         num milne ke liye we multiply it with 10 like(0.2*10=2.0)
         floor method returns the whole number from decimal number  */
        clutter += ` <div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 60;
function runTimer(){
 var timerint= setInterval(function(){
    if(timer>0){
    timer--;
    document.querySelector("#timerval").textContent=timer;
    }
    else{
        clearInterval(timerint); // it will clear set intervl means  remove extra memory of minus values
        document.querySelector("#pbtm").innerHTML=`<h1> Game Over <h1>`;
    }
  },1000);
}

var score =0;
function increaseScore(){
    score +=10;
    document.querySelector("#scoreval").textContent=score;
}

//jispe click karoge wo element par event raise hoga , aur event listner na milne par event 
// element ke parent par listner dhundhega, waha bhi na milne par event parent ke parent ke 
// parent par listner dhundhega.

document.querySelector("#pbtm")
.addEventListener("click", function(dets){
    var clickednum = (Number(dets.target.textContent)); // dets is the points on which we click and target is used to detects on which point we clicked
    if(clickednum == hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
}); // dets.target is bubble we clicked but due to textcontent its in string so used number method here


getNewHit();
runTimer();
makeBubble();