import { PrismaClient } from '@/lib/generated/prisma/client';
import PrismaClientLogger from '@/lib/prisma-logger';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const globalForPrisma = global as unknown as { prisma: PrismaClient, prismaBase: PrismaClient };

// Cliente base para better-auth (sin extensiones)
export const prismaBase = globalForPrisma.prismaBase || new PrismaClient({ 
  adapter 
});

// Cliente extendido para el resto de la app
export const prisma = globalForPrisma.prisma || prismaBase.$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString();
        },
      },
      rating : {
        compute(product) {
          return product.rating.toString();
        },
      },    
    }
  }
});

export default prisma;  

// Cache the instances on global to avoid multiple clients during HMR
if (!globalForPrisma.prismaBase) globalForPrisma.prismaBase = prismaBase;
if (!globalForPrisma.prisma) globalForPrisma.prisma = prisma;

// Helper wrappers: call the prismaBase methods from here to avoid invoking
// instance methods on an imported PrismaClient from other modules (avoids
// app-RSC "invalid invocation" proxy issues when methods are called on
// imported instances). Prefer importing these wrappers from server code.
// Note: do not export functions that directly call methods on the
// PrismaClient instance at module scope for use across RSC boundaries.
// If you need to query from other modules, import `prismaBase` dynamically
// inside the calling function (e.g. `const { prismaBase } = await import('@/db/prisma')`).

// Lightweight wrapper helpers that call the Prisma client methods from this
// module. Import and call these from server components/actions instead of
// calling `prismaBase.*` directly in other modules to avoid Next.js app-RSC
// invalid-invocation proxy errors.
export async function findProducts(args?: any) {
  return prismaBase.product.findMany(args);
}

export async function findProductUnique(args?: any) {
  return prismaBase.product.findUnique(args);
}