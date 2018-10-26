const UndeletedSearchCondition = require('../Search/Undeleted_Search_Condition');
const IdSearchCondition = require('../Search/Id_Search_Condition');
const AdvanceSearchCondition = require('../Search/Advance_Search_Condition');
const BasicSearchCondition = require('../Search/Basic_Search_Condition');

module.exports = (req, res, next) => {
  req.condition = makeCondition(req);
  next();
};
function makeCondition(req) {
    if(req.path ==='/advance'){
      return new AdvanceSearchCondition(req.query.name, req.query.title)
    } else if(req.path ==='/basic') {
      return new BasicSearchCondition(req.query.keyword)
    } else if(req.path === '/phones') {
        return new UndeletedSearchCondition()
    } else if(req.path.toString().startsWith('/phone')) {
        return new IdSearchCondition(req.params.id)
    }
}