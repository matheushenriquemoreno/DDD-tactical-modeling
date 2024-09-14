
import Order from "../../../domain/entities/Order";
import OrderItem from "../../../domain/entities/OrderItem";
import OrderRepositoryInterface from "../../../domain/repository/order.repository.interface";
import OrderItemModel from "../../database/sequelize/model/order-item.model";
import OrderModel from "../../database/sequelize/model/order.model";

export default class OrderRepository implements OrderRepositoryInterface {
    async create(entity: Order): Promise<void> {
        await OrderModel.create({
            id: entity.id,
            customer_id: entity.customerId,
            total: entity.total(),
            items: entity.items.map((item) => ({
                id: item.id,
                name: item.name,
                price: item.price,
                product_id: item.productId,
                quantity: item.quantity
            }))
        }, {
            include: [{ model: OrderItemModel }]
        });
    }

    update(entity: Order): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async find(id: string): Promise<Order> {
        const model = await OrderModel.findOne<OrderModel>({
            where: {id:id},
            include: {model: OrderItemModel}
        })

      return this.getOrderEntity(model);
    }

    async findAll(): Promise<Order[]> {
        const models = await OrderModel.findAll<OrderModel>({
            include: {model: OrderItemModel}
        })

        return models.map(order => this.getOrderEntity(order))
    }

    private getOrderEntity(model: OrderModel){
        return new Order(model.id, model.customer_id, model.items.map((item) => {
            return new OrderItem(item.id, item.name, item.price, item.product_id, item.quantity)
        }))
    }

}