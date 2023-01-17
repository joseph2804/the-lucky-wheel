var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var session = require('express-session');
var server = express();

var home = require('./controllers/Home');

server.use(express.static(__dirname + '/clients'));
server.use(cors());
server.set('view engine', 'ejs');
server.use([bodyParser.json(), bodyParser.urlencoded({ extended: true })]);
server.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'somesecret',
    cookie: { maxAge: 300000 }
}));

const port = process.env.PORT || 3000;
server.listen(port, function () {
    console.log(`Example app listening at http://localhost:${port}`)
});

server.use('/home', home);

server.get('/', function (req, res) {
    return res.redirect('/home');
});