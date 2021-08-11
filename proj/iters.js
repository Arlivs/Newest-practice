$(document).ready(() =>{

const iterBox = document.createElement("div");
iterBox.classList.add("iters");
iterBox.style.marginTop = "30px";

const iterTitle = iterBox.insertAdjacentHTML("beforeend", `
<div class="iter-body">
    <h2 class="iter-header">Cool Counter</h2>
    <div class="iter-content">
        <span class="iter-span">0</span>
    </div>
    <div class="iter-btn_box">
        <button class="iter-btn_Minus">minus</button>
        <button class="iter-btn_Plus">plus</button>
    </div>
    <button style="font-weight:bold" class="iter-clear">Clear Count</button>
</div>
`);

document.querySelector(".popup-body").after(iterBox);
const iterBtnMinus = document.querySelector(".iter-btn_Minus");
const iterBtnPlus = document.querySelector(".iter-btn_Plus");
const btnBox = document.querySelector(".iter-btn_box");
const iterSpan = document.querySelector(".iter-span");
const iterClear = document.querySelector(".iter-clear");

iterBtnMinus.style.cssText = `
    padding:10px 30px;
    background-color: rgb(177, 84, 84);
    border:1px solid gray;
    border-radius: 7px;
    color: white;
`;
iterBtnPlus.style.cssText = `
    padding:10px 30px;
    background-color: rgb(150, 206, 98);
    border:1px solid gray;
    border-radius: 7px;
    color: white;
    min-width:104px;
`;
btnBox.style.cssText = `
    width:250px;
    margin: 30px auto;
    display:flex;
    justify-content: space-between
`;

const timerHours = document.querySelector(".timer-hours");
const timerMins = document.querySelector(".timer-minuts");
const timerSecs = document.querySelector(".timer-seconds");

let iterCount = 0;

iterClear.addEventListener("click", () => {
    iterSpan.innerHTML = iterCount = 0
    timerHours.innerHTML = "00"
    timerMins.innerHTML = "00"
    timerSecs.innerHTML = "00"
});

const modTimer = document.querySelector(".mods-second");
const modDicrIncrem = document.querySelector(".mods-first");

if (modTimer.classList.contains("active")) {
    iterSpan.innerHTML = iterCount = 0
}
if (modDicrIncrem.classList.contains("active")) {
    iterSpan.innerHTML = iterCount = 0
}
if(iterBtnMinus) {
    iterBtnMinus.addEventListener("click", () => {
        iterCount--
        iterSpan.innerHTML = iterCount
    });
}
if(iterBtnPlus) {
    iterBtnPlus.addEventListener("click", () => {
        iterCount++
        iterSpan.innerHTML = iterCount
    });
}

})