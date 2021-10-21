const path=  require('path');
const express = require('express');
const morgan = require('morgan');
var handlebars = require('express-handlebars');
const app = express();
const port = 3000;

// http logger
app.use(morgan('combined'));

// template
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

// config path handlebars view
app.set('views',path.join(__dirname,'resources/views'))
// console.log('Path: ',path.join(__dirname,'resoures/views'));
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})