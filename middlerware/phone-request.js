const PhoneFactory = require('../phone/PhoneFactory');

module.exports = (req, res, next) => {
    const phoneFactory = new PhoneFactory();
    req.phone = phoneFactory.makeFromRequest(req.body);
    next();
};