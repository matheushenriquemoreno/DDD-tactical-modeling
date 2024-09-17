import getId from "../../../helpers/getId";
import { Customer } from "../../customer/entity/Customer";
import Order from "../entity/Order";

import OrderItem from "../entity/OrderItem";


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