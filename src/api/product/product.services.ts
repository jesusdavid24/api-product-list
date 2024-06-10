import { PrismaClient } from '@prisma/client';
import { type Product } from './producto.types';

const prisma = new PrismaClient();

export async function getAllProduct() {
  const products = await prisma.product.findMany({
    where: {
      isDeleted: false
    }
  });
  return products
}

export async function create(input: Product) {
  const data = {
    ...input,
  };

  const product = await prisma.product.create({
    data,
  });

  return product;
}

export async function put(id: string, data: Partial<Product>) {
  const product = await prisma.product.update({
    where: {
      id,
    },
    data
  });

  return product;
}

export async function destroy(id: string) {
  const product = await prisma.product.update({
    where: {
      id
    },
    data: {
      isDeleted: true
    }
  });

  return product;
}
