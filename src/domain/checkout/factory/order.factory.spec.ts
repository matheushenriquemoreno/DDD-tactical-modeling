import getId from "../../../helpers/getId";
import OrderItem from "../entity/OrderItem";
import OrderFactory, { OrderFactoryProps } from "./order.factory"

describe("order factory",  () => {

    it("should create an order", () => {
        const orderProps: OrderFactoryProps = {
            id: getId(),
            customerId: getId(),
            items: [ 
                new OrderItem(getId(), "ps3", 400, getId(), 2)
            ]
        }

        const order = OrderFactory.create(orderProps);

        expect(order.id).toBe(orderProps.id);
        expect(order.customerId).toBe(orderProps.customerId);
        expect(order.items.length).toBe(orderProps.items.length);
    })
})