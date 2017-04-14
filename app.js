var express = require('express');

var hlp = require('./lib/helper.js');
var bigXml = require('./lib/big-xml.js');


var mongoose = require('mongoose');
mongoose.connect('mongodb://productsuser:productsuserpass@ds161400.mlab.com:61400/products');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var app = express();



app.get('/', function (req, res) {
    res.send('APIs : GET /status & GET /jobs?uri=data.xml');
});


app.get('/status', function (req, res) {
    res.send('I am fine');
});

app.get('/jobs', function (req, res) {

    var uri = req.query["uri"];
    var data = [];
    var reader = bigXml.createReader(uri, /^(product)$/, {gzip: false});
    var count = 0;

    reader.on('record', function (record) {
        console.log(count);
        var product=hlp.recordToProduct(record, count++);
        product.save();
        //product delete _id;
        data.push(product);
    });

    reader.on('error', function (err) {
    });

    reader.on('close', function () {
        res.send(data);
        console.log('end count=', count, ' data.length = ', data.length);
    });


});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});


