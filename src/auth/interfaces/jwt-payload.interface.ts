import { RoleUser } from '@prisma/client';

export interface JwtPayload {
  sub: string;
  email: string;
  role: RoleUser;
  userId: string;
}
