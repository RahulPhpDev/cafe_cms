const express = require('express')
const saleController = require('../controller/sale');
const router = express.Router()
const user = require('../models/user');



// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })


  router.get('/sale/create', saleController.create);

  router.post('/sale/store', saleController.store);


  router.get('/sale', saleController.getAll);



    router.get('/', (req, res) => {
        const result = user.fetchAll();
        let product = [];
        result.then( ( [rows, fieldData]) => {
            product = rows;
            console.log('producs', product)
            res.render('users/index', {
                prods: product,
                pageTitle: 'User',
                path: '/'
            })
        }).catch( (err) => {
            res.render('users/index', {
                prods: [],
                pageTitle: 'User',
                path: '/'
            })
        });
    })

  

  module.exports = router