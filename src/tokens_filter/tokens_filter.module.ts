import { Module } from '@nestjs/common';
import { TokensFilterService } from './tokens_filter.service';

@Module({
  providers: [TokensFilterService],
  exports: [TokensFilterService],
})
export class TokensFilterModule {}
