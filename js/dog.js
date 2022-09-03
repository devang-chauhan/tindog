
class Dog{
    constructor(data) {
        Object.assign(this, data);
    }
    setMatchStatus(choice) {
        this.hasBeenLiked = choice;
        this.hasBeenSwiped = true;
    }
    getHTML() {
        return `

            <img src=${this.avatar} alt=${this.bio}>

        `;
    }
    showStatus() {
        return `
        <div>
        <p>Swiped? ${this.hasBeenSwiped} liked? ${this.hasBeenLiked}</p>
            <img src=${this.avatar} alt=${this.bio}>
        </div>
        `;
    }
}

export default Dog;