import { Injectable } from "@nestjs/common";
import * as ccxt from "ccxt";

@Injectable()
export class SearchService {
    async getTokenPrice(token: string, dollar: string, exchange: ccxt.Exchange) {
        try {
            const ticker = await exchange.fetchTicker(token + dollar);

            if (ticker && ticker.last) {
                const price = ticker.last;
                return price;
            }
        } catch (err) {
            return null;
        }
    }
}
