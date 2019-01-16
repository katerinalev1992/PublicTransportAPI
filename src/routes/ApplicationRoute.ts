import { Express, Router } from 'express';
import IPathRoute from '../core/IPathRoute';
import TransportAPI from './TransportAPI';

export default class AppRoutes {
    private routeList: IPathRoute[] = [
        {path: '/', router: TransportAPI}
    ];

    mount(expApp: Express): void {
        this.routeList.forEach((item) => {

            expApp.use(
                item.path,
                item.router.createRouter(Router)
            );
        });
    }
}