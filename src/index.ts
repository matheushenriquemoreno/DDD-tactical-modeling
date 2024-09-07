import { Customer } from "./domain/entities/Customer";
import Order from "./domain/entities/Order";

import OrderItem from "./domain/entities/OrderItem";
import Address from "./domain/entities/ValueObjects/address";

let customer = new Customer("123", "Matheus", "12345678910");

const address = new Address("rua", 1, "74936580", "Goias");

customer.Address = address;

// customer.activate();

// const item1 = new OrderItem("1", "item 1", 10);
// const item2 = new OrderItem("2", "item 2", 10);
// const item3 = new OrderItem("3", "item 3", 10);

// const order = new Order("1", "123", [item1,item2, item3]);

// console.log(order._customerId)


