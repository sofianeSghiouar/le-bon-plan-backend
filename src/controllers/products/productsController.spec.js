const { v4 } = require("uuid")
// length of uuid v4() = 36
const { ProductsController } = require("./productsController")


describe('ProductsController', () => {
    describe('getProducts()', () => {
        test('it should return an empty list', () => {
            // GIVEN
            const productsController = new ProductsController()

            // WHEN
            const result = productsController.getProducts()

            // THEN
            expect(result).toEqual([])
        })
    })
    describe('saveProduct()', () => {
        test('it should save one product',  () => {
            // given
            const productsController = new ProductsController()
           
            // when
            const result = productsController.saveProduct({                
                title: 'my Product'
            })            
            // then
            expect(typeof result === 'object').toBe(true)
            expect(result._id.length).toEqual(36)
            expect(typeof result._id).toBe("string")
            expect(result.title).toEqual('my Product')         
        })
    })
   
})
