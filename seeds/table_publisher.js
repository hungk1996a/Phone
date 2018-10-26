
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('publisher').del()
    .then(function () {
      // Inserts seed entries
      return knex('publisher').insert([
          {title: 'samsung', address: 'korea'},
          {title: 'nokia', address: 'tq'},
          {title: 'iphone', address: 'rowValue3'}
      ]);
    });
};
