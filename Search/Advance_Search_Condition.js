class AdvanceSearchCondition {
    constructor(name, title) {
        this.name = name;
        this.title = title;
    }
    describe(sqlQuery) {
        return sqlQuery.where('name', this.name)
            .where('title', this.title)
            .where('undeleted_at', null)
    }
}
module.exports = AdvanceSearchCondition;