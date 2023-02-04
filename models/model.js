const db = require('../database');
const Model = class Model {

    constructor(...props) {
          props.forEach( (key) => {
              this.key = props[key];
          })
      }


    fetchAll() {
        this.query = `Select * from ${this.table}`;
        return this;
    }

    where(key , value) {
        console.log('where condition')
        this.query = this.query + ` where ${key} = ${value} `;
        return this;
    }
    inBetweenDate(key, start, end) {
        this.query = this.query + ` where ${key} BETWEEN ('${start}') and ('${end}') `;
        return this;
    }
    get() {
        // const finalQuery = this.query + ` from ${this.table}`;
        console.log('finalQuery---',this.query )
        return db.execute(this.query );
    }
}

module.exports = Model;
