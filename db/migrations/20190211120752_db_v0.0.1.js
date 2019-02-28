exports.up = async (knex, Promise) => {
  await Promise.all([
    knex.schema.createTable('user', (table) => {
      table.increments('id').primary();
      table.string('name', 25).notNullable();
      table
        .string('email', 50)
        .notNullable()
        .unique();
      table.string('password', 100).notNullable();
    }),
  ]);
};

exports.down = async (knexm, Promise) => {};
