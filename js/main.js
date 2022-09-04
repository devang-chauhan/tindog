import data from "./data.js";
import Dog from "./Dog.js";
import { updateDog, update } from "./update.js";

const mainEl = document.getElementById("main");
const disLikeEl = document.getElementById("dislike");
const likeEl = document.getElementById("like");


const dogs = data.map(dog => new Dog(dog));


updateDog(dogs, mainEl);
likeEl.addEventListener("click", () => update(true, dogs, mainEl));
disLikeEl.addEventListener("click", () => update(false, dogs, mainEl));
