import express from 'express';
import { Server } from 'http';
import config from './config/config';
import appHelper from './utils/helpers/app';

const app = express();
const server = Server(app);

app.get('/', (req, res) => {
  res.send(`Welcome to Node Express Boilerplate API ${config.env}`);
});

require('./config/express')(app);
require('./config/db')(app);
require('./config/routes')(app);

server.on('error', appHelper.onError(server));
server.on('listening', appHelper.onListening(server));

server.listen(config.appPort, config.appHost);
