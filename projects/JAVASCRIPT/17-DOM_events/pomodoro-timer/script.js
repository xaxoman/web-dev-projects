const timer = document.getElementById("time");
const start_btn = document.getElementById("start");
const title = document.querySelector("title");
const container = document.getElementById("pomodoro-container");
// variabile flag per sapere se il timer è in pausa
let is_paused = false;

// file audio da riprodurre
const button_sound = new Audio(`audio/button-sound.mp3`);
const alarm_clock = new Audio("audio/alarm-clock.mp3");

let default_pomodoro_min = 25;
let default_pomodoro_sec = 0;

// variabili per le pause
const short_break = document.getElementById("short");
const long_break = document.getElementById("long");
const pomodoro_default = document.getElementById("work");
let is_short_break = false;
let is_long_break = false;
let is_pomodoro = false;

// add the default values to the timer
const default_pomodoro = `${default_pomodoro_min} : 0${default_pomodoro_sec}`;
timer.textContent = default_pomodoro;

// valore globale del timer vuoto
let timer_value = null;

let min = default_pomodoro_min;
let sec = default_pomodoro_sec;

// EventListener per le pause
short_break.addEventListener("click", function(){

    document.body.style.transition = "0.5s";
    document.body.style.backgroundColor = "rgb(88, 88, 255)";
    const short_break_value = 5;
    timer.textContent = `${short_break_value} : 0${0}`;
    min = short_break_value;
    sec = 0;
    is_short_break = true;
    is_long_break = false;
    is_pomodoro = false;
});

long_break.addEventListener("click", function(){

    document.body.style.transition = "0.5s";
    document.body.style.backgroundColor = "#21a532";
    const long_break_value = 10;
    timer.textContent = `${long_break_value} : 0${0}`;
    min = long_break_value;
    sec = 0;
    is_long_break = true;
    is_short_break = false;
    is_pomodoro = false;
});

pomodoro_default.addEventListener("click", function() {

    document.body.style.transition = "0.5s";
    document.body.style.backgroundColor = "#ff3535";
    const default_pomodoro = `${default_pomodoro_min} : 0${default_pomodoro_sec}`;
    timer.textContent = default_pomodoro;
    min = default_pomodoro_min;
    sec = 0;
    is_pomodoro = true;
    is_short_break = false;
    is_long_break = false;
});


function updateTimer() {
    if (sec === 0) {
        if (min === 0) {
            // quando il timer finisce applica l'animazione e l'allarme
            container.classList.add("pomodoro-animation");
            alarm_clock.play();
            clearInterval(timer_value); // ripulisce il valore di min e sec
            return;
        } else {
            min--;
            sec = 59;
        }
    } else {
        sec--;
    }

    timer.textContent = `${min} : ${sec.toString().padStart(2, '0')}`;
    title.textContent = `TIME LEFT 🍅 ${min}min ${sec}sec`;
}

function startTimer() {

    button_sound.play();
    start_btn.textContent = "PAUSE"; 
    timer_value = setInterval(updateTimer, 1000);
    is_paused = false;
}

function pauseTimer() {
    clearInterval(timer_value); // fermo il timer
    start_btn.textContent = "RESUME";
    is_paused = true;
}

function resumeTimer() {
    button_sound.play();
    start_btn.textContent = "PAUSE";
    // CONTINUA CON IL TIMER DA DOVE ERA RIMASTO
    timer_value = setInterval(updateTimer, 1000);
    is_paused = false;
}

// GESTISCO I VARI CASI DEL BOTTONE
start_btn.addEventListener("click", function() {
    if (start_btn.textContent === "START" || start_btn.textContent === "RESUME") {
        if (is_paused) {
            resumeTimer();
        } else {
            startTimer();
        }
    } else if (start_btn.textContent === "PAUSE") {
        pauseTimer();
    }
});

// FUNZIONE PER RESETTARE
const reset_btn = document.getElementById("reset");
reset_btn.addEventListener("click", function() {
    clearInterval(timer_value);
   
    if (is_short_break) {
        min = 5;
        sec = 0;
    } else if (is_long_break) {
        min = 10;
        sec = 0;
    } else {
        min = default_pomodoro_min;
        sec = default_pomodoro_sec;
    }
    
    timer.textContent = `${min} : 0${sec}`;
    title.textContent = `TIME LEFT 🍅 ${min}min ${sec}sec`;
    start_btn.textContent = "START";
    is_paused = false;
    container.classList.remove("pomodoro-animation");
});
