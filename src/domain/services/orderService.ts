import getId from "../../helpers/getId";
import { Customer } from "../entities/Customer";
import Order from "../entities/Order";
import OrderItem from "../entities/OrderItem";


export default class OrderService{
    static totalPrice(orders: Order[]){
        return orders.reduce((acumulaodr, order) => acumulaodr + order.total(), 0)
    }


    static placeOrder(customer: Customer, itens: OrderItem[]) : Order {
        if(itens.length === 0){
            throw new Error("Order Must have at leat one item");
        }

        const order = new Order(getId(), customer.id, itens);

        customer.addRewardPoints(order.total() / 2);

        return order;
    }
}