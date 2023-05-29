const clock = document.querySelector('.clock');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const restart = document.querySelector('.restart');
let seconds = 0;
let interval;

function createSeconds(second) {
    const date = new Date(second * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function startTime() {
    interval = setInterval(function () {
        seconds++;
        let time = createSeconds(seconds);
        clock.innerHTML = time;
    }, 1000);
}

function stopTime(){
    clearInterval(interval);
    interval = false;
};

function restartTime(){
    if (interval) {
        stopTime();
        clock.innerHTML = '00:00:00'
        seconds = 0;
    }else if (seconds === 0){
        startTime();
    } else {
        clock.innerHTML = '00:00:00'
        seconds = 0;
        startTime();
    }
}

start.addEventListener('click', function (event) {
    if(!interval){
        startTime();
    } 
})

stop.addEventListener('click', function (event) {
    if (!interval){
        restartTime();
    }
    stopTime();
})

restart.addEventListener('click', function (event) {
    restartTime();
})