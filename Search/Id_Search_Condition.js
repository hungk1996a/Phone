class IdSearchCondition {
    constructor(phoneId) {
        this.phoneId = phoneId;
    }
    describe(sqlQuery) {
        return sqlQuery.where({'phones.undeleted_at': null,'phones.id': this.phoneId})
    }
}
module.exports = IdSearchCondition;