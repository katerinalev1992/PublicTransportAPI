import DataBuilder from "../util/DataBuilder";
import APIConsumer from "../controllers/APIConsumer";
import StopInfo from "../models/StopInfo";

export class TransportAPIImpl {
    constructor(){

    }

    getAllStopInfo(stopId: string){
        const consumer = new APIConsumer();

        return new Promise(((resolve, reject) => {
            consumer.getData(stopId).then((JSONContent: JSON) => {
                DataBuilder.buildStopInfo(JSONContent).then((stopInfo: StopInfo) => {
                    resolve(stopInfo);
                });

            }).catch((err: string) => {
                reject(err);
            });
        }))

    }
}