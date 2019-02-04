/* eslint-disable no-console */
/* eslint-disable global-require */

import mongoose from 'mongoose';
import config from './config';

export default () => {
  const {
    db: { host, port, database, user, password },
  } = config;
  const auth = user && password ? `${user}:${password}@` : '';
  const dbURI = `mongodb://${auth}${host}:${port}/${database}`;

  mongoose.connect(dbURI, { useNewUrlParser: true });

  mongoose.connection.on('connected', () => {
    console.log(`Mongoose default connection open to ${dbURI}`);
  });

  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose default connection error: ${err}`, dbURI);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
  });

  require('../models');
};
