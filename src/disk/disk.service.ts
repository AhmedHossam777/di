import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData(): string {
    console.log('Drawing 10 watts of power from powerService');
    this.powerService.supplyPower(10);
    return 'data!';
  }
}
