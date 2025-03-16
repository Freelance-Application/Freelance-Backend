import { SetMetadata } from '@nestjs/common';
import { RoleUser } from '@prisma/client';

export const Roles = (...roles: RoleUser[]) => SetMetadata('roles', roles);
