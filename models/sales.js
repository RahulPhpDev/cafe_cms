const db = require('../database');
const Model = require('./model')
// CREATE table sales (
//     id int(22) PRIMARY KEY AUTO_INCREMENT, 
//     amount varchar(22),
//     sale_date date 
//     )
const sale = class Sale  extends Model{

    constructor(id , name, type) {
        super({id,name,type});
        this.query = '';
        this.id = id;
        this.name = name;
        this.type = type;
        this.table = 'sales';
        

    }

    static create(data) {
        const { amount , date, type } = data;
        const query =  `INSERT INTO sales (amount, sale_date, type) VALUES (${amount}, '${date}', ${type})`;
        // const query =  `INSERT INTO sales (amount, sale_date, type) VALUES (?, ? , ?), [${amount}, '${date}', ${type} ]`;
        
        console.log('query', query, date)
        return db.execute(query)

    }

}

module.exports = sale;