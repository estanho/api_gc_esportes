const prismaError = (error: any) => {
  console.log('🛑 prisma error:', error);

  if (error.code === 'P2025') {
    return {
      errors: [
        {
          field: '',
          type: 'prisma',
          message: error.meta.cause,
        },
      ],
    };
  } else if (error.code === 'P2002') {
    return {
      errors: [
        {
          field: '',
          type: 'prisma',
          message: error.meta.target,
        },
      ],
    };
  } else {
    return {
      errors: [
        {
          field: 'NEW ERROR',
          type: 'prisma',
          message: error,
        },
      ],
    };
  }
};

export { prismaError };
