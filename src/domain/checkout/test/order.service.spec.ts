import getId from "../../../helpers/getId";
import { Customer } from "../../customer/entity/Customer";
import Order from "../entity/Order";

import OrderItem from "../entity/OrderItem";
import OrderService from "../service/orderService";

describe("Order service Unit Test", () => {
    it("should place an Order", () => {
        const custumer = new Customer(getId(), "matheus", "12345678910");

        const item = new OrderItem(getId(), "item1", 10, "p2", 1);

        const order:Order = OrderService.placeOrder(custumer, [item])

        expect(custumer.rewardPoints).toBe(5);
        expect(order.total()).toBe(10);
    })

    it("should get total of all orders", () => {
        const item = new OrderItem(getId(), "Controle ps5", 289.99, "p2", 1);
        const order = new Order(getId(), "1", [item]);
        const order2 = new Order(getId(), "2", [item]);

        const total = OrderService.totalPrice([order, order2]);

        expect(total).toBe(579.98)
    })
})