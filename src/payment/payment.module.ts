import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { PaymentRepository } from './payment.repository';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [PaymentService, PaymentRepository],
  controllers: [PaymentController],
  imports: [DatabaseModule],
})
export class PaymentModule {}
