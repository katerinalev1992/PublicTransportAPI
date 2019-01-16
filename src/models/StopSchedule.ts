export default class StopSchedule {
    private lineName: string;
    private departureTime: Date;

    constructor(lineName: string, departureTime: Date){
        this.lineName = lineName;
        this.departureTime = departureTime;
    }

    getLineName(): string{
        return this.lineName;
    }

    setLineName(value: string): void{
        this.lineName = value;
    }

    getDepartureTime(): Date{
        return this.departureTime;
    }

    setDepartureTime(departureTime: Date): void{
        this.departureTime = departureTime;
    }
}