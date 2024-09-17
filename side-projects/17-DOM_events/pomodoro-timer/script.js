const timer = document.getElementById("time");
const start_btn = document.querySelector("button");
const title = document.querySelector("title");

let default_pomodoro_min = 25;
let default_pomodoro_sec = 0;

const default_pomodoro = `${default_pomodoro_min} : 0${default_pomodoro_sec}`;
timer.textContent = default_pomodoro;

function startTimer() {
   
    let min = default_pomodoro_min;
    let sec = default_pomodoro_sec;

    const timer_value = setInterval(function() {
       
        if (sec === 0) {
            if (min === 0) {
                clearInterval(timer_value); 
                return; 
            } 
            
            else {
                min--;
                sec = 59;
            }
        } 
        
        else {
            sec--;
        }

        timer.textContent = `${min} : ${sec.toString().padStart(2, '0')}`;
        title.textContent =  `TIME LEFT 🍅 ${min}min ${sec}sec`;

    }, 1000);

    // Function to reset the timer
    const reset_btn = document.getElementById("reset");

    reset_btn.addEventListener("click", function() {
        clearInterval(timer_value); 
        min = default_pomodoro_min;
        sec = default_pomodoro_sec;
        timer.textContent = `${min} : 0${sec}`;
        title.textContent = `TIME LEFT 🍅 ${min}min ${sec}sec`;
    });
}
