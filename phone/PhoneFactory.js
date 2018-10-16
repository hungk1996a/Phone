const Phone = require('./Phone');

class PhoneFactory {
    makeFromRequest(phoneRaw) {
        const phone = new Phone(phoneRaw.name);
        phone.setRam(phoneRaw.ram);
        phone.setStorage(phoneRaw.storage);
        phone.setColor(phoneRaw.color);
        phone.setPrice(phoneRaw.price);
        phone.setPublisher(phoneRaw.publisher);
        return phone;
    }
}
module.exports = PhoneFactory;