import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { TokensFilterService } from "@src/tokens_filter/tokens_filter.service";

@Injectable()
export class AppLoopService implements OnApplicationBootstrap {

    constructor(private readonly tokenFilter: TokensFilterService) {
    }

    onApplicationBootstrap() {
        this.startLoop();
    }

    private async startLoop() {
        while (true) {
            await this.tokenFilter.getTokenAndPrice();
        }
    }
}
