const PhoneFactory = require('../phone/PhoneFactory');

class PhoneController {

    createPhone(req, res, next) {
       const phoneRepository = req.app.get('repo');
        phoneRepository.create(req.phone).then(data => {
            res.send(data);
        }).catch(next);
    }

    showPhone(req, res, next) {
        const phoneRepository = req.app.get('repo');
        phoneRepository.show().then(data => {
            res.send(data);
        }).catch(next);
    }

    updatePhone(req, res, next) {
        req.phone.setId(req.params.id);
        const phoneRepository = req.app.get('repo');
        phoneRepository.update(req.phone).then(data => {
            res.send('success');
        }).catch(next);
    }

    deletePhone(req, res, next) {
        req.phone.setId(req.params.id);
        const phoneRepository = req.app.get('repo');
        phoneRepository.delete(req.phone).then(data => {
            res.send('succes');
        }).catch(next);
    }

    joinDB(req, res, next) {
        const phoneRepository = req.app.get('repo');
        phoneRepository.join().then(data => res.send(data))
            .catch(next);
    }

    searchDB(req, res, next) {
        req.app.get('factory').search(req.condition)
            .then(data => res.send(data))
            .catch(next);
    }
}
module.exports = PhoneController;