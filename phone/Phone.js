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

    setRam(ram) {
        this.ram = ram;
    }
    getRam() {
        return this.ram;
    }

    setStorage(storage) {
        this.storage = storage;
    }
    getStorage() {
        return this.storage;
    }

    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
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