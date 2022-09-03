import data from "./data.js";
import Dog from "./dog.js";

const mainEl = document.getElementById("main");
const disLikeEl = document.getElementById("dislike");
const likeEl = document.getElementById("like");

// an array of Dog objects
const dogs = data.map(dog => new Dog(dog));


// Render first Dog
let count = 0;
let currentDog = '';


function updateDog() {
    currentDog = dogs.shift();
    mainEl.innerHTML = currentDog.getHTML();
}

function updateStatus(choice) {
    currentDog.setMatchStatus(choice);
    mainEl.innerHTML = currentDog.showStatus();
}


function run(choice) {
    updateStatus(choice);
    setTimeout(updateDog, 2000);    
    
}

updateDog();
likeEl.addEventListener("click", () => run(true));

