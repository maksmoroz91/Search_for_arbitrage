import { Injectable } from "@nestjs/common";
import * as ccxt from "ccxt";
import { SearchService } from "@src/exchanges/search.service";

@Injectable()
export class CoinexService {
    private readonly exchange: ccxt.Exchange;

    constructor(private readonly searchService: SearchService) {
        this.exchange = new ccxt.coinex();
    }

    async getTokenPrice(token: string, dollar='/USDT') {
        return await this.searchService.getTokenPrice(token, dollar, this.exchange);
    }
}
