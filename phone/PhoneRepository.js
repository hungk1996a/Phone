class PhoneRepository {

    constructor(knex) {
        this.knex = knex;
    }

    create(phone) {
        return this.knex('phones').insert({
            name: phone.getName(),
            ram: phone.getRam(),
            storage: phone.getStorage(),
            color: phone.getColor(),
            price: phone.getPrice(),
            publisher: phone.getPublisher()
        });
    }

    show() {
        return this.knex.select().from('phones');
    }

    detail(id) {
        return this.knex.select().from('phones').where({id: id});
    }

    update(phone) {
        return this.knex('phones').where({id: phone.getId()}).update({
            name: phone.getName(),
            ram: phone.getRam(),
            storage: phone.getStorage(),
            color: phone.getColor(),
            price: phone.getPrice(),
            publisher: phone.getPublisher()
        });
    }

    delete(phone) {
        return this.knex('phones').where({id: phone.getId()}).del();
    }
}
module.exports = PhoneRepository;