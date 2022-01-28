let ms = 0;
let sec = 0;
let min = 0;

let minElement = document.getElementById("minutes");
let secElement = document.getElementById("seconds");
let msElement = document.getElementById("milliseconds");

let start = document.getElementById("start");
let tstop = document.getElementById("stop");
let reset = document.getElementById("reset");

let interval; //Defined earlier as it will store id of the setInterval of recurring timer function to be used in clearInterval;

const startTimer = () => {
  clearInterval(interval);
  interval = setInterval(timer, 10);

  //**IMPORTANT**  Used 10 milliseconds instead of 1 millisecond as the lowest limit of agruement setInterval is 10 milliseconds
  //However to make the functionality adjust we will represent milliseconds in tens to compensate for it.

};

const stopTimer = () =>{
    clearInterval(interval);
}

const resetTimer = ()=>{
    clearInterval(interval);
    ms = 0;
  	sec = 0;
    min = 0;
    msElement.innerHTML = "00";
  	secElement.innerHTML = "00";
    minElement.innerHTML = '00';
}

const timer = ()=> {
    ms+=1;

    if (ms<=9){
        msElement.innerHTML = "0"+ ms;
    } 

    if (ms>9){
        msElement.innerHTML = ms;
        if (ms>99){
            ms = 0;
            sec+=1;
            msElement.innerHTML = "0"+ ms;
        }
    }


    if (sec<=9){
        secElement.innerHTML = "0"+sec;
    }

    if (sec>9){
        secElement.innerHTML = sec;

        if (sec>59){
            sec = 0;
            min+=1
            secElement.innerHTML = "0"+ sec;
        }
    }

    if (min<9){
        minElement.innerHTML = "0"+min;
    } else{
        minElement.innerHTML = "min";
    }


    
}

start.addEventListener("click", startTimer);
tstop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
