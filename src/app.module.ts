import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SkillModule } from './skill/skill.module';
import { ProfileModule } from './profile/profile.module';
import { UserSkillModule } from './user-skill/user-skill.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    AuthModule,
    SkillModule,
    ProfileModule,
    UserSkillModule,
  ],
})
export class AppModule {}
