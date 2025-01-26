var timer = 60;
var score = 0;
var hitrn = 0;

function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

function makeBubble(){
    var clutter="";

    for (var i=1;i<=105;i++){
        var rn=Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML=clutter;
}

function runTimer(){
    var time=setInterval(function(){
        if (timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
            if (timer<=10) {
                document.querySelector("#timerval").style.color="red";
            }
        }
        else{
            clearInterval(time);
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER!</h1><h1>SCORE: ${score}</h1>`;
            const button=document.querySelector("#btn");
            button.textContent = "START";
            button.style.color="rgb(18, 119, 57)";
        }
    },1000);
}

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }

})


document.querySelector("#btn").addEventListener("click", function () {
    const button = document.querySelector("#btn");
    if (button.textContent === "START") {
        timer = 60; 
        score = 0; 
        document.querySelector("#scoreval").textContent = score;
        makeBubble();
        runTimer();
        getNewHit();
        button.textContent = "STOP";
        button.style.color="Red";
    } 
    else{
        button.textContent = "START";
        button.style.color="rgb(18, 119, 57)";
        timer = 0;
    }
});
