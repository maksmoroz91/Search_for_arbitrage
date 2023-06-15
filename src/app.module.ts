import { Module } from "@nestjs/common";
import { AppLoopService } from "./app.loop.service";
import { ConfigModule } from "@nestjs/config";
import { TelegramModule } from "./telegram/telegram.module";
import { TokensFilterModule } from "./tokens_filter/tokens_filter.module";
import { ExchangesModule } from "@src/exchanges/exchanges.module";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TelegramModule,
        TokensFilterModule,
        ExchangesModule
    ],
    providers: [
        AppLoopService
    ]
})
export class AppModule {
}
