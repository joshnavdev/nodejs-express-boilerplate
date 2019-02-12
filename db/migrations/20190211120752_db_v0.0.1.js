exports.up = async (knex, Promise) => {
  await Promise.all([
    knex.schema.createTable('user', (table) => {
      table.increments('id').primary();
      table.string('name', 25).notNullable();
      table.integer('age').notNullable();
    }),
  ]);
};

exports.down = async (knexm, Promise) => {};
