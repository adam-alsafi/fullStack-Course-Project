let countEL = document.getElementById("countEL");
let incrementEL = document.getElementById("incrementEl");
let saveEL = document.getElementById("saveEl")
let entries = document.getElementById("entriesEl");

let count = 0;

function increment() {
    count +=1;
    countEL.innerHTML = count;
}

function saveEntries(){
    entries.innerHTML += countEL.innerHTML + "-";
    console.log("Hi")
}