import { Module } from "@nestjs/common";
import { HuobiService } from "./huobi.service";
import { SearchService } from "@src/exchanges/search.service";

@Module({
    providers: [
        HuobiService,
        SearchService
    ],
    exports: [HuobiService]
})
export class HuobiModule {
}
