import getId from "../../../helpers/getId";
import { Customer } from "../entity/Customer";
import Address from "../valueObjects/address";

export default class CustomerFactory {
    static create(name:string, cpf:string) : Customer {
        return new Customer(getId(), name, cpf)
    }

    static createWithAddress(name:string, cpf:string, address:Address) : Customer{
        const customer = new Customer(getId(), name, cpf);
        customer.changeAddress(address);
        return customer;
    }
}