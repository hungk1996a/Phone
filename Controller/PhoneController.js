const PhoneFactory = require('../phone/PhoneFactory');
const PhoneRepository = require('../phone/PhoneRepository');

const knex = require('../config');

class PhoneController {

    createPhone(req, res, next) {
        const phoneFactory = new PhoneFactory;
        const phone = phoneFactory.makeFromRequest(req.body);
        const phoneRepository = new PhoneRepository(knex);
        phoneRepository.create(phone).then(data => {
            res.send(data);
        }).catch(next);
    }

    showDb(req, res, next) {
        const phoneFactory = new PhoneFactory;
        const phone = phoneFactory.makeFromRequest(req.body);
        const phoneRepository = new PhoneRepository(knex);
        phoneRepository.show(phone).then(data => {
            res.send(data);
        }).catch(next);
    }

    updatePhone(req, res, next) {
        const phoneFactory = new PhoneFactory;
        const phone = phoneFactory.makeFromRequest(req.body);
        phone.setId(req.params.id);
        const phoneRepository = new PhoneRepository(knex);
        phoneRepository.update(phone).then(data => {
            res.send(data);
        }).catch(next);
    }
}
module.exports = PhoneController;