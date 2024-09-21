import Product from "./product";

export enum Voltage{
    VOLTAGE220 = 220,
    VOLTAGE127 = 127
}

export default class ProductEletronic extends Product {
    private _voltage: Voltage[] = [];

    constructor(id: string, name: string, price: number, voltage: Voltage) {
        super(id, name, price);
        this._voltage.push(voltage);
    }

    get voltage() : Voltage[] {
        return this._voltage;
    }

    Addvoltage(voltage: Voltage){
       this._voltage.push(voltage)
    }
}