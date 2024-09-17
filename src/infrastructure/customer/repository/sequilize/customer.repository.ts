import Address from "../../../../domain/customer/valueObjects/address";
import NotExistsError from "../../../../domain/errors/NotExistsError";
import CustomerRepositoryInterface from "../../../../domain/customer/repository/customer.repository.interface";
import CustomerModel from "./model/customer.model";
import { Customer } from "../../../../domain/customer/entity/Customer";


export default class CustomerRepository implements CustomerRepositoryInterface {
    async create(entity: Customer): Promise<void> {
      await CustomerModel.create({
        id: entity.id,
        name: entity.name,
        street: entity.Address.street,
        number: entity.Address.number,
        zipcode: entity.Address.zip,
        city: entity.Address.city,
        cpf: entity.CPF.getCPF(),
        active: entity.isActive(),
        rewardPoints: entity.rewardPoints,
      });
    }
  
    async update(entity: Customer): Promise<void> {
      await CustomerModel.update(
        {
          name: entity.name,
          street: entity.Address.street,
          number: entity.Address.number,
          zipcode: entity.Address.zip,
          city: entity.Address.city,
          active: entity.isActive(),
          cpf: entity.CPF.getCPF(),
          rewardPoints: entity.rewardPoints,
        },
        {
          where: {
            id: entity.id,
          },
        }
      );
    }
  
    async find(id: string): Promise<Customer> {
      let customerModel;
      try {
        customerModel = await CustomerModel.findOne({
          where: {
            id,
          },
          rejectOnEmpty: true,
        });
      } catch (error) {
        throw new NotExistsError("Customer not found");
      }
  
      const customer = new Customer(id, customerModel.name, customerModel.cpf);
      const address = new Address(
        customerModel.street,
        customerModel.number,
        customerModel.zipcode,
        customerModel.city
      );
      customer.changeAddress(address);
      return customer;
    }
  
    async findAll(): Promise<Customer[]> {
      const customerModels = await CustomerModel.findAll();
  
      const customers = customerModels.map((customerModels) => {
        let customer = new Customer(customerModels.id, customerModels.name, customerModels.cpf);
        customer.addRewardPoints(customerModels.rewardPoints);
        const address = new Address(
          customerModels.street,
          customerModels.number,
          customerModels.zipcode,
          customerModels.city
        );
        customer.changeAddress(address);
        if (customerModels.active) {
          customer.activate();
        }
        return customer;
      });
  
      return customers;
    }
  }