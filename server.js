var express = require('express');
var app = express();

app.use(express.static("app"));
app.use(
  '/bower_components',
  express.static('./bower_components'));

// app.get('/', function (req, res) {
//   res.redirect('/');
// });

app.get('*', function(request, response, next) {
  response.sendfile(__dirname + '\index.html');
});


// app.listen(1000, 'localhost');
// console.log("list App :  Server is Listening on port 1000");


// Start server.
var server = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('AWS SQS example app listening at http://%s:%s', host, port);
});
