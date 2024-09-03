import Order from "../Order";
import OrderItem from "../OrderItem";

describe("Order unit Testes", () => {

    it("Should throw error when id is empty", () => {
        expect(() =>{
            let order = new Order("", "", []);
        }).toThrow("Id is required");
    });

    it("Should throw error when CustomerId is empty", () => {
        expect(() =>{
            let order = new Order("123", "", []);
        }).toThrow("Customer id is required");
    });

    it("Should throw error when Item is empty", () => {
        expect(() =>{
            let order = new Order("1000", "980", []);
        }).toThrow("Item qtd must be greater than 0");
    });


    it("Should calculate total", () => {
        const item = new OrderItem("1", "PS5", 2500);
        const item2 = new OrderItem("2", "Controle ps5", 289.99);
        
        const order = new Order("1", "1", [item, item2]);
        expect(order.total()).toBe(2789.99);

        const order2 = new Order("1", "1", [item]);
        expect(order2.total()).toBe(2500);
    });

});