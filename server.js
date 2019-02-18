const express = require('express')
const app = express();
const port = 3000
var exphbs = require('express-handlebars')
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

require('./data/dbapi-db');
require('./controllers/objects')(app)
require('./controllers/api')(app)

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

module.exports = app;

app.listen(port, () => console.log(`App listening on port ${port}!`))
