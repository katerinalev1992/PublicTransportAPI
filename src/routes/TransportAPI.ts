import {Request, Response} from 'express';

import IAppRoute from '../core/IAppRoute';
import APIConsumer from "../controllers/APIConsumer";
import DataBuilder from "../util/DataBuilder";
import StopInfo from "../models/StopInfo";
import {TransportAPIImpl} from "./TransportAPIImpl";

const UserRoute: IAppRoute = {
    createRouter(router) {
        const transportAPIImpl: TransportAPIImpl = new TransportAPIImpl();
        return router()
            .get('/:stopId', (req: Request, res: Response) => {
                transportAPIImpl.getAllStopInfo(req.params.stopId).then((stopInfo: StopInfo) => {
                    res.send(stopInfo);
                }).catch((err: string) => {
                    res.send(err);
                });

            })
    }


};

export default UserRoute;