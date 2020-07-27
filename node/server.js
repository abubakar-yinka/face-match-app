
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/', (req, res) => {
    //PROPETIES OF REQUEST
    //1. req.query(what we get when we do a get query) e.g console.log(req.query);
    //2. req.body(Using something like urlencoded or json bodyparsers, we can add that middleware to recieve whatever we send in the body)
    //3. req.header
    //4. req.params(a syntax where you use the parameters of the url)
    
    
    res.send('testest');
});

app.listen(4000);