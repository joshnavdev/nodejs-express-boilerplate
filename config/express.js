import bodyParser from 'body-parser';
import logger from 'morgan';
import { shouldDeserialize } from '../utils/middleware/auth';

export default (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(logger('dev'));
  app.use(shouldDeserialize);
};
