import StopInfo from "../models/StopInfo";
import StopSchedule from "../models/StopSchedule";
import APIConsumer from "../controllers/APIConsumer";

export default class DataBuilder {
    static buildStopInfo(JSONStopInfo: any) {

        const stopInfo = new StopInfo(JSONStopInfo.name);

        return new Promise(((resolve, reject) => {
            DataBuilder.getTime(JSONStopInfo).then((stopScheduleArray: Array<StopSchedule>) => {
                stopInfo.setScheduleArray(stopScheduleArray);
                resolve(stopInfo);
            }).catch((err)=>{
                reject(err);
            });
        }));
    }


    static async getTime(array: any){
        const uriList: any = [];
        array.stops.forEach((item: any)=>{
            uriList.push(item.uri);
        });

        const stopSchedule: Array<StopSchedule> = [];

        for( let i = 0 ; i < uriList.length; i++){
            await DataBuilder.getDepartureTime(uriList[i]).then((time)=>{
                stopSchedule.push(new StopSchedule(array.stops[i].name, time as Date));
            });
        }

        return stopSchedule.sort(DataBuilder.customSort);
    }

    static customSort(a: StopSchedule, b: StopSchedule){
        return Number.parseInt(a.getDepartureTime().toString()) - Number.parseInt(b.getDepartureTime().toString());
    }

    static getDepartureTime(uri: string){
        const consumer = new APIConsumer();

        return new Promise(((resolve, reject) => {
            consumer.getData(uri).then((JSONContent: any)=>{
                resolve(JSONContent.time);
            }).catch((err: string)=>{
                reject(err);
            });
        }));

    }
}