import { Module } from "@nestjs/common";
import { SearchService } from "@src/exchanges/search.service";
import { BinanceModule } from "@src/exchanges/binance/binance.module";

@Module({
    imports: [
        BinanceModule,
    ],
    providers: [SearchService],
    exports: [SearchService]
})
export class ExchangesModule {}
