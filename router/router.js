const express = require('express');
const router = new express.Router();
const phoneRequest = require('../middlerware/index');
const PhoneController = require('../Controller/PhoneController');
const phoneController = new PhoneController();

router.post('/', phoneRequest.checkPhone, phoneController.createPhone);

router.get('/', phoneRequest.checkPhone, phoneController.showDb);

router.put('/:id', phoneRequest.checkPhone, phoneController.updatePhone);

router.delete('/:id', phoneRequest.checkPhone, phoneController.deletePhone);

module.exports = router;