const express = require('express')
const bodyParser= require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
//ROUTES WILL GO HERE
var uploadRouter = require('./routes/upload');
app.use('/', uploadRouter);
 
app.listen(3000, () => console.log('Server started on port 3000'));