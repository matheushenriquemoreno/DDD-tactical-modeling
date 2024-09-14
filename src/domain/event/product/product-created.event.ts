import Product from "../../entities/product";
import EventInteface from "../@shared/interfaces/event.interface";

export default class ProductCreatEvent implements EventInteface { 
    dateTimeOccurred: Date;
    eventData: any;

    constructor (eventData: Product){
        this.dateTimeOccurred = new Date();
        this.eventData = eventData;
    }
}