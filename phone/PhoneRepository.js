const PhoneFactory = require('./PhoneFactory');
const phoneFactory = new PhoneFactory;
class PhoneRepository {

    constructor(knex) {
        this.knex = knex;
    }

    create(phone) {
        return this.knex('phones').insert({
            name: phone.getName(),
            price: phone.getPrice(),
            publisher_id: phone.getPublisher()
        });
    }

    show() {
        return this.knex.select().from('phones');
    }

    update(phone) {
        return this.knex('phones').where({id: phone.getId()}).update({
            name: phone.getName(),
            price: phone.getPrice(),
            publisher_id: phone.getPublisher()
        });
    }

    delete(phone) {
        return this.knex('phones').where({id: phone.getId()}).del();
    }

    join() {
        return this.knex.select('*').from('phones').innerJoin('publisher', function () {
            this.on('publisher.id', '=', 'phones.publisher_id');
        })
            .then(data => data.map(element => { return phoneFactory.makeFromDB(element)}))
    }
}
module.exports = PhoneRepository;