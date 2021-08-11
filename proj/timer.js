$(document).ready(() => {

const timerHours = document.querySelector(".timer-hours");
const timerMins = document.querySelector(".timer-minuts");
const timerSecs = document.querySelector(".timer-seconds");
const inpHours = document.querySelector("#timer-hours");
const inpMins = document.querySelector("#timer-mins");
const inpSecs = document.querySelector("#timer-secs");
const iterSpan = document.querySelector(".iter-span");
const iterBtnMinus = document.querySelector(".iter-btn_Minus");
const iterBtnPlus = document.querySelector(".iter-btn_Plus");

let iterCount = 0
const hideInp = () => {
    inpHours.style.display = "none";
    inpMins.style.display = "none";
    inpSecs.style.display = "none";
}
hideInp()

const timerOn = () => {
    iterSpan.innerHTML = iterCount = 0
    inpHours.style.display = "inline-block";
    inpMins.style.display = "inline-block";
    inpSecs.style.display = "inline-block";

    inpHours.addEventListener("keyup", () => {
        timerHours.innerHTML = inpHours.value;
        if(!timerHours.innerHTML) {
            timerHours.innerHTML = "00";
        }
        else if (timerHours.innerHTML > 999) {
            timerHours.innerHTML = "999";
        }
        else if (timerHours.innerHTML < 10){
            timerHours.innerHTML = "0" + inpHours.value;
        }
    });
    inpMins.addEventListener("keyup", () => {
        timerMins.innerHTML = inpMins.value;
        if(!timerMins.innerHTML) {
            timerMins.innerHTML = "00";
        }
        else if (timerMins.innerHTML > 59) {
            timerMins.innerHTML = "59";
        }
        else if (timerMins.innerHTML < 10){
            timerMins.innerHTML = "0" + inpMins.value;
        }
    });
    inpSecs.addEventListener("keyup", () => {
        timerSecs.innerHTML = inpSecs.value;
        if(!timerSecs.innerHTML) {
            timerSecs.innerHTML = "00";
        }
        else if (timerSecs.innerHTML > 59) {
            timerSecs.innerHTML = "59";
        }
        else if (timerSecs.innerHTML < 10){
            timerSecs.innerHTML = "0" + inpSecs.value;
        }
    });
};

function timerControls() {
    iterBtnPlus.addEventListener("click", () => {
        let secsVal = timerSecs.innerHTML
        secsVal++
        if(secsVal < 10) {
            timerSecs.innerHTML = "0" + +secsVal;
        }
        let minsVal = timerMins.innerHTML
        minsVal++
        if(secsVal == 59) {
            timerMins.innerHTML = "0" + +minsVal;
            timerSecs.innerHTML = "00"
            iterSpan.innerHTML = iterCount = 0
        }
    });

    iterBtnMinus.addEventListener("click", () => {
        let secsVal = timerSecs.innerHTML
        secsVal--
        if(secsVal < 10) {
            timerSecs.innerHTML = "0" + +secsVal;
            iterCount = 0
        }
        let minsVal = timerMins.innerHTML
        minsVal--
        if (secsVal < 1) {
            timerSecs.innerHTML = "00"
        }
        if(secsVal == 59) {
            timerMins.innerHTML = "0" + +minsVal;
            timerSecs.innerHTML = "00"
            iterSpan.innerHTML = iterCount = 0
        }
    });
}
const containDelete = (target, clazz) => {
    if (target.classList.contains(clazz)) {
        target.classList.remove(clazz);
    }
    iterSpan.innerHTML = iterCount = 0
}

const modTimer = document.querySelector(".mods-second");
const modDicrIncrem = document.querySelector(".mods-first");

modTimer.addEventListener("click", () => {
    containDelete(modDicrIncrem, "active")
    modTimer.classList.add("active");
    if (modTimer.classList.contains("active")) {
        iterCount = 0;
        hideInp()
        timerControls()
    }
});

modDicrIncrem.addEventListener("click", () => {
    containDelete(modTimer, "active")
    iterSpan.innerHTML = iterCount = 0;
    modDicrIncrem.classList.add("active");
    if (modDicrIncrem.classList.contains("active")) {
        timerOn()
    }
})

})