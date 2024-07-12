const tapSound = document.getElementById("tap")
const alarm = document.getElementById("alarm")
const timerMins = document.getElementById("minute");
const timerSecs = document.getElementById("second");
const body = document.getElementById("body");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
let root = document.querySelector(":root")






let number = 120;
const numberStart = number;
let decrement =  1;

let minutes;
let seconds;
let intervalID;

let progress = 0
let progressIncrement = 1/number*100
let progressEnd = 100

body.onclick = function(){
    tapSound.play();
}
startClick = false;
start.onclick = timer;
pauseClick = false;
pause.onclick = pausefunc;
resetClick = false;
reset.onclick = resetfunc;


function timer(){
    if (!startClick){
        intervalID = setInterval(timerfunc,1000);
        start.textContent = "start";
        startClick=true;
        pauseClick=false;
        resetfunc=false;
    }
    

}

function timerfunc (){
    if (number>=0){
        
        minutes = Math.trunc(number/60);
        if(minutes<10){
            timerMins.textContent = `0${minutes}`;
        }
        else{
            timerMins.textContent = `${minutes}`;
        }
        

        seconds = number-(minutes*60);
        
        if (seconds<10){
            
            timerSecs.textContent =`0${seconds}`;
        }else{
            timerSecs.textContent = seconds;
        }
        if (number!=numberStart){
            
            progress+=progressIncrement;
        }
        
        console.log(`progress increment : ${progress}`)
        root.style.setProperty("--height",`${progress}vh`);
        root.style.setProperty("--radius",`${(100-progress/100*100)}vh`)
        root.style.setProperty("--reverse-height",`${100-progress}vh`)
        number-=decrement;
        

    }else{
        alarm.play();
    }
    

}

function pausefunc(){
    if (!pauseClick){
        start.textContent="resume";
        clearInterval(intervalID);
        if (number>=0){
        
        minutes = Math.trunc(number/60);
        if(minutes<10){
            timerMins.textContent = `0${minutes}`;
        }
        else{
            timerMins.textContent = `${minutes}`;
        }
        

        seconds = number-(minutes*60);
        
        if (seconds<10){
            
            timerSecs.textContent =`0${seconds}`;
        }else{
            timerSecs.textContent = seconds;
        }
}
        pauseClick=true;
        startClick=false;
        resetfunc=false;
    }
    
}

function resetfunc(){
    if (!resetClick){
        start.textContent = "start";
        clearInterval(intervalID);
        number = numberStart;
        alarm.pause();
        progress = 0;
        root.style.setProperty("--height",`${progress}vh`);
        root.style.setProperty("--radius",`${(100-progress/100*100)}vh`)
        root.style.setProperty("--reverse-height",`${100-progress}vh`)
        if (number>=0){
            minutes = Math.trunc(number/60);
            if(minutes<10){
                timerMins.textContent = `0${minutes}`;
            }
            else{
                timerMins.textContent = `${minutes}`;
            }
            

            seconds = number-(minutes*60);
            
            if (seconds<10){
                
                timerSecs.textContent =`0${seconds}`;
            }else{
                timerSecs.textContent = seconds;
            }

    }

            
    
    startClick = false;
    pauseClick = false;
        }


    
    
}