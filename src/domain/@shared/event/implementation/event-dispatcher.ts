import EventDispacherInterface from "../interfaces/event-dispacher.interface";
import EventHandlerInterface from "../interfaces/event-handler.interface";
import EventInteface from "../interfaces/event.interface";

export default class EventDispatcher implements EventDispacherInterface {
    private eventHandlers: { [eventName: string]: EventHandlerInterface[] } = {};

    get getEventHandlers(): { [eventName: string]: EventHandlerInterface[] } {
        return this.eventHandlers;
    }

    notify(Event: EventInteface): void {
        const eventName = Event.constructor.name;
        if (this.eventHandlers[eventName]) {
            const handlers = this.eventHandlers[eventName]
            for (let handler of handlers) {
                handler.handle(Event);
            }
        }
    }

    register(eventName: string, eventHandler: EventHandlerInterface): void {
        if (!this.eventHandlers[eventName]) {
            this.eventHandlers[eventName] = [];
        }

        this.eventHandlers[eventName].push(eventHandler);
    }

    unRegister(eventName: string, eventHandler: EventHandlerInterface): void {
        if (this.eventHandlers[eventName]) {
            const index = this.eventHandlers[eventName].indexOf(eventHandler)
            if (index != -1) {
                this.eventHandlers[eventName].splice(index, 1);
            }
        }
    }

    unRegisterAll(): void {
        this.eventHandlers = {};
    }
}