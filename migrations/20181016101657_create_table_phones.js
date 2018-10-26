
exports.up = function(knex, Promise) {
  return knex.schema.createTable('phones', function(table) {
      table.increments('id');
      table.string('name');
      table.float('price');
      table.integer('publisher_id');
      table.date('undeleted_at')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('phones');
};
