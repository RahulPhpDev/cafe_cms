
const db = require('../database');


const user = class User {

    constructor(id , name) {
        this.id = id;
        this.name = name;
    }

    static fetchAll() {
        const result  =  db.execute('Select * from users');
        return result;
    }
}

module.exports = user;