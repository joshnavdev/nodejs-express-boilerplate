import APIRouter from '../routes';

export default (app) => {
  app.use('/api', APIRouter);
};
