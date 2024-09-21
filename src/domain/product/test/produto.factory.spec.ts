import ProductFactory from "../factory/product.factory"

describe('Product factory unit test', ()=> {

    it("should create a produt type NORMAL", () => {

        const product = ProductFactory.create("NORMAL","produto A", 1)

        expect(product.id).toBeDefined()
        expect(product.name).toBe("produto A")
        expect(product.price).toBe(1)
        expect(product.constructor.name).toBe("Product")
    })

    
    it("should create a produt type eletronic", () => {
        const product = ProductFactory.create("ELETRONIC","PS5", 1)

        expect(product.id).toBeDefined()
        expect(product.name).toBe("PS5")
        expect(product.price).toBe(1)
        expect(product.constructor.name).toBe("ProductEletronic")
    })
})