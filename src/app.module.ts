import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SkillModule } from './skill/skill.module';
import { ProfileModule } from './profile/profile.module';
import { UserSkillModule } from './user-skill/user-skill.module';
import { ServiceModule } from './service/service.module';
import { CategoryModule } from './category/category.module';
import { ServiceCategoryModule } from './service-category/service-category.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    AuthModule,
    SkillModule,
    ProfileModule,
    UserSkillModule,
    ServiceModule,
    CategoryModule,
    ServiceCategoryModule,
  ],
})
export class AppModule {}
