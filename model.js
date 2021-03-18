class Tasca {
    constructor(id, title, description,state,start, end, user){
        this.id = id;
        this.title = title;
        this.description = description;
        this.state = state;
        this.start =start;
        this.end = end;
        this.user = user
    }
}

module.exports = Tasca;