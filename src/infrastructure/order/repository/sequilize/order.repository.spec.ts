import { Sequelize } from "sequelize-typescript";
import OrderModel from "./model/order.model";
import CustomerModel from "../../../customer/repository/sequilize/model/customer.model";
import ProductModel from "../../../product/repository/sequilize/model/product.model";
import CustomerRepository from "../../../customer/repository/sequilize/customer.repository";
import Address from "../../../../domain/customer/valueObjects/address";
import ProductRepository from "../../../product/repository/sequilize/product.respository";
import Product from "../../../../domain/product/entity/product";
import OrderItem from "../../../../domain/checkout/entity/OrderItem";
import OrderRepository from "./order.repository";
import { Customer } from "../../../../domain/customer/entity/Customer";
import Order from "../../../../domain/checkout/entity/Order";
import OrderItemModel from "./model/order-item.model";

describe("Order repository siwth test", () => {

    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            logging: false,
            sync: { force: true }
        })

        await sequelize.addModels([ProductModel, CustomerModel, OrderItemModel, OrderModel])
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });


    it("should create a new order", async () => {
        const customerRepository = new CustomerRepository()

        const customer = new Customer("123", "matheus", "12345678910")
        const adrres = new Address("Stret", 1, "zip", "city")
        customer.Address = adrres;

        await customerRepository.create(customer);

        const productRepository = new ProductRepository();

        const product = new Product("1", "ps4", 1200);

        await productRepository.create(product);

        const orderRepository = new OrderRepository();

        const item = new OrderItem("1", product.name, product.price, product.id, 2);
        const order = new Order("1", customer.id, [item]);

        await orderRepository.create(order);

        const orderModel = await OrderModel.findOne(
            {
                where: { id: order.id },
                include: ["items"]
            })

        expect(orderModel.toJSON())
            .toStrictEqual({
                id: order.id,
                customer_id: order.customerId,
                total: order.total(),
                items: [{
                    id: item.id,
                    product_id: item.productId,
                    order_id: order.id,
                    quantity: item.quantity,
                    name: item.name,
                    price: item.price
                }]
            })

    })


    it("should search for an order by id", async () => {
        const customerRepository = new CustomerRepository()
        const customer = new Customer("123", "matheus", "12345678910")
        const adrres = new Address("Stret", 1, "zip", "city")
        customer.Address = adrres;
        await customerRepository.create(customer);

        const productRepository = new ProductRepository();
        const product = new Product("1", "ps4", 1200);
        await productRepository.create(product);

        const orderRepository = new OrderRepository();
        const item = new OrderItem("1", product.name, product.price, product.id, 2);
        const order = new Order("1", customer.id, [item]);
        await orderRepository.create(order);

        const modelAdd = await orderRepository.find(order.id);

        const orderModel = await OrderModel.findOne(
            {
                where: { id: order.id },
                include: ["items"]
            })

        expect(orderModel.toJSON())
            .toStrictEqual({
                id: modelAdd.id,
                customer_id: modelAdd.customerId,
                total: modelAdd.total(),
                items: [{
                    id: modelAdd.items[0].id,
                    product_id: modelAdd.items[0].productId,
                    order_id: modelAdd.items[0].id,
                    quantity: modelAdd.items[0].quantity,
                    name: modelAdd.items[0].name,
                    price: modelAdd.items[0].price
                }]
            })
    })
})




