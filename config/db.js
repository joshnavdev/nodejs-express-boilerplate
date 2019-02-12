import Knex from 'knex';
import KnexFile from '../knexfile';

export default (app) => {
  const db = Knex(KnexFile);

  app.db = db; // eslint-disable-line
};
