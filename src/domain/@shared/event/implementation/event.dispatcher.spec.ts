import Product from "../../../product/entity/product";
import SendEmailWhenProductsIsCreatedHandler from "../../../product/event/handler/send-email-when-product-is-created.handler";
import ProductCreatEvent from "../../../product/event/product-created.event";
import EventDispatcher from "./event-dispatcher";

describe("Domain events testes", () => {

    it("should register an event handler", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductsIsCreatedHandler();
        eventDispatcher.register("ProductCreatEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["ProductCreatEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["ProductCreatEvent"].length).toBe(1);
        expect(eventDispatcher.getEventHandlers["ProductCreatEvent"][0]).toMatchObject(eventHandler);
    })

    it("should unregister an event handler", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductsIsCreatedHandler();

        eventDispatcher.register("ProductCreatEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["ProductCreatEvent"][0]).toMatchObject(eventHandler);

        eventDispatcher.unRegister("ProductCreatEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["ProductCreatEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["ProductCreatEvent"].length).toBe(0);
    })

    it("should unregister all event handlers", () => {

        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductsIsCreatedHandler();

        eventDispatcher.register("ProductCreatEvent", eventHandler);
        eventDispatcher.register("ProductCreatEvent", eventHandler);
    
        expect(eventDispatcher.getEventHandlers["ProductCreatEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["ProductCreatEvent"].length).toBe(2);

        eventDispatcher.unRegisterAll();

        expect(eventDispatcher.getEventHandlers["ProductCreatEvent"]).toBeUndefined();
    })


    it("should notify all event handlers", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductsIsCreatedHandler();
        const spyEventHandler = jest.spyOn(eventHandler, "handle")

        eventDispatcher.register("ProductCreatEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["ProductCreatEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["ProductCreatEvent"][0]).toMatchObject(eventHandler);

        const event = new ProductCreatEvent(new Product("1", "PS2", 200));

        // Quando o notify for execuado o SendEmailWhenProductsIsCreatedHandler.handler() deve ser chamado. 
        eventDispatcher.notify(event)

        expect(spyEventHandler).toHaveBeenCalled();
    })
})