class Phone {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }

    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }

    setPrice(price) {
        this.price = price;
    }
    getPrice() {
        return this.price;
    }

    setPublisher(publisher) {
        this.publisher = publisher;
    }
    getPublisher() {
        return this.publisher;
    }
}
module.exports = Phone;