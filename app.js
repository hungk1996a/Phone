const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const knex = require('./config');

const PhoneFactory = require('./phone/PhoneFactory');
const PhoneRepository = require('./phone/PhoneRepository');

app.post('/', (req, res) => {
   const phoneFactory = new PhoneFactory;
   const phone = phoneFactory.makeFromRequest(req.body);
   const phoneRepository = new PhoneRepository(knex);
   phoneRepository.create(phone);
   res.send('done');
});

app.get('/', (req, res) =>{
   const phoneFactory = new PhoneFactory;
   const phone = phoneFactory.makeFromRequest(req.body);
   const phoneRepository = new PhoneRepository(knex);
   phoneRepository.show(phone);
   res.send('done');
});

app.put('/:id', (req, res) =>{
    const phoneFactory = new PhoneFactory;
    const phone = phoneFactory.makeFromRequest(req.body);
    phone.setId(req.params.id);
    const phoneRepository = new PhoneRepository(knex);
    phoneRepository.update(phone);
    res.send('done');
});

app.listen(3002, () =>{
    console.log('runnin g');
});