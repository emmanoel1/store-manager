const { expect } = require('chai');

const sinon = require('sinon');

const productService = require('../../../../services/productServices');

const productModel = require('../../../../models/productModel');

const expectedSuccess = [
    {
        "id": 3,
        "name": "Escudo do Capitão América",
        "quantity": 30,
    },
    {
        "id": 4,
        "name": "produto",
        "quantity": 100,
    },
    {
        "id": 5,
        "name": "teste",
        "quantity": 100,
    },
];

describe('productService.getAll', () => {
    describe('Should pass when', () => {
        before(() => {
            sinon.stub(productModel, 'getAll').resolves(expectedSuccess)
        });

        after(() => {
            productModel.getAll.restore();
        })

        it('Correct URL is typed', async () => {
            const result = await productService.getAll();
            expect(result).to.be.eql(expectedSuccess);
        });
    });
});
