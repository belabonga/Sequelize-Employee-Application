const express = require('express');
const path = require('path');
const route = require('./routes/route');
const app = express()

// SET RENDERING ENGINE FOR VIEWS (EJS)
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'/views'))

// SET CSS IN STATIC FILES
app.use('/static', express.static(path.join(__dirname, 'static')))

// FOR req.body
app.use(express.urlencoded({ extended : true }))

app.use('/', route)

// app.get('/' ((req, res) => {
// }))

// CHECK CONNECTION
app.listen(3000, () => {
    console.log('this app running on port : 3000')
});