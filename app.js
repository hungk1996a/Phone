const express = require('express');
const app = express();

const router = require('./router/router');
const PhoneRepository = require('./phone/PhoneRepository');

const knex = require('./config');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('repo', new PhoneRepository(knex));
app.use(router);

app.listen(3002, () =>{
    console.log('running');
});


// const nunjucks = require('nunjucks');
// const PATH = '.';
// nunjucks.configure(PATH, {
//     autoescape: true,
//     express: app
// });