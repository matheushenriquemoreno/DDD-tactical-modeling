import Product from "../entities/product"
import ProductService from "./productService";

describe("Product service unit tests", () => {

    it("should change the prices of all products", () => {
        const product1 = new Product("1", "ps2", 10);
        const product2 = new Product("2", "ps3", 600);
        const product3 = new Product("3", "ps4", 1000);
        const produtos = [product1, product2, product3];

        // Ao se trabalhar com banco de dados esse formato não seria viavel,
        // pois trazer por exemplo 10 mil produtos em memoria para atualizar não faria sentido
        // alem de trazer uma alta carga de processamento.
        // mais viavel seria ter um service junto a um repository que emcapsularia uma procedure
        // que altera esse valor diretamente no banco, gerando um processamento mais eficiente.
        ProductService.increasePrice(produtos, 10);

        expect(product1.price).toBe(11);
        expect(product2.price).toBe(660);
        expect(product3.price).toBe(1100);
    })
})