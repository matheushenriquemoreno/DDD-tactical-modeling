import { Sequelize } from "sequelize-typescript";
import ProductModel from "./model/product.model";
import ProductRepository from "./product.respository";
import Product from "../../../../domain/product/entity/product";

describe("product repository test", () => {
    
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            logging: false,
            sync: { force: true }
        })

        await sequelize.addModels([ProductModel])
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });


    it("shoulld creat a product", async () => {
        const productRepository = new ProductRepository();

        const product = new Product("1", "produto 1", 100)

        await productRepository.create(product);

        const productModel = await ProductModel.findOne({where: {id: "1"}})

        expect(productModel.toJSON()).toStrictEqual({
            id: "1",
            name: "produto 1",
            price: 100,
        });
    })

    it("shoulld update a product", async () => {
        const productRepository = new ProductRepository();

        const product = new Product("1", "produto 1", 100)
        
        await productRepository.create(product);

        
        const productModel = await ProductModel.findOne({where: {id: "1"}})

        expect(productModel.toJSON()).toStrictEqual({
            id: "1",
            name: "produto 1",
            price: 100,
        });

        product.changeName("Product 2")
        product.changePrice(200);

        await productRepository.update(product);

        const productModelUpdate = await ProductModel.findOne({where: {id: "1"}})

        expect(productModelUpdate.toJSON()).toStrictEqual({
            id: "1",
            name: "Product 2",
            price: 200,
        });
    })

    it("should find a product", async () => {

        const productRepository = new ProductRepository();

        const product = new Product("1", "produto 1", 100)
        
        await productRepository.create(product);

        const productModel = await ProductModel.findOne({where: {id: product.id}})

        const findProduct = await productRepository.find(product.id);

        expect(productModel.toJSON()).toStrictEqual({
            id: findProduct.id,
            name: findProduct.name,
            price: findProduct.price,
        });
    });

    it("shoud find all products", async () => {
        const productRepository = new ProductRepository();

        const product = new Product("1", "produto 1", 100)
        await productRepository.create(product);

        const product2 = new Product("2", "produto 2", 150)
        await productRepository.create(product2);

        const foundProducts = await productRepository.findAll();

        const products = [product, product2];

        expect(products).toEqual(foundProducts);
    })
});