class UndeletedSearchCondition {
    describe(sqlQuery) {
        return sqlQuery.where({'phones.undeleted_at': null})
    }
}
module.exports = UndeletedSearchCondition;