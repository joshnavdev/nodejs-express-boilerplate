// Basic configuration
const convict = require('convict');

const conf = convict({
  app: {
    name: {
      default: 'Proyect Name',
    },
    authSecretKey: {
      default: 'proyectkey',
    },
  },
  appSettings: {
    publicIp: {
      default: 'http://0.0.0.0:4000',
      env: 'PUBLIC_IP',
    },
    timeZone: {
      default: 'America/Lima',
    },
  },
  db: {
    host: {
      default: '127.0.0.1',
      env: 'DB_HOST',
    },
    port: {
      default: '27017',
      env: 'DB_PORT',
    },
    database: {
      default: 'db_mongo',
      env: 'DB_DATABASE',
    },
    user: {
      default: 'dbuser',
      env: 'DB_USER',
    },
    password: {
      default: '123456',
      env: 'DB_PASSWORD',
    },
  },
  appHost: {
    default: '0.0.0.0',
  },
  appPort: {
    default: '4000',
  },
  env: {
    format: ['production', 'development', 'staging'],
    default: 'development',
    env: 'NODE_ENV',
  },
});

// Must create a .env.json file which saves all your private keys
conf.loadFile('./.env.json');
conf.validate({ allowd: 'strict' });

const props = conf.getProperties();
module.exports = props;
