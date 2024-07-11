const tapSound = document.getElementById("tap")
const alarm = document.getElementById("alarm")
const timerMins = document.getElementById("minute");
const timerSecs = document.getElementById("second");
const body = document.getElementById("body");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");






let number = 12;
let decrement =  1;

let minutes;
let seconds;
let intervalID;

body.onclick = function(){
    tapSound.play();
}

start.onclick = timer;
pause.onclick = pausefunc;
reset.onclick = resetfunc;


function timer(){
    intervalID = setInterval(timerfunc,1000);
}

function timerfunc (){
    if (number>=0){
        console.log(number);
        minutes = Math.trunc(number/60);
        if(minutes<10){
            timerMins.textContent = `0${minutes}`;
        }
        else{
            timerMins.textContent = `${minutes}`;
        }
        

        seconds = number-(minutes*60);
        console.log(seconds);
        if (seconds<10){
            console.log("working")
            timerSecs.textContent =`0${seconds}`;
        }else{
            timerSecs.textContent = seconds;
        }
        number-=decrement;
        

    }else{
        alarm.play();
    }
    

}

function pausefunc(){
    clearInterval(intervalID);
    if (number>=0){
        console.log(number);
        minutes = Math.trunc(number/60);
        if(minutes<10){
            timerMins.textContent = `0${minutes}`;
        }
        else{
            timerMins.textContent = `${minutes}`;
        }
        

        seconds = number-(minutes*60);
        console.log(seconds);
        if (seconds<10){
            console.log("working")
            timerSecs.textContent =`0${seconds}`;
        }else{
            timerSecs.textContent = seconds;
        }
}
}

function resetfunc(){
    clearInterval(intervalID);
    number = 120;
    alarm.pause();
    if (number>=0){
        minutes = Math.trunc(number/60);
        if(minutes<10){
            timerMins.textContent = `0${minutes}`;
        }
        else{
            timerMins.textContent = `${minutes}`;
        }
        

        seconds = number-(minutes*60);
        console.log(seconds);
        if (seconds<10){
            console.log("working")
            timerSecs.textContent =`0${seconds}`;
        }else{
            timerSecs.textContent = seconds;
        }

}

}