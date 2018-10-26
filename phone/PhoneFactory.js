const Phone = require('./Phone');
const Publisher = require('../Publisher/Publisher');
class PhoneFactory {
    makeFromRequest(phoneRaw) {
        const phone = new Phone(phoneRaw.name);
        phone.setPrice(phoneRaw.price);
        phone.setPublisher(phoneRaw.publisher_id);
        return phone;
    }

    makeFromDB(phoneRaw) {
        const phone = new Phone(phoneRaw.name);
        phone.setPrice(phoneRaw.price);
        phone.setId(phoneRaw.id);
        const publisher = new Publisher(phoneRaw.title);
        publisher.setAddress(phoneRaw.address);
        publisher.setId(phoneRaw.publisher_id);
        phone.setPublisher(publisher);
        return phone;
    }
}
module.exports = PhoneFactory;