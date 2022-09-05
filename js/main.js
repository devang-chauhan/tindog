import data from "./data.js";
import Dog from "./Dog.js";
import { updateDog, update } from "./update.js";

// elements
const mainEl = document.getElementById("main");
const disLikeEl = document.getElementById("dislike");
const likeEl = document.getElementById("like");
const reloadEl = document.getElementById("reload");
// arrays
const dogs = data.map(dog => new Dog(dog));

updateDog(dogs, mainEl);
likeEl.addEventListener("click", () => update(true, dogs, mainEl, likeEl));
disLikeEl.addEventListener("click", () => update(false, dogs, mainEl, disLikeEl));
reloadEl.addEventListener("click", () => location.reload());