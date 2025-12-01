// Prisma logger utility to conditionally enable query logging
// based on environment variables or development mode

const PrismaClientLogger = {
  isEnabled: process.env.PRISMA_LOGGING === 'true' || process.env.NODE_ENV === 'development',
};

export default PrismaClientLogger;
