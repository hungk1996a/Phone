const express = require('express');
const app = express();

const router = require('./router/router');
const PhoneRepository = require('./phone/PhoneRepository');

const knex = require('./config');

const PhoneFactory = require('./phone/PhoneFactory');
const Searcher = require('./Search/Searcher');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('repo', new PhoneRepository(knex));
app.set('factory', new Searcher(knex, new PhoneFactory));
app.use(router);

app.listen(3002, () =>{
    console.log('running');
});