import { Injectable } from "@nestjs/common";
import * as ccxt from "ccxt";

@Injectable()
export class BinanceService {
    private readonly exchange: ccxt.Exchange;

    constructor() {
        this.exchange = new ccxt.binance();
    }

    async getAllTokensAndPrice(): Promise<{ symbol: string; price: number }[]> {
        const tradingPairs = await this.exchange.fetchTickers(); // Получаем данные о торговых парах
        const tokensWithUsdtPrice = Object.keys(tradingPairs)
            .filter(symbol => symbol.endsWith("/USDT"))
            .map(symbol => {
                const ticker = tradingPairs[symbol];
                const baseSymbol = symbol.replace("/USDT", ""); // Удаляем '/USDT' из названия пары
                return {
                    symbol: baseSymbol,
                    price: ticker.last
                };
            })
            .filter(token => token.price !== undefined); // Фильтруем по наличию цены


        return tokensWithUsdtPrice;
    }
}
