import * as express from 'express';
import { Express, Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';

import AppRoutes from './routes/ApplicationRoute';
import IAppConfig from "./config/IAppConfig";

export default class Server {
    private static app: Server;

    private expApp: Express;

    constructor(private config: IAppConfig) {
        this.config = config;
        this.expApp = express();
        Server.app = this;
    }

    run(): void {
        this.expApp.use(bodyParser.urlencoded({extended: false}));

        this.expApp.use((req: Request, res: Response, next: NextFunction) => {
            res.contentType('application/json');
            next();
        });

        let appRouter = new AppRoutes();
        appRouter.mount(this.expApp);

        this.expApp.listen(this.config.port, (err:any) => {
            if (err !== undefined) {
                console.log(err);
            } else {
                console.log("Server run on port: " + this.config.port);
            }
        });
    }

}