const express = require('express');
const router = new express.Router();
const phoneRequest = require('../middlerware/index');
const PhoneController = require('../Controller/PhoneController');
const phoneController = new PhoneController();

router.post('/', phoneRequest.checkPhone, phoneController.createPhone);

router.get('/', phoneController.showPhone);

router.put('/:id', phoneRequest.checkPhone, phoneController.updatePhone);

router.delete('/:id', phoneRequest.checkPhone, phoneController.deletePhone);

router.get('/get', phoneController.joinDB);

module.exports = router;