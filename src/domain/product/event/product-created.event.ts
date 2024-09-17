import Product from "../entity/product";
import EventInteface from "../../@shared/event/interfaces/event.interface";

export default class ProductCreatEvent implements EventInteface { 
    dateTimeOccurred: Date;
    eventData: any;

    constructor (eventData: Product){
        this.dateTimeOccurred = new Date();
        this.eventData = eventData;
    }
}