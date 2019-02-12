import ApiRoutes from '../routes';

export default (app) => {
  app.use('/api', ApiRoutes);
};
