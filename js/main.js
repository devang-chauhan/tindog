import data from "./data.js";
import Dog from "./dog.js";

const mainEl = document.getElementById("main");
const disLikeEl = document.getElementById("dislike");
const likeEl = document.getElementById("like");

// an array of Dog objects
const dogs = data.map(dog => new Dog(dog));

// Render first Dog
mainEl.innerHTML = dogs[0].getHTML();
let count = 0;


function render(arr, choice) {
    count++;
    if (count < arr.length) {
        mainEl.innerHTML = new Dog(arr[count]).getHTML();
    } else {
        mainEl.innerHTML = `<div class="end-container"><p>No more dogs in your area.</p></div>`;
    }
    
    
    
}


likeEl.addEventListener("click", () => render(dogs, true));

