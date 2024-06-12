import { Application } from 'express';
import productRouter from './api/product';
import healthCheckRouter from './api/healthcheck'

const routes = (app: Application) => {
  app.use('/api/product', productRouter);
  app.use('/api/healthcheck', healthCheckRouter);
};

export default routes;
