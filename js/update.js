
import Dog from './Dog.js';

// a temporary variable that will be updated in following functions.
let currentDog = '';


/**
 *Get a new Dog object from an array of Dog objects and get the HTML 
 *representation of the Dog object.
 *It the end of the array is reached and there's no Dog object, the function
 *pushes a message as HTML.
 * @param {Array[Dog]} dogArray - An array of Dog object. 
 * @param {Element} el - Element from DOM to manipulate
 */
function updateDog(dogArray, el) {
    currentDog = dogArray.shift();
    if (currentDog) {
        el.innerHTML = currentDog.getHTML();
    } else {
        el.innerHTML = `
            <div class="dog message"><p>No more dogs in your area.</p></div>
        `;
    }
}


/**
 * Update the HTML representation of a Dog object with the status of the Dog.
 * It the end of the array is reached and there's no Dog object, the function
 * will do nothing.
 * @param {bool} choice - A boolean to indicate liked or disliked status of the Dog object. 
 * @param {Dog} dog - A Dog object. 
 * @param {Element} el - Element from DOM to manipulate
 */
function updateStatus(choice, dog, el) {
    if (dog) {
        dog.setMatchStatus(choice);
    el.innerHTML = dog.showStatus();
    }
}


/**
 * This function adds status to the currently selected Dog on the screen and then updates the Dog on the screen.
 * @param {bool} choice - A boolean to indicate liked or disliked status of the 
 * @param {Array[Dog]} dogArray - An array of Dog object. 
 * @param {Element} el - Element from DOM to manipulate
 */
function update(choice, dogs, el) {
    updateStatus(choice, currentDog, el);
    setTimeout(function () { updateDog(dogs, el); }, 2000);   
}


export { updateDog, update };