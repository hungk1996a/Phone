
exports.up = function(knex, Promise) {
  return knex.schema.createTable('phones', function(table) {
      table.increments('id');
      table.string('name');
      table.string('ram');
      table.string('storage');
      table.string('color');
      table.float('price');
      table.string('publisher');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('phones');
};
