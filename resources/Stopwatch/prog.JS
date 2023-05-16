window.onload = function() {
    var mins = 00;
    var seconds = 00; 
    var tens = 00;
    var appendMins = document.getElementById("mins")
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop  = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var interval;
    buttonStart.onclick = function(){
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }
    buttonStop.onclick = function(){
        clearInterval(interval);
    }
    buttonReset.onclick = function(){
        clearInterval(interval);
        mins = "00"
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMins.innerHTML = mins;
    }
    function startTimer(){
        tens++;

        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }
        if (tens>9){
            appendTens.innerHTML = tens;
        }
        if (tens>99){
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
        if (seconds > 59 && tens > 9){
            mins++;
            appendMins.innerHTML = "0" + mins;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;     
            tens = 0;
            appendTens.innerHTML = "0" + 0;   
        }
        if (mins > 9){
            appendMins.innerHTML = mins;
        }
    }
    //function end
}