// uma caracterisca de um objeto de valor, e que ele não pode ser alteravel, ele deve ser imutavel
// em caso de troca deve descartar o antigo e criar um novo.
// também não possui indentificador.


export default class Address {
    _street: string = "";
    _number: number = 0;
    _zipCode: string = "";
    _city: string = "";
  
    constructor(street: string, number: number, zip: string, city: string) {
      this._street = street;
      this._number = number;
      this._zipCode = zip;
      this._city = city;
  
      this.validate();
    }
  
    get street(): string {
      return this._street;
    }
  
    get number(): number {
      return this._number;
    }
  
    get zip(): string {
      return this._zipCode;
    }
  
    get city(): string {
      return this._city;
    }
    
    validate() {
      if (this._street.length === 0) {
        throw new Error("Street is required");
      }
      if (this._number === 0) {
        throw new Error("Number is required");
      }
      if (this._zipCode.length === 0) {
        throw new Error("Zip is required");
      }
      if (this._city.length === 0) {
        throw new Error("City is required");
      }
    }
  
    toString() {
      return `${this._street}, ${this._number}, ${this._zipCode} ${this._city}`;
    }
  }