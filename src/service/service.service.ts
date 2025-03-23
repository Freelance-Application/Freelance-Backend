import { Injectable } from '@nestjs/common';
import { ServiceRepository } from './service.repository';

@Injectable()
export class ServiceService {
  constructor(private readonly repository: ServiceRepository) {}
}
