import EventHandlerInterface from "./event-handler.interface";
import EventInteface from "./event.interface";

export default interface EventDispacherInterface {
    notify(Event: EventInteface): void;
    register(eventName: string, eventHandler: EventHandlerInterface): void;
    unRegister(eventName: string, eventHandler: EventHandlerInterface): void;
    unRegisterAll(): void;
}