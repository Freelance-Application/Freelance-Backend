import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { ReviewRepository } from './review.repository';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService, ReviewRepository],
  imports: [DatabaseModule],
})
export class ReviewModule {}
