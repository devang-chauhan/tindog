import data from "./data.js";
import Dog from "./dog.js";

const mainEl = document.getElementById("main");
const disLikeEl = document.getElementById("dislike");
const likeEl = document.getElementById("like");

// an array of Dog objects
const dogs = data.map(dog => new Dog(dog));

// temporary variable
let currentDog = '';


function updateDog() {
    currentDog = dogs.shift();
    if (currentDog) {
        mainEl.innerHTML = currentDog.getHTML();
    } else {
        mainEl.innerHTML = `
            <div><p>No more dogs in your area.</p></div>
        `;
    }
    
}

function updateStatus(choice) {
    if (currentDog) {
        currentDog.setMatchStatus(choice);
    mainEl.innerHTML = currentDog.showStatus();
    }
}


function run(choice) {
    updateStatus(choice);
    setTimeout(updateDog, 1000);    
    
}

updateDog();
likeEl.addEventListener("click", () => run(true));
disLikeEl.addEventListener("click", () => run(false));
