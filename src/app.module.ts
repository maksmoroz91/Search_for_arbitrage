import { Module } from "@nestjs/common";
import { AppLoopService } from "./app.loop.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TelegramModule } from './telegram/telegram.module';
import { TokensFilterModule } from './tokens_filter/tokens_filter.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TelegramModule,
        TokensFilterModule
    ],
    providers: [
        AppLoopService,
        ConfigService,
    ]
})
export class AppModule {
}
