import Address from "./ValueObjects/address";
import { CPF } from "./ValueObjects/cpf";


// Entidade Anemica
// essa entidade está somente armazenando dados
// DTO -> essa entidade criada parece com um DTO, devido a não ter regra de negocio.
// o motivo dessa abordagem e muito utilizada devido a classe ser orientada a ORM.


// ja o DDD visa a entidade manipular todo o corração da aplicação, visando uma modelagem de dominio rico 

// uma entidade precisa de comportamentos / regras de negocio, que são formas de manipular o comportamento da minha entidade
// aplicando validações, formulas, ou qualquer coisa que satisfaça o que o sistema está pedido. 

class CustomerAnemica {
    _id: string;
    _name: string;
    _addres: string

    constructor(id: string, name: string, address: string) {
        this._id = id;
        this._name = name;
        this._addres = address;
    }

    get Id() {
        return this._id;
    }

    get Name() {
        return this._name;
    }

    set Name(name: string) {
        this._name = name;
    }

    get Addres() {
        return this._addres;
    }

    set Addres(addres: string) {
        this._addres = addres;
    }
}


// Em DDD a entidade sempre tem que representar um estado correto e atual, com os dados consistentes.
// não se deve criar uma entidade com algum campo que possa estar invalido.
// os dados a todos os momentos devem estar consistentes.

// sempre por padrão a entidade tem que se validar, não deixando outras partes do sistema validala, pois pode ter alguma rotina que a deixa em um estado invalido.



// modelagem rica, expressando regras de negocio.
export class Customer {
    private _id: string;
    private _name: string;
    private _address?: Address;
    private _active: boolean = false;
    private _cpf: CPF;
    private _rewardPoints = 0;

    constructor(id: string, name: string, cpf: string) {
        this._cpf = new CPF(cpf);
        this._id = id;
        this._name = name;
        this.validate();
    }

    set Address(address: Address){
        this._address = address;
    }

    get Address() {
        return this._address;
    }

    get name() : string{
        return this._name;
    }

    get id(){
        return this._id;
    }

    get CPF() : CPF{
        return this._cpf;
    }

    get rewardPoints() : number{
       return this._rewardPoints;
    }

    validate() {
        if (this._name.length == 0) {
            throw new Error("Name is required");
        }
        if (this._id.length == 0) {
            throw new Error("Id is required");
        }
    }
    // a modelagem do dominio rico deve expressar o negocio, não somente get e setter.
    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    changeAddress(addres: Address){
        this.Address = addres;
    }
   
    activate() {
        if (!this._address) {
            throw new Error("Adrress is mandatory to activate a customer!");
        }

        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

    isActive(){
        return this._active;
    }

    addRewardPoints(points: number){
        this._rewardPoints += points;
    }

    spendRewardPoints(points: number){
        this._rewardPoints -= points;
    }
}


// DDD e sobre atender a complexidade / requisitos de negocio, não a complexidade do software, como banco de dados, busca de dados.