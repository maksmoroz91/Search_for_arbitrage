import { Injectable, OnApplicationBootstrap } from "@nestjs/common";

@Injectable()
export class AppLoopService implements OnApplicationBootstrap {
    onApplicationBootstrap() {
        this.startLoop();
    }

    private async startLoop() {
        while (true) {
            //await ;
            {}
        }
    }
}
