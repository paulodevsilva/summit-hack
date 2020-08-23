const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3001;
const routes = require('./routes');
// const db = require('./database/db');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

nunjucks.configure('src/views', {
  express: app,
  noCache: true
});


app.use(routes);

app.listen(port, () => console.log(`running server in ${port}`));