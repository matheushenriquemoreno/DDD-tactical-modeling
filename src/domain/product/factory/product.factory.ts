import getId from "../../../helpers/getId";
import Product from "../entity/product";
import ProductEletronic, { Voltage } from "../entity/productEletronic";
import ProductInterface from "../entity/produtc.interface";

export default class ProductFactory {
    public static create(type: "NORMAL"|"ELETRONIC", name:string, price: number): ProductInterface {
        switch(type){
            case "NORMAL":
                return new Product(getId(),name, price);
            case "ELETRONIC":
                return new ProductEletronic(getId(),name, price, Voltage.VOLTAGE220);
            default:
                throw new Error("Type Product not exists");
        }
    }
}