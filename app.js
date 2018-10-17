const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const PhoneController = require('./Controller/PhoneController');
const phoneController = new PhoneController();

app.post('/', (req, res, next) => phoneController.createPhone(req, res, next));

app.get('/', (req, res, next) => phoneController.showDb(req, res, next));

app.put('/:id', (req, res, next) => phoneController.updatePhone(req, res, next));

app.listen(3002, () =>{
    console.log('runnin g');
});