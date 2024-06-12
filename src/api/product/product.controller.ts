import { type Request, type Response } from 'express';
import { type Product } from './producto.types';
import errorHandler from '@src/utils/errorHandler';

import { 
  put,
  create, 
  destroy,
  getAllProduct 
} from './product.services';

export async function getProducts(req: Request, res: Response) {
  try {
    const products = await getAllProduct();
    return res.send(products);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function createProduct(req: Request, res: Response) {
  try {
    const data: Product = req.body;

    const product = await create(data);
    return res.status(201).json(product);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function updateProduct(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = req.body;

    const product = await put( id, data );
    return res.json(product)
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function deleteProduct(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await destroy(id);

    return res.end();
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}
