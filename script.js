const tapSound = document.getElementById("tap")
tapSound.play();
let number = 0;
let increment =  1/120*100;

let timer = 0;


setInterval(BGanimation,1000);



function BGanimation (){
    if (number<100){

        number+=increment;
        console.log(number)

    }
    

}

/*for (number;number<=100;number+increment){
    console.log("working");
}*/