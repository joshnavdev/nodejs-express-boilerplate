// Basic configuration
import * as fs from 'fs';
import convict from 'convict';

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

// Must create a .env.${env}.json file which saves all your private keys
// example: .env.development.json which contains all dev configuration

// Load environment dependent configuration
const env = conf.get('env');

const envFile = `.env.${env}.json`;
if (fs.existsSync(envFile)) {
  conf.loadFile(envFile);
}
conf.validate({ allowd: 'strict' });

const props = conf.getProperties();

export default props;
