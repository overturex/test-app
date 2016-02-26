(function(){

    var express = require('express');
    var app = express();

    app.get('/', function(req, res){

        res.send('API is working!');

    });

    app.listen(3000, function(){
        console.log('API is working at Port: 3000');
    });

}());