import { Prisma } from '@prisma/client';

const userSelectFields: Prisma.UserSelect = {
  id: true,
  name: true,
  lastname: true,
  email: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
  role: true,
};

export { userSelectFields };
