const express = require('express')
const app = express();
const port = 3000
var exphbs = require('express-handlebars')
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
require('dotenv').config();

var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

app.use(cookieParser());

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('public'));

var checkAuth = (req, res, next) => {
    console.log("Checking authentication");
    if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
        req.user = null;
    } else {
        var token = req.cookies.nToken;
        var decodedToken = jwt.decode(token, { complete: true }) || {};
        req.user = decodedToken.payload;
    }

    next();
};

app.use(checkAuth);

app.use(expressValidator());


require('./data/dbapi-db');
require('./controllers/objects')(app)
require('./controllers/api')(app)
require('./controllers/auth')(app)


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

module.exports = app;

app.listen(port, () => console.log(`App listening on port ${port}!`))
