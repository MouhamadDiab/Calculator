var equal = document.querySelector("#resulting");
var finish = document.querySelector("#finish_result");

function insert(nums){
    equal.value += nums;
}

function calculate() {
    try{
        finish.innerHTML = eval(equal.value);
    }catch{finish.innerHTML = "Error"};

}

function clearScreen(){
    equal.value = '';
    finish.innerHTML = 0;
}

function deleteLast() {
    equal.value = equal.value.substring(0, equal.value.length - 1);
}


let curtime = document.querySelector(".time");
let curdate = document.querySelector(".date");
let today = new Date();
var good = document.querySelector(".good p span");


curdate.innerHTML = today.toDateString();

setInterval(timeout1, 100);

function timeout1(){
    let today1 = new Date();
    curtime.innerHTML = today1.toLocaleTimeString();
}

if(today.getHours >= 6 || today.getHours <= 12 ){
    good.innerHTML = "morning ☀️";
}
else if(today.getHours >= 13 || today.getHours <= 18 ){
    good.innerHTML = "afternoon 🌥️";
}
else{
    good.innerHTML = "night 🌥️";
}