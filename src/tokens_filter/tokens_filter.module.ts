import { Module } from "@nestjs/common";
import { TokensFilterService } from "./tokens_filter.service";
import { TelegramService } from "@src/telegram/telegram.service";
import { BinanceService } from "@src/exchanges/binance/binance.service";
import { CoinexService } from "@src/exchanges/coinex/coinex.service";
import { SearchService } from "@src/exchanges/search.service";
import { HuobiService } from "@src/exchanges/huobi/huobi.service";

@Module({
    providers: [
        TokensFilterService,
        TelegramService,
        BinanceService,
        CoinexService,
        SearchService,
        HuobiService,
    ],
    exports: [TokensFilterService]
})
export class TokensFilterModule {
}
