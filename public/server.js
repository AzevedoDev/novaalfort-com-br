var http = require('http');
var express = require('express');
module.exports = function(){
    var app = express();
};

app.use(express.static('public'));


var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});

return app;