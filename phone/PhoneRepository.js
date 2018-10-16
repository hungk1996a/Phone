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
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    show(phone) {
        return this.knex.select().from('phones')
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    update(phone) {
        return this.knex('phones').where({id: phone.getId()}).update({
            name: phone.getName(),
            ram: phone.getRam(),
            storage: phone.getStorage(),
            color: phone.getColor(),
            price: phone.getPrice(),
            publisher: phone.getPublisher()
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
}
module.exports = PhoneRepository;