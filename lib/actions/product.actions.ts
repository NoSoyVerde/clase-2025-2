"use server";

// Use wrapper helpers exported from the Prisma module to call DB methods.
// This avoids calling instance methods on imported PrismaClient objects
// across app-RSC boundaries which can trigger Next.js "invalid invocation"
// runtime errors.
import { findProducts, findProductUnique } from '@/db/prisma';
import { Product } from '@/types/Product';
import { convertToPlainObject } from '../utils';

export async function getLatestProducts(): Promise<Product[]> {
  const data = await findProducts({ orderBy: { createdAt: 'desc' } });
  const plain = convertToPlainObject(data);
  return plain.map((product: typeof data[0]) => ({
    ...product,
    price: Number(product.price),
    rating: Number(product.rating),
  }));
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const data = await findProductUnique({ where: { slug } });
  if (!data) return null;
  const product = convertToPlainObject(data);
  return {
    ...product,
    price: Number(product.price),
    rating: Number(product.rating),
  };
}