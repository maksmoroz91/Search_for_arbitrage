import { Module } from "@nestjs/common";
import { SearchService } from "@src/exchanges/search.service";
import { BinanceModule } from "@src/exchanges/binance/binance.module";
import { CoinexModule } from "@src/exchanges/coinex/coinex.module";
import { HuobiModule } from './huobi/huobi.module';

@Module({
    imports: [
        BinanceModule,
        CoinexModule,
        HuobiModule
    ],
    providers: [SearchService],
    exports: [SearchService]
})
export class ExchangesModule {
}
