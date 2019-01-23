import bodyParser from 'body-parser';
import logger from 'morgan';

export default (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(logger('dev'));
};
