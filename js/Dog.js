
/**
 * Dog object constructor.
 */
class Dog{
    /**
     * Assign properties to the Dog object.
     * @param {*} data - JSON object.
     */
    constructor(data) {
        Object.assign(this, data);
    }
    /**
     * Based on the choice made on the UI, update the status of the Dog object.
     * @param {bool} choice - A boolean to indicate liked or disliked status of the 
     */
    setMatchStatus(choice) {
        this.hasBeenLiked = choice;
        this.hasBeenSwiped = true;
    }
    /**
     * 
     * @returns HTML to render the Dog image on screen.
     */
    getHTML() {
        return `
            <img src=${this.avatar} alt=${this.bio}>
            <div class="dog bio">
                <div class="profile">
                    <h2>${this.name}, ${this.age}</h2>
                    <p>${this.bio}</p>
                </div>
            </div>
        `;
    }
    /**
     * 
     * @returns HTMl to show status of the current Dog on the screen.
     */
    showStatus() {
        return this.getHTML() + `
            <div class="dog status">
                <div class="status-tag">
                    <img src=${this.hasBeenLiked? "images/icons/like-image.png": "images/icons/nope-image.png"}>
                </div>
            </div>
        `;
    }
}

export default Dog;
