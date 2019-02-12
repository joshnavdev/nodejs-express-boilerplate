import express from 'express';
import { Server } from 'http';
import passport from 'passport';
import config from './config/config';
import appHelper from './utils/helpers/app';

const app = express();
const server = Server(app);

app.get('/', (req, res) => {
  res.send('Welcome to Node Express Boilerplate API');
});

require('./config/db').default(app);
require('./config/express').default(app);
require('./config/passport').default(app, passport);
require('./config/routes').default(app);

server.on('error', appHelper.onError(server));
server.on('listening', appHelper.onListening(server));

server.listen(config.appPort, config.appHost);
