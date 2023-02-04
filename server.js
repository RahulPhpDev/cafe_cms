var express = require('express');
var app = express();
const bodyParser = require('body-parser')

const router = express.Router()
app.use(bodyParser.urlencoded({ extended: false }))


const web = require('./routes/web')


// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', 'views')
app.use('/home', web)
// use res.render to load up an ejs view file
app.use('/assets', express.static('assets'));

// index page
app.get('/', function(req, res) {
  res.render('home/main', {
      title: 'Dynamic Title'
  });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});



app.listen(8080);
console.log('Server is listening on port 8080');