import Address from "../valueObjects/address";
import CustomerFactory from "./customer.factory";

describe("Customer Factory unit test", () => {

    it("shoud creat a customer", () => {
        const customer = CustomerFactory.create("Matheus", "12345678910");

        expect(customer.id).toBeDefined()
        expect(customer.name).toBe("Matheus");
        expect(customer.CPF.getCPF()).toBe("12345678910")
        expect(customer.CPF.getFormattedCPF()).toBe("123.456.789-10")
    })


    it("shoud creat a customer with an address", () => {
        const address = new Address("v1", 1, "11111", "new york");

        const customer = CustomerFactory.createWithAddress("Matheus", "12345678910",address);

        expect(customer.id).toBeDefined()
        expect(customer.name).toBe("Matheus");
        expect(customer.CPF.getCPF()).toBe("12345678910")
        expect(customer.CPF.getFormattedCPF()).toBe("123.456.789-10")
        expect(customer.Address).toBeDefined()
        expect(customer.Address).toBe(address)
    })
})