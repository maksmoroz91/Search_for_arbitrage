import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';

@Module({
  providers: [TelegramService],
  imports: [TelegramService]
})
export class TelegramModule {}
