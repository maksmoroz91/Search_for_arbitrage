import { Module } from "@nestjs/common";
import { SearchService } from "@src/exchanges/search.service";
import { BinanceModule } from "@src/exchanges/binance/binance.module";
import { CoinexModule } from "@src/exchanges/coinex/coinex.module";

@Module({
    imports: [
        BinanceModule,
        CoinexModule
    ],
    providers: [SearchService],
    exports: [SearchService]
})
export class ExchangesModule {
}
