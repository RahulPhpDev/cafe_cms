
const user = require('../models/user');
const sale = require('../models/sales');
const collect = require('../utils/collect');
const { fetchAll } = require('../models/user');
const { getDbDateFormat, getStartDate,getTodayDate } = require('../utils/datepicker');


exports.getAll = (req, res, next) => {
    let {start_date, end_date} = req.query;

    start_date = start_date ? getDbDateFormat(start_date) : getStartDate() ;
    end_date = end_date ? getDbDateFormat(end_date) : getTodayDate();
   
    const saleObj = new sale();
    
    const result = saleObj.fetchAll()
                    .inBetweenDate('sale_date', start_date, end_date)
                    .get();
    
    let sales = [];
    result.then( ( [rows, fieldData]) => {
        sales = rows;
        res.render('web/sales/index', {
            prods: sales,
            totalAmount: collect.sum( rows, 'amount' ),
            pageTitle: 'User',
            path: '/',
        })
    }).catch( (err) => {
        console.log(err, '---err')
          res.render('web/sales/index', {
            prods: [],
            totalAmount: 0,
            pageTitle: 'User',
            path: '/'
        })
    });
}

exports.create =  (req, res, next) => {
    res.render('web/sales/create', {
        pageTitle: 'User',
        path: '/'
    })
}

exports.store = (req, res, next) => {
    
    const { date , amount, type } = req.body;
    
    const response = sale.create({  date:getDbDateFormat(date) , amount ,type } )
    response.then( response => {
            res.redirect('/home/sale')
    }). catch( (err) => {
        console.log(err);
    })
}
