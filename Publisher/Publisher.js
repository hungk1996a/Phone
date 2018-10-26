class Publisher {
    constructor(title) {
        this.title = title;
    }
    getTitle() {
        return this.title;
    }

    setId(id) {
        this.id = id;
    }
    getId() {
        return id;
    }

    setAddress(address) {
        this.address = address;
    }
    getAddress() {
        return this.address;
    }
}
module.exports = Publisher;