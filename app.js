import express from 'express';
import { Server } from 'http';
import config from './config/config';
import appHelper from './utils/helpers/app';

const app = express();
const server = Server(app);

app.get('/', (req, res) => {
  res.send('Welcome to Node Express Boilerplate API');
});

require('./config/express').default(app);
require('./config/db').default(app);
require('./config/routes').default(app);

server.on('error', appHelper.onError(server));
server.on('listening', appHelper.onListening(server));

server.listen(config.appPort, config.appHost);
