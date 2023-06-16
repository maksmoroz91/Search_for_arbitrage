import { Injectable } from "@nestjs/common";
import * as TelegramBot from "node-telegram-bot-api";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class TelegramService {
    private readonly telegramBot: TelegramBot;
    private readonly token: string;
    private readonly chatId: string;

    constructor(private readonly configService: ConfigService) {
        this.token = this.configService.get("TELEGRAM_BOT_TOKEN");
        this.chatId = this.configService.get("YOUR_CHAT_ID");

        this.telegramBot = new TelegramBot(this.token);
    }

    async sendTelegramMessage(message: string): Promise<void> {
        if (message.trim() !== "") {
            await this.telegramBot.sendMessage(this.chatId, message);
        }
    }

    formatTokenPricesMessage(tokenPrice: {
        symbol: string;
        binancePrice: number;
        price: number,
        nameExchange: string
    }): string {
        let message = "";

        message += `Токен: ${tokenPrice.symbol}\n`;
        message += `Цена на Binance:`.padEnd(18) + `${tokenPrice.binancePrice}\n`;
        message += `Цена на ${tokenPrice.nameExchange}:`.padEnd(25 - tokenPrice.nameExchange.length) + `${tokenPrice.price}\n\n`;

        return message;
    }
}
