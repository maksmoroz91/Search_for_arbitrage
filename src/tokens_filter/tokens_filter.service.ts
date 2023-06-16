import { Injectable } from "@nestjs/common";
import { BinanceService } from "@src/exchanges/binance/binance.service";
import { CoinexService } from "@src/exchanges/coinex/coinex.service";
import { TelegramService } from "@src/telegram/telegram.service";
import { HuobiService } from "@src/exchanges/huobi/huobi.service";

@Injectable()
export class TokensFilterService {
    private readonly listExchanges = ["Huobi", "Coinex", ];

    constructor(
        private readonly telegramService: TelegramService,
        private readonly binanceService: BinanceService,
        private readonly Coinex: CoinexService,
        private readonly Huobi: HuobiService,
    ) {
    }

    async getTokenAndPrice() {
        const tokens = await this.binanceService.getAllTokensAndPrice();

        for (const exchange of this.listExchanges) {

            for (const token of tokens) {
                const price = await this[exchange].getTokenPrice(token.symbol);

                if (price !== null) {
                    if (this.checkInterestDifference(token.price, price)) {
                        const message = this.telegramService.formatTokenPricesMessage({
                            symbol: token.symbol,
                            binancePrice: token.price,
                            price: price,
                            nameExchange: exchange
                        });
                        await this.telegramService.sendTelegramMessage(message);
                    }
                }
            }


        }
    }

    private checkInterestDifference(binancePrice: number, otherPrice: number): Boolean {
        const interest = 0.005; // 0.1 - это 10% процентов
        const difference = Math.abs(binancePrice - otherPrice);
        const averagePrice = (binancePrice + otherPrice) / 2;
        const limitOfDifference = averagePrice / 3;//Проверка на слишком большую разницу, чтобы отсеять монеты с одинаковым названием из разных сетей

        return ((averagePrice * interest < difference) && (difference < limitOfDifference));
    }
}
