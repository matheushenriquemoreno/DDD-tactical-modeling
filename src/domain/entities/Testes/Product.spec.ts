import Product from "../product";

describe("Product unit Testes", () => {

    it("Should throw error when id is empty", () => {
        expect(() =>{
            let Produto = new Product("", "Produto 1", 100);
        }).toThrow("Id is required");
    });


    it("Should throw error when name is empty", () => {
        expect(() =>{
            let Produto = new Product("1", "", 100);
        }).toThrow("Name is required");
    });

    it("Should throw error when price is less than zero", () => {
        expect(() =>{
            let Produto = new Product("1", "Ps5", -1);
        }).toThrow("Price must be greater than zero");
    });

    it("Should change name", () => {
        let produto = new Product("1", "Ps5", 1000);

        produto.changeName("PS4")

        expect(produto.name).toBe("PS4");
    });

    it("Should change price", () => {
        let produto = new Product("1", "Ps5", 1000);

        produto.changePrice(2590);

        expect(produto.price).toBe(2590);
    });

});