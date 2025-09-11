let time = document.getElementById("time");
flag = false;

let sec = 0;
let min = 0;
let hr = 0;
let clock;
let start = function () {
    if (sec == 60) {
        min += 1;
        sec = 0;
    }
    if (min == 60) {
        hr += 1;
        min = 0;
    }

    let seconds;
    let minutes;
    let hours;

    if (sec < 10) seconds = "0" + sec;
    else seconds = sec;
    if (min < 10) minutes = "0" + min;
    else minutes = min;
    if (hr < 10) hours = "0" + hr;
    else hours = hr;
    time.textContent = hours + ":" + minutes + ":" + seconds;
    sec += 1;
}

function start_btn() {
    if (flag) return
    flag = true;
    clock = setInterval(start, 1000);
}
function stop_btn() {
    clearInterval(clock);
    flag = false;
}
function reset_btn() {
    sec = 0;
    min = 0;
    hr = 0;
    time.textContent = "00:00:00";
    clearInterval(clock);
    flag = false;
}