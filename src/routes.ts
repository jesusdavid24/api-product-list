import { Application } from 'express';
import productRouter from './api/product';

const routes = (app: Application) => {
  app.use('/api/product', productRouter);
};

export default routes;
