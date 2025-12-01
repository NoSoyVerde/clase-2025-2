import { PrismaClient } from '@/lib/generated/prisma/client';
import PrismaClientLogger from '@/lib/prisma-logger';

const prisma = new PrismaClient({
  log: PrismaClientLogger.isEnabled ? ['query', 'info', 'warn', 'error'] : [],
});

export default prisma;