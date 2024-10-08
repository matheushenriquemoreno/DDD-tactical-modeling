import getId from "../../../helpers/getId";
import Address from "../valueObjects/address";
import { Customer } from "../entity/Customer";

describe("Customer unit Testes", () => {
    it("Should throw error when id is empty", () => {
        expect(() =>{
            let customer = new Customer("", "Matheus", "12345678910")
        }).toThrow("Id is required");
    });

    it("Should throw error when name is empty", () => {
        expect(() =>{
            let customer = new Customer("123", "", "12345678910")
        }).toThrow("Name is required");
    });

    it("should throw an error if the CPF does not have the standard size of 11 characters.", () => {
        expect(() =>{
            let customer = new Customer("123", "Matheus", "000")
        }).toThrow("CPF com tamanho invalido.");
    });

    it("Change name", () => {
        let customer = new Customer("123", "Matheus", "12345678910")

        customer.changeName("Matheus Henrique")

        expect(customer.name).toBe("Matheus Henrique")
    })

    it("Should activate customer", () => {
        let customer = new Customer("123", "Matheus", "12345678910")

        const addres = new Address("street 1", 24, "74938-880", "São paulo");

        customer.Address = addres;

        customer.activate();

        expect(customer.isActive()).toBe(true);
    })

    it("Should throw error when addres is undefined when you activate a customer", () => {
        expect(() =>{
            let customer = new Customer("123", "Matheus", "12345678910")
            customer.activate();
        }).toThrow("Adrress is mandatory to activate a customer!");
    })

    it("Should desactivate customer", () => {
        let customer = new Customer("123", "Matheus", "12345678910")

        customer.deactivate();

        expect(customer.isActive()).toBe(false);
    })

    it("should add and spend rewards points", () => {
        const customer = new Customer(getId(), "matheus", "12345678910")

        expect(customer.rewardPoints).toBe(0);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(10);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(20);

        customer.spendRewardPoints(5);
        expect(customer.rewardPoints).toBe(15);
    })
})