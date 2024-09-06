export default class OrderItem {
    private _id: string;
    private _productId: string;
    private _quantity;
    private _name: string;
    private _price: number;
    
    constructor(id: string, name: string, price: number, productId: string, quantity: number){
        this._id = id;
        this._name = name;
        this._price = price;
        this._productId = productId;
        this._quantity = quantity;
        this.validate();
    }

    validate(){
        if(this._quantity <= 0)
            throw Error("Quantity must be greater than 0");
    }

    get quantity(){
        return this._quantity;
    }

    get price() {
        return this._price * this._quantity;
    }
}
