import Order from "../entity/Order";
import OrderItem from "../entity/OrderItem";

export interface OrderFactoryProps{
    id: string, 
    customerId: string,
    items: OrderItem[]
}

export default class OrderFactory {
    static create(orderProps: OrderFactoryProps) : Order {
        return new Order(orderProps.id, orderProps.customerId, orderProps.items);
    }
}