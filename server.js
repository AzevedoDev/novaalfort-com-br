var express = require('express');
var app = express();

app.use(express.static('public'));


const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});