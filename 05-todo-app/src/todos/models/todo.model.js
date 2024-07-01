export class Todo {

    /**
     *  @param {String} description 
     */

    constructor( description ) {
        // propiedades de mi clase 
        this.id = 1;
        this.description = description;
        this.done = false;
        this.createAt = new Date();
    }
}