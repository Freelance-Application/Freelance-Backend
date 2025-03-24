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
import { OrderModule } from './order/order.module';
import { ReviewModule } from './review/review.module';
import { ChatModule } from './chat/chat.module';
import { MessageModule } from './message/message.module';
import { PaymentModule } from './payment/payment.module';
import { FavoriteServiceModule } from './favorite-service/favorite-service.module';
import { NotificationModule } from './notification/notification.module';

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
    OrderModule,
    ReviewModule,
    ChatModule,
    MessageModule,
    PaymentModule,
    FavoriteServiceModule,
    NotificationModule,
  ],
})
export class AppModule {}
