const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(__dirname + "/views"));  //part
const http = require('http').Server(app);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index'))
app.use('*', function (req, res) {
  res.send("<br><br><br><h1 style='text-align: center'>The requested URL <U>" + req.baseUrl + "</U> was not found on this server.<br><br><a href='/'>Go to homepage</a><br><br><img src='https://cdn.dutchcowboys.nl/uploads/images/error-404.jpg'></h1>");
});
var server = http.listen(3000, function () {
  console.log("Server is Running... At: http://localhost:%s", server.address().port);
});