class Searcher {
    constructor(connection, factory) {
        this.connection = connection;
        this.factory = factory;
    }

    search(condition) {
        const factory = this.factory;
        const sqlQuery = this.connection
            .select('phones.name','phones.id', 'phones.price', 'phones.publisher_id', 'publisher.title', 'publisher.address')
            .from('phones').leftJoin('publisher', 'publisher_id', 'publisher.id');
        condition.describe(sqlQuery);
        return sqlQuery.then(data => data.map(element => factory.makeFromDB(element)));
    }
}
module.exports = Searcher;