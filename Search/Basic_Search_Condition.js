class BasicSearchCondition {
    constructor(keyword) {
        this.keyword = keyword;
    }
    describe(sqlQuery) {
        let keyword = this.keyword;
        return sqlQuery.where(function() {
            this.where('phones.name', 'like', '%' + keyword + '%')
                .orWhere('publisher.title', 'like', '%' + keyword + '%')
        }).where('undeleted_at', null)
    }
}
module.exports = BasicSearchCondition;