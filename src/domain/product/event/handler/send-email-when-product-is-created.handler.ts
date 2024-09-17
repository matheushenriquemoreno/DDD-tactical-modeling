import Product from "../../entity/product";
import EventHandlerInterface from "../../../@shared/event/interfaces/event-handler.interface";
import ProductCreatEvent from "../product-created.event";

export default class SendEmailWhenProductsIsCreatedHandler implements EventHandlerInterface<ProductCreatEvent>{
    handle(event: ProductCreatEvent): void {
        console.log(`Sending email to: ${(event.eventData as Product).name}`)
    }
}