import { Module } from "@nestjs/common";
import { CoinexService } from "./coinex.service";

@Module({
    providers: [CoinexService],
    exports: [CoinexService]
})
export class CoinexModule {
}
