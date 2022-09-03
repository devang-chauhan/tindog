
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
}

export default Dog;