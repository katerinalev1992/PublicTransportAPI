import StopSchedule from "./StopSchedule";

export default class StopInfo {

    private stopName: string;
    private stopSchedules: Array<StopSchedule>;

    constructor(stopName: string, stopSchedules?: Array<StopSchedule>){
        this.stopName = stopName;
        if(stopSchedules) {
            this.stopSchedules = stopSchedules;
        }
        else {
            this.stopSchedules = [];
        }
    }

    setStopName(value: string): void{
        this.stopName = value;
    }

    getStopName(): string{
        return this.stopName;
    }

    addStopSchedule(stopSchedule: StopSchedule): void{
        this.stopSchedules.push(stopSchedule);
    }

    setScheduleArray(stopSchedules: Array<StopSchedule>): void{
        this.stopSchedules = stopSchedules;
    }

    removeStopSchedule(stopSchedule: StopSchedule){
        this.stopSchedules = this.stopSchedules.filter((item) => {
            return item !== stopSchedule
        });
    }
}