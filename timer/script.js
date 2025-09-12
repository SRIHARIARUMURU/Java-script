let time = document.getElementById("time");
let clock1, clock2, clock3;
let flag1 = false
let flag2 = false
let flag3 = false


let ten_min = 10;
let ten_sec = 0;
function start1() {
    if (ten_min == 0 && ten_sec == 0) {
        return
    }
    if (ten_sec == 0) {
        ten_min -= 1;
        ten_sec = 59;
    } else {
        ten_sec -= 1;
    }

    let ten_minutes;
    let ten_seconds;
    if (ten_min < 10) {
        ten_minutes = "0" + ten_min
    }
    else {
        ten_minutes = ten_min
    }
    if (ten_sec < 10) {
        ten_seconds = "0" + ten_sec
    }
    else {
        ten_seconds = ten_sec
    }
    time.textContent = ten_minutes + ":" + ten_seconds;

}
function ten_btn() {
    time.textContent="00:00"
    
    if (flag1) return
    flag1 = true
    flag3=false
    flag2=false

    twenty_min = 20;
    twenty_sec = 0;
    thirty_min = 30;
    thirty_sec = 0;
    clearInterval(clock1);
    clearInterval(clock2);
    clearInterval(clock3);

    clock1 = setInterval(start1, 1000);
}

// --------------------------------------------------------------------------------

let twenty_min = 20;
let twenty_sec = 0;
function start2() {
    if (twenty_min == 0 && twenty_sec == 0) {
        return
    }
    if (twenty_sec == 0) {
        twenty_min -= 1;
        twenty_sec = 59;
    } else {
        twenty_sec -= 1;
    }

    let twenty_minutes;
    let twenty_seconds;
    if (twenty_min < 10) {
        twenty_minutes = "0" + twenty_min
    }
    else {
        twenty_minutes = twenty_min
    }
    if (twenty_sec < 10) {
        twenty_seconds = "0" + twenty_sec
    }
    else {
        twenty_seconds = twenty_sec
    }
    time.textContent = twenty_minutes + ":" + twenty_seconds;

}

function twenty_btn() {
    time.textContent="00:00"
    
    if (flag2) return
    flag2 = true
    flag1=false
    flag3=false

    ten_min = 10;
    ten_sec = 0;
    thirty_min = 30;
    thirty_sec = 0;

    clearInterval(clock1);
    clearInterval(clock2);
    clearInterval(clock3);

    clock2 = setInterval(start2, 1000);
}

// ----------------------------------------------------------------------------------------------------------
let thirty_min = 30;
let thirty_sec = 0;
function start3() {
    if (thirty_min == 0 && thirty_sec == 0) {
        return
    }
    if (thirty_sec == 0) {
        thirty_min -= 1;
        thirty_sec = 59;
    } else {
        thirty_sec -= 1;
    }

    let thirty_minutes;
    let thirty_seconds;
    if (thirty_min < 10) {
        thirty_minutes = "0" + thirty_min
    }
    else {
        thirty_minutes = thirty_min
    }
    if (thirty_sec < 10) {
        thirty_seconds = "0" + thirty_sec
    }
    else {
        thirty_seconds = thirty_sec
    }
    time.textContent = thirty_minutes + ":" + thirty_seconds;

}

function thirty_btn() {
    time.textContent="00:00"
    
    if (flag3) return
    flag1=false
    flag2=false
    flag3 = true

    ten_min = 10;
    ten_sec = 0;
    twenty_min = 20;
    twenty_sec = 0;
    
    clearInterval(clock1);
    clearInterval(clock2);
    clearInterval(clock3);
    
    clock3 = setInterval(start3, 1000);
}