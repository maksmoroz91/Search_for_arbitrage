import { Module } from "@nestjs/common";
import { AppLoopService } from "./app.loop.service";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true })
    ],
    providers: [AppLoopService, ConfigService]
})
export class AppModule {
}
