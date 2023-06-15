import { Injectable } from "@nestjs/common";

@Injectable()
export class SearchService {
    async getTokenPrice(token: string, dollar: string, exchange) {
        try {
            // Получаем рыночные данные для символа
            const ticker = await exchange.fetchTicker(token + dollar);

            // Проверяем, есть ли свойство 'last' в объекте ticker
            if (ticker && ticker.last) {
                const price = ticker.last; // Извлекаем цену из рыночных данных

                return price;
            }
        } catch (err) {
            return null;
        }
    }
}
