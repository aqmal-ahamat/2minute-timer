let number = 0;
let increment =  1/120*100;


setInterval(BGanimation,1000);



function BGanimation (){
    number+=increment;
    console.log(number)


}

/*for (number;number<=100;number+increment){
    console.log("working");
}*/