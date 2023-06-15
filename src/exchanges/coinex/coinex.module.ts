import { Module } from "@nestjs/common";
import { CoinexService } from "./coinex.service";
import { SearchService } from "@src/exchanges/search.service";

@Module({
    providers: [
        CoinexService,
        SearchService
    ],
    exports: [CoinexService]
})
export class CoinexModule {
}
